"use client";

// Large translucent guitar pick — watermark-style static decor, fills empty
// space next to FAQ. Only the background glow breathes gently; the pick
// itself does not move.
export default function GuitarPick({ size = 260 }) {
  return (
    <div
      className="relative mx-auto flex items-center justify-center pointer-events-none select-none"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 45%, transparent 72%)",
          animation: "pickGlow 7s ease-in-out infinite",
        }}
      />
      <svg
        viewBox="0 0 200 200"
        style={{
          width: "52%",
          height: "52%",
          transform: "rotate(-12deg)",
        }}
      >
        <defs>
          <linearGradient id="pickFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c97a" />
            <stop offset="100%" stopColor="#9c7a28" />
          </linearGradient>
        </defs>
        <path
          d="M100,16 C145,16 182,54 182,97 C182,135 145,168 100,188 C55,168 18,135 18,97 C18,54 55,16 100,16 Z"
          fill="url(#pickFill)"
          opacity="0.22"
          stroke="rgba(201,168,76,0.3)"
          strokeWidth="2"
        />
      </svg>
      <style>{`
        @keyframes pickGlow { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.08); opacity: 0.55; } }
      `}</style>
    </div>
  );
}
