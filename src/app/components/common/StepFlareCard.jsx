"use client";

import ScrollReveal from "./ScrollReveal";

export default function StepFlareCard({
  children,
  delay = 0,
  className = "",
  style,
  tilt = false,
}) {
  const keepPriceVisible = (event) => {
    const target = event.target;
    if (!target.classList?.contains("price-number")) return;

    target.style.animation = "none";
    target.style.color = "#DDB85B";
    target.style.textShadow = "0 0 6px rgba(201, 168, 76, 0.22)";
  };

  const replayStepFlare = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const numbers = event.currentTarget.querySelectorAll(".step-number");
    if (!numbers.length) return;

    numbers.forEach((number) => {
      number.style.animation = "none";
    });
    void event.currentTarget.offsetWidth;
    numbers.forEach((number) => {
      number.style.animation = "stepFlare 0.9s ease-out both";
    });
  };

  // Opt-in "premium 3D": the card gently tilts toward the cursor (a couple of
  // degrees, like a physical card) and a soft gold glare follows the mouse.
  // Mousemove only — touch devices get the regular card. Honours reduced motion.
  const tiltMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = event.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width;
    const py = (event.clientY - r.top) / r.height;
    el.style.transform = `perspective(700px) rotateX(${((0.5 - py) * 4).toFixed(
      2
    )}deg) rotateY(${((px - 0.5) * 4).toFixed(2)}deg)`;
    el.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
    // Glare scales with the card, so small cards get a smaller light and big
    // cards do not look like they are lit by a tiny torch.
    el.style.setProperty(
      "--glare-size",
      `${Math.max(160, Math.max(r.width, r.height) * 0.75).toFixed(0)}px`
    );
    el.style.setProperty("--glare-o", "1");
  };

  const tiltLeave = (event) => {
    const el = event.currentTarget;
    el.style.transform = "";
    el.style.setProperty("--glare-o", "0");
  };

  return (
    <ScrollReveal delay={delay}>
      <div
        className={tilt ? `relative ${className}` : className}
        style={
          tilt
            ? { ...style, transition: "transform 0.2s ease", willChange: "transform" }
            : style
        }
        onMouseEnter={replayStepFlare}
        onMouseMove={tilt ? tiltMove : undefined}
        onMouseLeave={tilt ? tiltLeave : undefined}
        onAnimationEnd={keepPriceVisible}
      >
        {children}
        {tilt && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              borderRadius: "inherit",
              background:
                "radial-gradient(var(--glare-size, 220px) circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(232,201,122,0.10), transparent 65%)",
              opacity: "var(--glare-o, 0)",
              transition: "opacity 0.3s ease",
            }}
          />
        )}
      </div>
    </ScrollReveal>
  );
}
