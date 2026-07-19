"use client";

import ScrollReveal from "./ScrollReveal";

export default function StepFlareCard({
  children,
  delay = 0,
  className = "",
  style,
}) {
  const replayStepFlare = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const number = event.currentTarget.querySelector(".step-number");
    if (!number) return;

    number.style.animation = "none";
    void number.offsetWidth;
    number.style.animation = "stepFlare 0.9s ease-out both";
  };

  return (
    <ScrollReveal delay={delay}>
      <div className={className} style={style} onMouseEnter={replayStepFlare}>
        {children}
      </div>
    </ScrollReveal>
  );
}
