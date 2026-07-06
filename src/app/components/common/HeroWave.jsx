// Shared, calm living waveform — used on every hero (home, Mixing & Mastering,
// Arrangement) so the "sound" motif is a recurring brand signature rather
// than a one-off homepage decoration.
export default function HeroWave() {
    return (
        <div className="hero-wave relative flex items-center gap-1 w-full" style={{ height: "36px" }} aria-hidden="true">
            {Array.from({ length: 56 }).map((_, i) => {
                const organic =
                    Math.abs(Math.sin(i * 0.35)) * 30 +
                    Math.abs(Math.sin(i * 1.3)) * 15 +
                    ((i * 5) % 8);
                return (
                    <span
                        key={i}
                        style={{
                            height: `${Math.round(24 + Math.min(organic, 55))}%`,
                            // negative phase shift => one smooth crest travels
                            // left-to-right, no per-bar jitter
                            animationDelay: `${(-i * 0.16).toFixed(3)}s`,
                        }}
                    />
                );
            })}
        </div>
    );
}
