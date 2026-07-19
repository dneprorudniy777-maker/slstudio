"use client";

import Link from "next/link";
import { useState } from "react";

const shimmerCSS = `
@keyframes beamShimmer {
  0%   { transform: translateX(-160%) skewX(-18deg); opacity: 0; }
  2%   { opacity: 0.9; }
  16%  { opacity: 0.9; }
  18%  { transform: translateX(460%) skewX(-18deg); opacity: 0; }
  100% { transform: translateX(460%) skewX(-18deg); opacity: 0; }
}
.beam-group { position: relative; }
.beam-shimmer {
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 10px;
  z-index: 10;
}
.beam-shimmer::after {
  content: '';
  position: absolute;
  top: -10%;
  left: 0;
  width: 28%;
  height: 120%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,245,200,0.03) 30%, rgba(255,245,200,0.07) 50%, rgba(255,245,200,0.03) 70%, transparent 100%);
  animation: beamShimmer 16s cubic-bezier(0.45,0,0.55,1) infinite;
  animation-delay: 5s;
}
.beam-btn {
  transition: transform 0.12s ease, filter 0.2s ease, opacity 0.2s ease, color 0.2s ease;
}
.beam-btn:hover { filter: brightness(1.1); }
.beam-btn:active { transform: translateY(1px) scale(0.96); filter: brightness(1.18); }
.beam-glow:hover { color: #e8c97a !important; }
`;

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-[#1b1b1b]/80 backdrop-blur-xs border-b border-white/5">
            <style dangerouslySetInnerHTML={{ __html: shimmerCSS }} />
            <div className="container py-4 flex items-center justify-between">
                <Link href="/">
                    <img
                        src="/images/logo-animated.svg"
                        alt="SL Studio"
                        style={{ height: "24px"}}
                    />
                </Link>
                <ul className="flex items-center gap-6 text-white/70 text-[15px] font-medium tracking-wide max-[768px]:hidden">
                    <li><Link href="/" className="hover:text-gold2 transition">Home</Link></li>
                    <li><Link href="/mixing-mastering" className="hover:text-gold2 transition">Mixing & Mastering</Link></li>
                    <li className="beam-group flex items-center gap-0">
                        <div className="beam-shimmer" aria-hidden="true" />
                        <Link href="/arrangement" className="beam-btn px-4 py-2 rounded-l-lg font-medium whitespace-nowrap hover:text-gold2" style={{ border: "1px solid transparent", background: "linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 62%, rgba(201,168,76,0.015) 82%, rgba(201,168,76,0.04) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 60%, rgba(201,168,76,0.08) 100%) border-box" }}>Arrangement</Link>
                        <Link href="/blog" className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#e6dbbb", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.075) 50%, rgba(201,168,76,0.12) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.16) 100%) border-box" }}>Blog</Link>
                        <Link href="/about" className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#ecdcaa", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.185) 50%, rgba(201,168,76,0.26) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.24) 100%) border-box" }}>About</Link>
                        <Link href="/contact" className="beam-btn beam-glow px-4 py-2 font-medium whitespace-nowrap" style={{ color: "#f4e9c4", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.26) 0%, rgba(201,168,76,0.355) 50%, rgba(201,168,76,0.46) 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.24) 0%, rgba(201,168,76,0.34) 100%) border-box", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                        <Link href="/free-track-preview" className="beam-btn btn-gold px-4 py-2 rounded-r-lg font-semibold whitespace-nowrap" style={{ color: "#161616", border: "1px solid transparent", borderLeft: "none", background: "linear-gradient(90deg, rgba(201,168,76,0.46) 0%, rgba(201,168,76,0.75) 30%, rgba(201,168,76,1) 60%, #e8c97a 100%) padding-box, linear-gradient(90deg, rgba(201,168,76,0.34) 0%, rgba(232,201,122,0.65) 100%) border-box", boxShadow: "0 0 20px rgba(201,168,76,0.22)" }}>Free Preview</Link>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className="min-[769px]:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8" aria-label="Menu">
                    <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white/70 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>
            {open && (
                <div className="min-[769px]:hidden border-t border-white/5 bg-[#1b1b1b]">
                    <ul className="container py-4 flex flex-col gap-3 text-white/70 text-[15px] font-medium">
                        <li><Link href="/" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Home</Link></li>
                        <li><Link href="/mixing-mastering" onClick={() => setOpen(false)} className="hover:text-gold2 transition block py-1">Mixing & Mastering</Link></li>
                        <li className="flex flex-col items-stretch gap-0 pt-1">
                            <Link href="/arrangement" onClick={() => setOpen(false)} className="beam-btn px-4 py-2 rounded-t-lg font-medium hover:text-gold2" style={{ border: "1px solid transparent", background: "linear-gradient(180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 62%, rgba(201,168,76,0.04) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,0) 60%, rgba(201,168,76,0.08) 100%) border-box" }}>Arrangement</Link>
                            <Link href="/blog" onClick={() => setOpen(false)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#e6dbbb", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.075) 50%, rgba(201,168,76,0.12) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.16) 100%) border-box" }}>Blog</Link>
                            <Link href="/about" onClick={() => setOpen(false)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#ecdcaa", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.185) 50%, rgba(201,168,76,0.26) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.24) 100%) border-box" }}>About</Link>
                            <Link href="/contact" onClick={() => setOpen(false)} className="beam-btn beam-glow px-4 py-2 font-medium" style={{ color: "#f4e9c4", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.26) 0%, rgba(201,168,76,0.355) 50%, rgba(201,168,76,0.46) 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.24) 0%, rgba(201,168,76,0.34) 100%) border-box", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}>Contact</Link>
                            <Link href="/free-track-preview" onClick={() => setOpen(false)} className="beam-btn btn-gold px-4 py-2.5 rounded-b-lg font-semibold" style={{ color: "#161616", border: "1px solid transparent", borderTop: "none", background: "linear-gradient(180deg, rgba(201,168,76,0.46) 0%, rgba(201,168,76,0.75) 30%, rgba(201,168,76,1) 60%, #e8c97a 100%) padding-box, linear-gradient(180deg, rgba(201,168,76,0.34) 0%, rgba(232,201,122,0.65) 100%) border-box", boxShadow: "0 0 20px rgba(201,168,76,0.22)" }}>Free Preview</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
