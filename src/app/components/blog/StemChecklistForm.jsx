"use client";

import { useState } from "react";

// → Formspree setup: register free at https://formspree.io, create a form,
//   then replace YOUR_FORM_ID below with the ID Formspree gives you
//   (it looks like "mzzykabc"). One ID works for all three languages.
const FORMSPREE_ID = "mbdnyabl";

const DEFAULTS = {
  title: "Get the Track Prep Checklist (PDF)",
  text: "One page, print-friendly: formats, limiter, stems, naming, sending. Drop your email and the download unlocks right here.",
  placeholder: "your@email.com",
  button: "Send me the checklist \u2192",
  sending: "Sending...",
  successTitle: "Done - your checklist is ready.",
  successText:
    "Grab the PDF below. I'll only write when I have something genuinely useful - no spam, ever.",
  download: "Download the PDF checklist",
  error: "Something went wrong - please try again, or just email me directly.",
  invalid: "Please enter a valid email address.",
};

function track(event, lang) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, { lang });
  }
}

export default function StemChecklistForm({ pdfHref, lang = "en", labels }) {
  const t = { ...DEFAULTS, ...labels };
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const clean = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) {
      setStatus("error");
      setMessage(t.invalid);
      return;
    }
    setStatus("sending");
    setMessage("");
    track("checklist_form_submit", lang);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: clean, lang, source: "stem-checklist" }),
      });
      if (!res.ok) throw new Error("formspree error");
      setStatus("done");
    } catch {
      setStatus("error");
      setMessage(t.error);
    }
  }

  return (
    <div
      id="checklist"
      className="rounded-2xl p-8 flex flex-col items-center text-center gap-4"
      style={{
        background: "rgba(201,168,76,0.07)",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      {status !== "done" ? (
        <>
          <h3 className="text-xl font-semibold text-white">{t.title}</h3>
          <p className="text-white/65 text-base max-w-md">{t.text}</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#C9A84C] transition"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="text-black font-semibold px-6 py-3.5 rounded-xl hover:opacity-90 transition text-sm disabled:opacity-50 whitespace-nowrap"
              style={{ backgroundColor: "#C9A84C" }}
            >
              {status === "sending" ? t.sending : t.button}
            </button>
          </form>
          {status === "error" && (
            <p className="text-sm" style={{ color: "#e07a7a" }}>
              {message}
            </p>
          )}
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold" style={{ color: "#7ac97a" }}>
            {t.successTitle}
          </h3>
          <p className="text-white/65 text-base max-w-md">{t.successText}</p>
          <a
            href={pdfHref}
            download
            onClick={() => track("checklist_pdf_download", lang)}
            className="inline-flex items-center gap-2 text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition text-sm"
            style={{ backgroundColor: "#C9A84C" }}
          >
            {t.download} 2193
          </a>
        </>
      )}
    </div>
  );
}
