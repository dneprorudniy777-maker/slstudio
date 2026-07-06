"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .slice(0, 60);
}

// Self-contained: scans the article for <h2> headings and builds its own
// dot-indicator from them. No per-article setup — works on any article
// that renders a ".blog-prose" body with two or more sections. Mounted
// once in src/app/blog/layout.js, which persists across navigations
// between blog pages (Next.js doesn't remount a shared layout on route
// change within the same segment) — so the scan must re-run on every
// pathname change, not just once on first mount, or dots from the
// previous article stick around until a hard reload.
export default function SectionIndicator() {
    const pathname = usePathname();
    const [sections, setSections] = useState([]);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        setSections([]);
        setActiveId(null);

        const root = document.querySelector(".blog-prose");
        if (!root) return;
        const headings = [...root.querySelectorAll("h2")];
        if (headings.length < 2) return;

        const used = new Set();
        const list = headings.map((h, i) => {
            let id = h.id;
            // Some articles already wrap sections in a manually-id'd div
            // (e.g. <div id="before-we-start"><h2>...</h2></div>) — a slug
            // generated from the same heading text can collide with that
            // wrapper's id. Check the whole document, not just sibling
            // h2s, so we never produce a second element with that id.
            if (!id || document.querySelectorAll(`#${CSS.escape(id)}`).length > 1) {
                const base = slugify(h.textContent) || `section-${i}`;
                let candidate = `${base}-heading`;
                let n = 1;
                while (used.has(candidate) || document.getElementById(candidate)) {
                    candidate = `${base}-heading-${n++}`;
                }
                id = candidate;
                h.id = id;
            }
            used.add(id);
            h.style.scrollMarginTop = "80px";
            return { id, label: h.textContent };
        });
        setSections(list);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        );
        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, [pathname]);

    if (sections.length < 2) return null;

    return (
        <nav
            className="section-indicator hidden [@media(min-width:1400px)]:flex flex-col gap-3"
            style={{
                position: "fixed",
                right: "2.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 30,
            }}
            aria-label="Article sections"
        >
            <style>{`
                .section-dot:hover .section-dot-label {
                    opacity: 1 !important;
                    transform: translateX(0) !important;
                }
                .section-dot:hover .section-dot-marker {
                    background: rgba(201,168,76,0.55) !important;
                }
            `}</style>
            {sections.map((s) => {
                const active = activeId === s.id;
                return (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="section-dot group flex items-center justify-end"
                        aria-current={active ? "true" : undefined}
                    >
                        <span
                            className="section-dot-label"
                            style={{
                                marginRight: "12px",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.65)",
                                whiteSpace: "nowrap",
                                opacity: 0,
                                transform: "translateX(4px)",
                                transition: "opacity 0.2s ease, transform 0.2s ease",
                                maxWidth: "220px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {s.label}
                        </span>
                        <span
                            className="section-dot-marker"
                            style={{
                                flexShrink: 0,
                                width: active ? "8px" : "6px",
                                height: active ? "8px" : "6px",
                                borderRadius: "50%",
                                background: active ? "#C9A84C" : "rgba(255,255,255,0.2)",
                                boxShadow: active ? "0 0 8px rgba(201,168,76,0.6)" : "none",
                                transition: "all 0.25s ease",
                            }}
                        />
                    </a>
                );
            })}
        </nav>
    );
}
