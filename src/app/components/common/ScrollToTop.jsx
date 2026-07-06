"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// html has scroll-behavior: smooth (globals.css) for in-page anchor jumps
// (#demos links, blog SectionIndicator dots). That same rule also makes
// Next's router scroll-to-top on page navigation animate instead of snap —
// if a layout shift happens mid-animation (images/fonts loading), it lands
// a bit short of 0. Forcing an explicit "instant" scroll on every route
// change bypasses the CSS behavior for this one call only.
export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    return null;
}
