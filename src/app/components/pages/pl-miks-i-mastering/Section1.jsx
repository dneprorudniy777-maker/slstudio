"use client";
import { useState } from "react";

function ProTip({ children }) {
    return (
        <div className="rounded-xl p-5 flex gap-3 items-start mt-auto relative z-10"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <span className="text-base flex-shrink-0 font-bold" style={{ color: "#C9A84C" }}>★</span>
            <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#C9A84C" }}>Wskazówka</p>
                <p className="text-white/70 text-sm leading-relaxed">{children}</p>
            </div>
        </div>
    );
}

function GlowCard({ children }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="rounded-2xl p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden transition-all duration-300"
            style={{
                background: hovered ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.03)",
                border: hovered ? "1px solid rgba(201,168,76,0.35)" : "1px solid rgba(255,255,255,0.05)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "60%",
                background: "radial-gradient(ellipse at 0% 0%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            {children}
        </div>
    );
}

export default function Section1() {
    return (
        <section className="mt-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
                <GlowCard>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em] relative z-10">
                        Jak pracuję
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
                        <p>Kiedy dostaję utwór do miksu, pierwsze dziesięć minut po prostu słucham. Niczego nie dotykam. Słucham i wyłapuję, gdzie boli. Gdzie bas napiera za mocno i dusi w klatce. Gdzie wokal się zapada, chce wyjść do przodu, ale nie może. Gdzie gitara przebija się górą i nie daje reszcie oddychać.</p>
                        <p>To trochę jak wejść do pokoju, w którym wszyscy mówią naraz. Moja robota nie polega na tym, żeby kogoś uciszyć — tylko żeby każdego było słychać.</p>
                        <p>Miks zaczynam od dołu. Najpierw bas i perkusja — to fundament, a jeśli fundament się chwieje, cała reszta się posypie, choćby była najpiękniej ubrana.</p>
                        <p>Z niskimi częstotliwościami pracuję jak saper — ostrożnie, bez zbędnych ruchów. Jedno złe cięcie i utwór traci całą moc. Jedno podbicie za dużo i głośniki zaczynają grzechotać jak stara lodówka.</p>
                        <p>Kiedy dół siada na swoim miejscu, pozostałe instrumenty same zaczynają znajdować swoje pozycje. To nie magia — choć czasem wygląda dokładnie tak samo.</p>
                    </div>
                    <ProTip>Jeśli możesz, wyślij stemy — osobne ślady dla każdego instrumentu. Nawet zgrubny podział daje o wiele większą kontrolę niż gotowy miks stereo. Nie masz stemów? Wyślij, co masz — popracuję z tym.</ProTip>
                </GlowCard>

                <GlowCard>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em] relative z-10">
                        Gitary i wokal
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
                        <p>Gitary to moja osobista pasja, a jednocześnie najbardziej zdradliwy instrument w miksie. Sam jestem gitarzystą i słyszę, kiedy gitara została nagrana dobrze, a mimo to brzmi źle. Czasem zajmuje za dużo miejsca i rozpycha wszystko wokół jak ten jeden gość na imprezie, który zawsze mówi najgłośniej. Czasem odwrotnie — chowa się i milczy, kiedy powinna śpiewać. Znalezienie tej równowagi to czysta przyjemność.</p>
                        <p>Wokal to dla mnie osobny wszechświat. Głos jest najbardziej żywym instrumentem w każdym nagraniu i wyczuwa najmniejszy brak szacunku. Za dużo obróbki i robi się plastikowy. Za mało i skacze jak nieujeżdżony koń. Szukam punktu, w którym głos brzmi jak głos — żywo, prawdziwie, ale siedzi w miksie tak, jakby zawsze miał tam być.</p>
                        <p>Czasem w utworze brakuje warstwy, której nigdy nie nagrano. Wtedy sięgam po nowoczesne narzędzia AI — nie po to, by zastąpić żywe instrumenty, tylko by dołożyć ten jeden brakujący detal. Jak malarz, który odkłada pędzel i sięga po palce — po prostu dlatego, że tak jest precyzyjniej.</p>
                        <p>Mastering to ostatnie spojrzenie w lustro przed wyjściem na scenę. Sprawdzam utwór na trzech różnych systemach — monitorach studyjnych, zwykłych słuchawkach i głośniku telefonu. Jeśli tam brzmi dobrze, jest gotowe.</p>
                    </div>
                    <ProTip>Utwór referencyjny potrafi zdziałać cuda. Jeśli masz piosenkę, która brzmi tak, jak chcesz, żeby brzmiała Twoja — wyślij ją. W trzy sekundy mówi mi o Twojej wizji więcej niż akapit opisu.</ProTip>
                </GlowCard>
            </div>
        </section>
    );
}
