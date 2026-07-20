"use client";

// Studio mixing-console fader — decorative, fills empty space next to FAQ.
// The cap glides slowly up and down the rail, like a fader riding automation.
// Pure inline SVG, no images/deps.
export default function MasterFader({ width = 90, height = 260 }) {
  return (
    <div
      className="relative mx-auto pointer-events-none select-none"
      style={{ width, height }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 72%)",
        }}
      />
      <svg
        viewBox="0 0 90 260"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <defs>
          <linearGradient id="faderRail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0b0b0b" />
            <stop offset="50%" stopColor="#1c1c1c" />
            <stop offset="100%" stopColor="#0b0b0b" />
          </linearGradient>
          <linearGradient id="faderCap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c97a" />
            <stop offset="100%" stopColor="#9c7a28" />
          </linearGradient>
        </defs>

        {/* Rail housing */}
        <rect
          x="33"
          y="14"
          width="24"
          height="232"
          rx="10"
          fill="url(#faderRail)"
          stroke="rgba(201,168,76,0.18)"
          strokeWidth="1"
        />
        {/* Center slot */}
        <rect
          x="43"
          y="22"
          width="4"
          height="216"
          rx="2"
          fill="rgba(0,0,0,0.55)"
        />

        {/* Tick marks */}
        {[30, 60, 90, 120, 150, 180, 210].map((y) => (
          <rect
            key={y}
            x="14"
            y={y}
            width="14"
            height="1.4"
            fill="rgba(255,255,255,0.15)"
          />
        ))}
        {[30, 60, 90, 120, 150, 180, 210].map((y) => (
          <rect
            key={"r" + y}
            x="62"
            y={y}
            width="14"
            height="1.4"
            fill="rgba(255,255,255,0.15)"
          />
        ))}

        {/* Fader cap — animated group */}
        <g style={{ animation: "faderMove 5.5s ease-in-out infinite" }}>
          <rect
            x="24"
            y="0"
            width="42"
            height="22"
            rx="5"
            fill="url(#faderCap)"
            stroke="rgba(27,27,27,0.4)"
            strokeWidth="1"
          />
          <rect
            x="30"
            y="9.5"
            width="30"
            height="3"
            rx="1.5"
            fill="rgba(27,27,27,0.5)"
          />
        </g>
      </svg>

      <style>{`
        @keyframes faderMove {
          0% { transform: translateY(150px); }
          50% { transform: translateY(48px); }
          100% { transform: translateY(150px); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden="true"] g { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
