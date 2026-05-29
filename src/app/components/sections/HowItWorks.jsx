import { Upload, Music2, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Upload,
        step: "01",
        title: "Send Your Files",
        description: "Upload your stems, rough mix, rehearsal recording, or even a voice memo. Any format, any quality — I will tell you what I can do with it. First conversation is always free.",
        time: "10 minutes"
    },
    {
        icon: Music2,
        step: "02",
        title: "We Discuss Your Vision",
        description: "I listen carefully and reach out to understand what you want. Genre, mood, references — we align before I start. No surprises at the end.",
        time: "Same day"
    },
    {
        icon: CheckCircle,
        step: "03",
        title: "You Receive the Result",
        description: "Finished track delivered in 3 to 5 business days. Up to 3 rounds of revisions included — we tune until it feels exactly right.",
        time: "3 to 5 business days"
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 border-t border-white/5">
            <div className="mb-10">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                    The Process
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mt-2">
                    How It Works
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg bg-gold2/10 flex items-center justify-center">
                                <step.icon className="w-5 h-5 text-gold2" />
                            </div>
                            <span className="text-white/10 text-4xl font-bold">{step.step}</span>
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed flex-1">{step.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold2"></div>
                            <span className="text-white/30 text-xs uppercase tracking-widest">{step.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-black text-sm font-medium px-8 py-4 rounded-xl hover:opacity-90 transition"
                    style={{backgroundColor: "#C9A84C"}}
                >
                    Get Started — First Consultation Free
                </a>
            </div>
        </section>
    );
}
