import LangSwitch from "../../components/common/LangSwitch";
import PortfolioPlayer from "../../components/pages/portfolio/PortfolioPlayer";

const SITE = "https://www.slstudio.pro";

export const metadata = {
  title: "Portfolio — Moja muzyka | SL Studio",
  description:
    "Jazz, blues, rock, metal, dark folk, pop i klasyka — piosenki, które napisałem, grałem w zespołach i odrestaurowałem ze starych nagrań.",
  alternates: {
    canonical: `${SITE}/pl/portfolio`,
    languages: {
      en: `${SITE}/portfolio`,
      pl: `${SITE}/pl/portfolio`,
      "x-default": `${SITE}/portfolio`,
    },
  },
};

export default function PortfolioPagePl() {
  return (
    <div className="py-10">
      <LangSwitch active="pl" enHref="/portfolio" plHref="/pl/portfolio" />
      <h1
        className="mt-4 mb-4 text-3xl md:text-4xl font-semibold tracking-wide"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Portfolio — Moja muzyka
      </h1>
      <div className="mb-10 max-w-3xl space-y-4 leading-relaxed text-white/65">
        <p>
          Trzydzieści lat grania w zespołach, odtwarzania starych nagrań i
          pisania własnej muzyki — jazz, blues, rock, metal, dark folk, pop i
          klasyka. Większość tych piosenek przetrwała tylko na zużytych
          taśmach i starych nagraniach wideo; przywróciłem je do życia.
        </p>
      </div>
      <PortfolioPlayer lang="pl" />
    </div>
  );
}
