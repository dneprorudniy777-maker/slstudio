"use client";
import { Mic } from "lucide-react";

// Large muted microphone silhouette on a soft golden glow — static decor,
// fills empty space next to FAQ. Only the background glow breathes gently;
// the mic itself does not move.
export default function MicSilhouette({ size = 260 }) {
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
            "radial-gradient(circle, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.05) 45%, transparent 72%)",
          animation: "micGlow 7s ease-in-out infinite",
        }}
      />
      <Mic
        style={{
          width: "46%",
          height: "46%",
          color: "#C9A84C",
          opacity: 0.22,
          strokeWidth: 1.2,
        }}
      />
      <style>{`
        @keyframes micGlow { 0%, 100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.08); opacity: 0.55; } }
      `}</style>
    </div>
  );
}
