"use client";

// Slowly spinning vinyl record — decorative, fills empty space next to FAQ.
// Pure inline SVG, no images/deps. Muted gold on dark, matches the site's
// EQ-bar / "breathing glow" visual language used elsewhere on the site.
export default function VinylRecord({ size = 260 }) {
  return (
    <div
      className="relative mx-auto pointer-events-none select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)",
          animation: "vinylGlow 6s ease-in-out infinite",
        }}
      />
      <svg
        viewBox="0 0 200 200"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          animation: "vinylSpin 16s linear infinite",
          filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
        }}
      >
        <defs>
          <radialGradient id="vinylDisc" cx="50%" cy="50%" r="72%">
            <stop offset="0%" stopColor="#2b2b2b" />
            <stop offset="68%" stopColor="#161616" />
            <stop offset="100%" stopColor="#0b0b0b" />
          </radialGradient>
          <radialGradient id="vinylLabel" cx="50%" cy="50%" r="62%">
            <stop offset="0%" stopColor="#e8c97a" />
            <stop offset="100%" stopColor="#9c7a28" />
          </radialGradient>
        </defs>

        <circle
          cx="100"
          cy="100"
          r="98"
          fill="url(#vinylDisc)"
          stroke="rgba(201,168,76,0.22)"
          strokeWidth="1"
        />

        {[90, 81, 72, 63, 55, 47, 40, 34].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.6"
          />
        ))}

        <path
          d="M26,52 A98,98 0 0 1 150,22"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <circle cx="100" cy="100" r="31" fill="url(#vinylLabel)" />
        <circle
          cx="100"
          cy="100"
          r="31"
          fill="none"
          stroke="rgba(27,27,27,0.35)"
          strokeWidth="1"
        />
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fontSize="15"
          fontWeight="700"
          fill="#1b1b1b"
          fontFamily="Georgia, serif"
          letterSpacing="1"
        >
          SL
        </text>
        <circle cx="100" cy="100" r="3.4" fill="#1b1b1b" />
      </svg>

      <style>{`
        @keyframes vinylSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes vinylGlow { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.55; } }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden="true"] svg { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
