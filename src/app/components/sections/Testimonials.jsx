import Image from "next/image";

const testimonials = [
    {
        name: "Andrei Malinowski",
        role: "Guitarist & Musician",
        photo: "/images/review-andrei.png",
        text: "I sat in front of my speakers and couldn't move. The emotions just hit me — I had no words. Serhii took my rough recordings and turned them into something I'm genuinely proud of. This is exactly the sound I heard in my head but couldn't reach on my own."
    },
    {
        name: "Luis Mesquita",
        role: "Singer & Songwriter",
        photo: "/images/review-luis.png",
        text: "I'm not exaggerating when I say I had tears in my eyes. The final mix was so alive, so emotional — I just wanted to keep listening on repeat. Serhii has a rare gift for understanding what a song needs to breathe."
    },
    {
        name: "Anna Kowalska",
        role: "Vocalist & Composer",
        photo: "/images/review-anna.png",
        text: "I have never worked with a more attentive and professional producer. Serhii is a true perfectionist — he hears every detail and doesn't stop until everything feels exactly right. My vocals never sounded this good."
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    Client Reviews
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    What Artists Say
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-6 overflow-hidden" style={{borderLeft: "3px solid #C9A84C"}}>
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
                                <p className="text-white/40 text-xs">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}