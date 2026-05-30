export const metadata = {
    title: "Blog | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/blog"
    },
    description: "Tutorials, tips, and insights on mixing, mastering, and music production from SL Studio.",
    keywords: [
        "mixing tips",
        "mastering tips",
        "music production blog",
        "audio engineering",
        "blues rock mixing",
        "home recording tips",
    ],
};

export default function BlogPage() {
    return (
        <div className="mt-16 mb-20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em]">
                        Studio Notes
                    </span>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mt-2">
                        Blog
                    </h1>
                    <p className="text-white/40 text-base mt-4 max-w-xl">
                        Tutorials, tips, and honest insights on mixing, mastering, and music production.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    <a href="/blog/blues-rock-mixing-mastering"
                       className="group rounded-2xl border border-white/5 bg-white/[0.03] p-8 flex flex-col gap-4 hover:border-gold2/30 transition"
                       style={{borderLeft: "3px solid #C9A84C"}}>
                        <div className="flex items-center gap-3">
                            <span className="text-white/30 text-xs uppercase tracking-widest">Mixing & Mastering</span>
                            <span className="text-white/20 text-xs">·</span>
                            <span className="text-white/30 text-xs">May 2026</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold group-hover:text-gold2 transition">
                            Blues Rock Mixing and Mastering — How I Hear This Genre
                        </h2>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Blues rock is not a genre you can fake. You either grew up with it, played it, felt it — or you didn't. Here's how I approach the genre I know best.
                        </p>
                        <span className="text-sm mt-2" style={{color: "#C9A84C"}}>Read more →</span>
                    </a>
                </div>
            </div>
        </div>
    );
}