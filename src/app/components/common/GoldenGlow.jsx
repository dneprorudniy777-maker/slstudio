"use client";

// Large blurred golden light blobs — same visual language as the pulsing
// radial-gradient glows used in Hero/Contact. No clipping box: the blobs are
// allowed to render as full soft circles instead of being cut off at a hard
// container edge. Fully static composition, only opacity/scale breathe
// slowly.
export default function GoldenGlow({ width = 300, height = 360 }) {
  return (
    <div
      className="relative mx-auto pointer-events-none select-none overflow-visible"
      style={{ width, height }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "8%",
          width: "92%",
          height: "92%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.19) 0%, transparent 70%)",
          animation: "glowPulseA 7s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          right: "6%",
          width: "78%",
          height: "78%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,201,122,0.16) 0%, transparent 70%)",
          animation: "glowPulseB 9s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "32%",
          left: "26%",
          width: "58%",
          height: "58%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%)",
          animation: "glowPulseA 11s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes glowPulseA { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.15); opacity: 0.55; } }
        @keyframes glowPulseB { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.2); opacity: 0.5; } }
      `}</style>
    </div>
  );
}
