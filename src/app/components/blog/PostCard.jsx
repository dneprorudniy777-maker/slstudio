import Link from "next/link";

// featured: full-width hero card (image beside text on md+)
// eager: above-the-fold cards load their cover immediately (LCP)
export default function PostCard({ post, featured = false, eager = false }) {
    if (featured) {
        return (
            <Link
                href={post.href}
                className="group rounded-2xl border border-white/5 border-l-[3px] border-l-gold bg-white/[0.03] overflow-hidden hover:border-white/10 hover:border-l-gold transition flex flex-col md:flex-row"
            >
                <div className="md:w-3/5 aspect-video shrink-0 overflow-hidden">
                    <img
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-3 justify-center flex-1">
                    <div className="flex items-center gap-2">
                        <span className="text-gold text-xs uppercase tracking-widest">Latest</span>
                        <span className="text-white/40 text-xs">·</span>
                        <span className="text-white/60 text-xs uppercase tracking-widest">{post.category}</span>
                        <span className="text-white/40 text-xs">·</span>
                        <span className="text-white/60 text-xs">{post.date}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold group-hover:text-gold-bright transition leading-snug text-balance">
                        {post.title}
                    </h2>
                    <p className="text-white/65 text-sm md:text-base leading-relaxed">
                        {post.excerpt}
                    </p>
                    <span className="text-gold text-xs mt-2">Read more →</span>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={post.href}
            className="group rounded-2xl border border-white/5 border-l-[3px] border-l-gold bg-white/[0.03] overflow-hidden hover:border-white/10 hover:border-l-gold transition flex flex-col"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    loading={eager ? "eager" : "lazy"}
                    fetchPriority={eager ? "high" : "auto"}
                    decoding="async"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                    <span className="text-white/60 text-xs uppercase tracking-widest">{post.category}</span>
                    <span className="text-white/40 text-xs">·</span>
                    <span className="text-white/60 text-xs">{post.date}</span>
                </div>
                <h2 className="text-base md:text-lg font-semibold group-hover:text-gold-bright transition leading-snug">
                    {post.title}
                </h2>
                <p className="text-white/65 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                </p>
                <span className="text-gold text-xs mt-2">Read more →</span>
            </div>
        </Link>
    );
}
