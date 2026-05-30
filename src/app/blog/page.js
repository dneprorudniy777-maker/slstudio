export const metadata = {
    title: "Blog | SL Studio",
    alternates: {
        canonical: "https://www.slstudio.pro/blog"
    },
    description: "Tutorials, tips, and insights on mixing, mastering, and music production from SL Studio.",
};

const posts = [
    {
        href: "/blog/izotope-ozone-11-review",
        image: "/images/blog-ozone11-cover.png",
        category: "Review",
        date: "March 15, 2025",
        title: "iZotope Ozone 11 Review: The Best Mastering Plugin Gets Better",
        excerpt: "Ozone 11 adds the Stabilizer module, improves the Mastering Assistant, and refines the Limiter. Here is what actually matters for real-world mastering work."
    },
    {
        href: "/blog/pro-tools-vs-studio-one",
        image: "/images/blog-pt-cover.png",
        category: "Tutorials",
        date: "February 10, 2025",
        title: "Pro Tools vs Studio One — Which DAW Is Better for Mixing?",
        excerpt: "A detailed comparison for mixing engineers. Workflow, features, stability — and which one actually gets out of your way."
    },
    {
        href: "/blog/blues-rock-mixing-mastering",
        image: "/images/blog-blues-rock_1.jpg",
        category: "Mixing & Mastering",
        date: "January 21, 2025",
        title: "Blues Rock Mixing and Mastering — How We Hear This Genre",
        excerpt: "Blues rock is not a genre you can fake. You either grew up with it, played it, felt it — or you didn't."
    },
];

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post, i) => (
                        <a key={i} href={post.href}
                           className="group rounded-xl border border-white/5 bg-white/[0.03] overflow-hidden hover:border-white/10 transition flex flex-col"
                           style={{borderLeft: "3px solid #C9A84C"}}>
                            <img
                                src={post.image}
                                alt={post.title}
                                style={{width: "100%", height: "200px", objectFit: "cover"}}
                            />
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/30 text-xs uppercase tracking-widest">{post.category}</span>
                                    <span className="text-white/20 text-xs">·</span>
                                    <span className="text-white/30 text-xs">{post.date}</span>
                                </div>
                                <h2 className="text-base md:text-lg font-semibold group-hover:text-gold2 transition leading-snug">
                                    {post.title}
                                </h2>
                                <p className="text-white/50 text-sm leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <span className="text-xs mt-2" style={{color: "#C9A84C"}}>Read more →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}