"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// html has scroll-behavior: smooth (globals.css) for in-page anchor jumps
// (#demos links, blog SectionIndicator dots). That same rule also makes
// Next's router scroll-to-top on page navigation animate instead of snap —
// if a layout shift happens mid-animation (images/fonts loading), it lands
// a bit short of 0. Forcing an explicit "instant" scroll on every route
// change bypasses the CSS behavior for this one call only.
//
// Deep links (/blog/post#faq) are the exception: scrolling to the top would
// discard the browser's own fragment jump and the anchor would never land, so
// we resolve the target ourselves instead. It can't be done synchronously —
// this effect runs before SectionIndicator's (it sits above {children} in the
// root layout), and that's where auto-generated heading ids and their
// scroll-margin-top are assigned. So the pin below is deferred, and repeated
// while lazy images above the target push it around.
//
// Timers, not requestAnimationFrame: a deep link is very often opened in a
// background tab, and rAF does not run while the tab is hidden — the jump
// would silently never happen.
//
// The effect stays keyed on pathname alone: an in-page anchor click only
// changes the hash, so it must not re-run and fight the native scroll.
export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;

        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
        }

        const id = decodeURIComponent(hash.slice(1));
        let done = false;
        let timer = 0;

        // A reader who starts scrolling always outranks a pending correction.
        const stop = () => { done = true; };
        const events = ["wheel", "touchstart", "mousedown", "keydown"];
        events.forEach((e) => window.addEventListener(e, stop, { passive: true }));

        // The sticky site header overlaps the top of the viewport. Headings get
        // scroll-margin-top from SectionIndicator and already clear it, but the
        // older articles hang the id on a plain wrapper div that has none, so
        // the target would land underneath the header. Measure it rather than
        // assuming a height; it is stuck to top:0, so this stays valid.
        const header = document.querySelector("nav.sticky, nav.fixed, header.sticky, header.fixed");
        const headerBottom = header ? header.getBoundingClientRect().bottom : 0;

        const deadline = Date.now() + 2000;
        const tick = () => {
            if (done) return;
            // Unknown id (nothing matches the fragment): leave the page where
            // it is rather than yanking it to the top.
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: "instant", block: "start" });
                const gap = target.getBoundingClientRect().top - headerBottom;
                if (gap < 0) window.scrollBy({ top: gap - 12, left: 0, behavior: "instant" });
            }
            if (Date.now() < deadline) timer = setTimeout(tick, 50);
        };
        timer = setTimeout(tick, 0);

        return () => {
            done = true;
            clearTimeout(timer);
            events.forEach((e) => window.removeEventListener(e, stop));
        };
    }, [pathname]);

    return null;
}
