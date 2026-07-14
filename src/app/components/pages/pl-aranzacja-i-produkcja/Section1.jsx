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
                        Historia
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
                        <p>Kiedyś dostałem wiadomość głosową. Dosłownie — ktoś zanucił melodię do telefonu gdzieś w kuchni, w tle było słychać kapiący kran. I dopisał: „mam pomysł, ale nie wiem, co z nim zrobić”.</p>
                        <p>Odsłuchałem pięć razy. Potem wziąłem gitarę.</p>
                        <p>Trzy dni później dostał gotowy utwór — z żywymi gitarami, basem, klimatycznymi klawiszami i perkusją. Ta sama melodia, którą nucił w kuchni, tylko że teraz brzmiała jak piosenka. Odpisał, że jej nie poznał — w jak najlepszym sensie.</p>
                        <p>Aranżacja jest dla mnie tłumaczeniem. Słyszysz coś w środku, a ja pomagam temu czemuś wyjść na zewnątrz jako prawdziwa muzyka. Nie narzucam swojego gustu — słucham, co chcesz powiedzieć, i szukam instrumentów, które powiedzą to najlepiej.</p>
                    </div>
                    <ProTip>Nie przejmuj się jakością tego, co wysyłasz. Notatka głosowa z kapiącym kranem w tle to całkowicie sensowny punkt wyjścia — liczy się wykonanie i pomysł. Reszta to moja robota.</ProTip>
                </GlowCard>

                <GlowCard>
                    <span className="text-white/30 text-xs uppercase tracking-[0.3em] relative z-10">
                        Co mogę zbudować
                    </span>
                    <div className="flex flex-col gap-6 text-white/70 text-[15px] leading-relaxed relative z-10">
                        <p>Pracuję we wszystkich gatunkach — blues-rock, funk, indie, pop, metal, jazz, elektronika. Moje własne muzyczne korzenie dają mi głębokie wyczucie żywych instrumentów i groove'u, ale z taką samą uwagą podchodzę do każdego stylu.</p>
                        <p>Wysyłasz to, co masz — szkic, riff, MIDI, nagranie głosowe. Rozmawiamy o tym, jak ma brzmieć efekt. Buduję aranżację, odsyłam demo, słyszysz kierunek i mówisz, co zmienić. To zawsze rozmowa, nigdy dostawa w jedną stronę.</p>
                        <p>Chcesz dołożyć jeden instrument albo zbudować pełne, orkiestrowe brzmienie — pracuję z Twoją wizją i wprowadzam ją w życie.</p>
                    </div>
                    <ProTip>Referencje są na wagę złota. Znajdź dwie–trzy piosenki, które mają klimat, instrumentarium albo energię, o którą Ci chodzi, i podeślij je. Trafimy do właściwego kierunku szybciej niż przy jakimkolwiek opisie.</ProTip>
                </GlowCard>
            </div>
        </section>
    );
}
