"use client";

import ScrollReveal from "./ScrollReveal";

// "Spotlight" card: the border lights up gold right where the cursor is and a
// soft gold spot follows it inside the card. Wrapped in ScrollReveal so cards
// enter one by one (pass a staggered delay). Mousemove only — on touch
// devices this renders as a regular static card.
export default function SpotlightCard({ children, delay = 0, className = "" }) {
  const move = (event) => {
    const el = event.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - r.top}px`);
    el.style.setProperty("--spot-o", "1");
  };

  const leave = (event) => {
    event.currentTarget.style.setProperty("--spot-o", "0");
  };

  return (
    <ScrollReveal delay={delay}>
      <div
        className={`relative overflow-hidden ${className}`}
        onMouseMove={move}
        onMouseLeave={leave}
      >
        {/* soft gold spot inside the card */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: "inherit",
            background:
              "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(201,168,76,0.10), transparent 65%)",
            opacity: "var(--spot-o, 0)",
            transition: "opacity 0.3s ease",
          }}
        />
        {/* gold border highlight that follows the cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: "inherit",
            background:
              "radial-gradient(180px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(232,201,122,0.75), transparent 70%)",
            padding: "1px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: "var(--spot-o, 0)",
            transition: "opacity 0.3s ease",
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </ScrollReveal>
  );
}
