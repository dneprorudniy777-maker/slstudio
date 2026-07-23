import LangSwitch from "../components/common/LangSwitch";
import PortfolioPlayer from "../components/pages/portfolio/PortfolioPlayer";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "Portfolio — My Music | SL Studio",
  description:
    "Jazz, blues, rock, metal, dark folk, pop and classics — songs I wrote, played in bands and restored from old recordings over thirty years.",
  alternates: {
    canonical: `${SITE}/portfolio`,
    languages: {
      en: `${SITE}/portfolio`,
      pl: `${SITE}/pl/portfolio`,
      "x-default": `${SITE}/portfolio`,
    },
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-10">
      <LangSwitch active="en" enHref="/portfolio" plHref="/pl/portfolio" />
      <h1
        className="mt-4 mb-4 text-3xl md:text-4xl font-semibold tracking-wide"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Portfolio — My Music
      </h1>
      <div className="mb-10 max-w-3xl space-y-4 leading-relaxed text-white/65">
        <p>
          Thirty years of playing in bands, restoring old recordings and
          writing my own music — jazz, blues, rock, metal, dark folk, pop and
          classics. Most of these songs survived only on worn-out tapes and
          old videos; I brought them back to life. Press play.
        </p>
      </div>
      <PortfolioPlayer lang="en" />
    </div>
  );
}
