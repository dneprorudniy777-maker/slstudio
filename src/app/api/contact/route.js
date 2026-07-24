import { Resend } from 'resend';

const escapeHtml = (str) =>
    String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

// Simple in-memory rate limiter (per serverless instance).
// Not bulletproof, but stops naive bot spam from burning the Resend quota.
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX = 5; // max submissions per window per IP
const rateHits = new Map();

const isRateLimited = (ip) => {
    const now = Date.now();
    const fresh = (rateHits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
    if (fresh.length >= RATE_MAX) {
        rateHits.set(ip, fresh);
        return true;
    }
    fresh.push(now);
    rateHits.set(ip, fresh);
    if (rateHits.size > 1000) {
        for (const [key, times] of rateHits) {
            if (times.every((t) => now - t >= RATE_WINDOW_MS)) rateHits.delete(key);
        }
    }
    return false;
};

export async function POST(req) {
    try {
        const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
        if (isRateLimited(ip)) {
            return Response.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const { name, email, service, message, website } = await req.json();

        // Honeypot: real users never fill this hidden field — pretend success for bots
        if (website) {
            return Response.json({ ok: true });
        }

        if (!name || !email || !service || !message) {
            return Response.json({ error: 'Missing fields' }, { status: 400 });
        }

        if (String(name).length > 200 || String(email).length > 200 || String(service).length > 100 || String(message).length > 5000) {
            return Response.json({ error: 'Message too long' }, { status: 400 });
        }

        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            service: escapeHtml(service),
            message: escapeHtml(message),
        };

        await resend.emails.send({
            from: 'SL Studio <noreply@slstudio.pro>',
            to: 'serhii@slstudio.pro',
            replyTo: email,
            subject: `New inquiry from ${name} — ${service}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #C9A84C; border-bottom: 1px solid #C9A84C; padding-bottom: 8px;">
                        New message from slstudio.pro
                    </h2>
                    <p><strong>Name:</strong> ${safe.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
                    <p><strong>Service:</strong> ${safe.service}</p>
                    <p><strong>About the project:</strong></p>
                    <p style="background: #f5f5f5; padding: 12px; border-radius: 8px; white-space: pre-wrap;">${safe.message}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
                    <p style="color: #999; font-size: 12px;">Sent from slstudio.pro contact form</p>
                </div>
            `,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error('Email send error:', error);
        return Response.json({ error: 'Failed to send' }, { status: 500 });
    }
}
