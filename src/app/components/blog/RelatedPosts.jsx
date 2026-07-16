import Link from "next/link";
import { posts } from "@/data/posts";

// `slugs` is optional: pass an ordered list to curate the block by hand when
// the category heuristic below picks the wrong neighbours (e.g. an article
// whose most relevant companions sit in other categories). Without it the
// original same-category-first behaviour is unchanged.
export default function RelatedPosts({ slug, slugs }) {
    const current = posts.find((p) => p.href === `/blog/${slug}`);
    if (!current) return null;

    let related;
    if (slugs?.length) {
        related = slugs
            .map((s) => posts.find((p) => p.href === `/blog/${s}`))
            .filter((p) => p && p.href !== current.href)
            .slice(0, 3);
    } else {
        // Language outranks category: an English article must not offer Russian
        // reading (only the two RU Suno guides carry `lang`, English posts have
        // no field). The other language is a fallback, not a filter — with 20
        // English posts an English page never reaches it, while the two Russian
        // guides still fill three cards instead of dropping to one.
        const langOf = (p) => p.lang ?? "en";
        const currentLang = langOf(current);
        const byCategoryFirst = (list) => [
            ...list.filter((p) => p.category === current.category),
            ...list.filter((p) => p.category !== current.category),
        ];
        const candidates = posts.filter((p) => p.href !== current.href);
        related = [
            ...byCategoryFirst(candidates.filter((p) => langOf(p) === currentLang)),
            ...byCategoryFirst(candidates.filter((p) => langOf(p) !== currentLang)),
        ].slice(0, 3);
    }
    if (related.length === 0) return null;

    return (
        <div className="flex flex-col gap-4 pt-2 border-t border-white/5">
            <h3 className="text-lg font-semibold text-white mt-4">Keep Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {related.map((post) => (
                    <Link
                        key={post.href}
                        href={post.href}
                        className="group rounded-xl p-4 flex flex-col gap-2 transition hover:border-gold2/40"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderLeft: "3px solid rgba(201,168,76,0.4)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(201,168,76,0.7)" }}>
                                {post.category}
                            </span>
                        </div>
                        <p className="text-white/80 text-sm font-medium leading-snug group-hover:text-white transition">
                            {post.title}
                        </p>
                        <span className="text-xs mt-auto" style={{ color: "#C9A84C" }}>
                            Read more →
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
