"use client";

import { useRef, useState } from "react";
import { Play, Pause, Download } from "lucide-react";
import { portfolioSections, portfolioBands } from "@/data/portfolioTracks";

const LABELS = {
  en: {
    tracks: "tracks",
    bands: "Bands I've played with",
    download: "Download",
  },
  pl: {
    tracks: "utworów",
    bands: "Zespoły, z którymi grałem",
    download: "Pobierz",
  },
};

export default function PortfolioPlayer({ lang = "en" }) {
  const t = LABELS[lang] ?? LABELS.en;
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function toggle(track) {
    const audio = audioRef.current;
    if (!audio) return;
    if (current === track.slug) {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        audio.play();
        setPlaying(true);
      }
      return;
    }
    audio.src = track.file;
    audio.play();
    setCurrent(track.slug);
    setPlaying(true);
    setProgress(0);
  }

  function seek(track, e) {
    const audio = audioRef.current;
    if (!audio || current !== track.slug || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    audio.currentTime = ratio * audio.duration;
    setProgress(ratio * 100);
  }

  return (
    <div>
      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={(e) => {
          const a = e.currentTarget;
          if (a.duration) setProgress((a.currentTime / a.duration) * 100);
        }}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
        }}
      />

      {/* Genre anchor chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {portfolioSections.map((s) => (
          <a
            key={s.genre}
            href={`#pf-${s.genre}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70 transition hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
          >
            {lang === "pl" ? s.labelPl : s.labelEn}
            <span className="text-xs text-[#f5b942]">{s.tracks.length}</span>
          </a>
        ))}
      </div>

      {portfolioSections.map((s) => (
        <section
          key={s.genre}
          id={`pf-${s.genre}`}
          className="mb-12"
          style={{ scrollMarginTop: 90 }}
        >
          <h2
            className="mb-4 text-xl md:text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {lang === "pl" ? s.labelPl : s.labelEn}{" "}
            <span className="text-sm text-white/35">
              {s.tracks.length} {t.tracks}
            </span>
          </h2>
          <div className="space-y-1.5">
            {s.tracks.map((track) => (
              <div
                key={track.slug}
                className={`group flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
                  current === track.slug
                    ? "border-[#C9A84C]/40 bg-[#C9A84C]/[0.06]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-[#C9A84C]/25 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(track)}
                  aria-label={track.title}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #e8c97a)",
                    color: "#141414",
                  }}
                >
                  {current === track.slug && playing ? (
                    <Pause size={15} />
                  ) : (
                    <Play size={15} className="ml-0.5" />
                  )}
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm text-white/85">
                      {track.title}
                    </span>
                    {track.band ? (
                      <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/45 px-1 text-[9px] tracking-wider text-[#C9A84C]">
                        {track.band}
                      </span>
                    ) : null}
                    {track.cover ? (
                      <span className="shrink-0 rounded-full border border-white/20 px-2 py-0.5 text-[9px] uppercase tracking-wider text-white/45">
                        cover
                      </span>
                    ) : null}
                  </div>
                  {(lang === "pl" ? track.captionPl : track.captionEn) ? (
                    <div className="truncate text-xs text-white/40">
                      {lang === "pl" ? track.captionPl : track.captionEn}
                    </div>
                  ) : null}
                  <div
                    className="mt-1.5 h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/[0.07]"
                    onClick={(e) => seek(track, e)}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: current === track.slug ? `${progress}%` : 0,
                        background: "linear-gradient(90deg, #C9A84C, #e8c97a)",
                      }}
                    />
                  </div>
                </div>
                <span className="shrink-0 text-xs tabular-nums text-white/40">
                  {track.duration}
                </span>
                <a
                  href={track.file}
                  download
                  className="shrink-0 text-white/35 transition hover:text-[#C9A84C]"
                  aria-label={t.download}
                  title={t.download}
                >
                  <Download size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Bands */}
      <section className="mt-16">
        <h2
          className="mb-6 text-xl md:text-2xl font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {t.bands}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioBands.map((b) => (
            <div
              key={b.badge}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/45 text-[10px] tracking-wider text-[#C9A84C]">
                  {b.badge}
                </span>
                <div>
                  <div className="text-sm font-semibold text-white/85">
                    {b.name}
                  </div>
                  <div className="text-xs text-white/40">
                    {lang === "pl" ? b.cityPl : b.cityEn}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/55">
                {lang === "pl" ? b.textPl : b.textEn}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
