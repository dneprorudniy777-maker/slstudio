"use client";
import Image from "next/image";
import ScrollReveal from "../common/ScrollReveal";

// Names/photos stay; heading + quote text + role come from labels (English
// default) so the section can be reused on the Polish home via a labels prop.
const TESTI_META = [
    { name: "Andrii Holikov", photo: "/images/review-andrei3.webp" },
    { name: "Oleg Volos", photo: "/images/review-luis2.webp" },
    { name: "Olga Lalum", photo: "/images/review-anna2.webp" },
];

const DEFAULTS = {
    eyebrow: "Client Reviews",
    heading: "What Artists Say",
    items: [
        {
            role: "Guitarist & Musician",
            text: "Total bomb. Keep this one, don't change a thing. I keep hitting replay. Maestro, bravo."
        },
        {
            role: "Singer & Songwriter",
            text: "Sitting alone in front of the speakers, celebrating my son's 30th birthday — listening to what we made together. Feelings just hit me. No words. Thank you."
        },
        {
            role: "Vocalist & Composer",
            text: "Beautiful music — it just gives you wings. ❤️❤️❤️❤️❤️❤️❤️"
        },
    ],
};

export default function Testimonials({ labels }) {
    const L = { ...DEFAULTS, ...labels };
    const testimonials = TESTI_META.map((m, i) => ({ ...m, ...L.items[i] }));
    return (
        <section className="py-12 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    {L.eyebrow}
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    {L.heading}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <ScrollReveal key={i} delay={i * 120}>
                        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-6 overflow-hidden h-full" style={{borderLeft: "3px solid #C9A84C"}}>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} style={{color: "#C9A84C"}} className="text-sm">★</span>
                                ))}
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed flex-1">
                                {`"${t.text}"`}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2"
                                     style={{borderColor: "rgba(201,168,76,0.3)"}}>
                                    <Image
                                        src={t.photo}
                                        alt={t.name}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-white">{t.name}</p>
                                    <p className="text-white/55 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
