"use client";

import ScrollReveal from "./ScrollReveal";

export default function StepFlareCard({
  children,
  delay = 0,
  className = "",
  style,
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

  return (
    <ScrollReveal delay={delay}>
      <div
        className={className}
        style={style}
        onMouseEnter={replayStepFlare}
        onAnimationEnd={keepPriceVisible}
      >
        {children}
      </div>
    </ScrollReveal>
  );
}
