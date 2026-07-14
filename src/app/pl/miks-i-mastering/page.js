import Hero from "../../components/pages/pl-miks-i-mastering/Hero";
import Section1 from "../../components/pages/pl-miks-i-mastering/Section1";
import Section2 from "../../components/pages/pl-miks-i-mastering/Section2";
import BeforeAfterMixingPl from "../../components/sections/BeforeAfterMixingPl";

export const metadata = {
    title: "Miks i mastering online — studio w Warszawie",
    alternates: {
        canonical: "https://www.slstudio.pro/pl/miks-i-mastering",
        languages: {
            "pl": "https://www.slstudio.pro/pl/miks-i-mastering",
            "en": "https://www.slstudio.pro/mixing-mastering",
            "x-default": "https://www.slstudio.pro/mixing-mastering",
        },
    },
    description:
        "Profesjonalny miks i mastering online. Wyślij ślady lub roboczy miks — odeślę dopracowany, gotowy do publikacji utwór. Studio w Warszawie, zdalnie w całej Polsce.",
    keywords: [
        "miks i mastering",
        "miks i mastering online",
        "ile kosztuje miks piosenki",
        "mastering utworu",
        "studio nagrań warszawa",
        "miks wokalu",
        "realizacja dźwięku",
    ],
    openGraph: {
        title: "Miks i mastering online — studio w Warszawie | SL Studio",
        description:
            "Wyślij ślady lub roboczy miks — odeślę dopracowany, gotowy do publikacji utwór. Studio w Warszawie, zdalnie w całej Polsce.",
        type: "website",
        url: "https://www.slstudio.pro/pl/miks-i-mastering",
        locale: "pl_PL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Miks i mastering online — studio w Warszawie | SL Studio",
        description:
            "Profesjonalny miks i mastering utworów. Studio w Warszawie, zdalnie w całej Polsce.",
    },
};

export default function MiksIMasteringPage() {
    return (
        <>
            <Hero />
            <BeforeAfterMixingPl />
            <Section2 />
            <Section1 />
        </>
    )
}
