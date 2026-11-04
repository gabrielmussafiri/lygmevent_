import { ArrowDown } from "lucide-react";
import { DesktopFrame, PhoneFrame } from "./DeviceMockup";
import { whatsappLink } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n";

// Serveur uniquement + animations CSS : le texte est visible dès le premier rendu (meilleur LCP).
export function Hero({ lang, t }: { lang: Locale; t: Dictionary["hero"] }) {
  const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-gold/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="fade-up mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gold-dark" style={d(0)}>
            {t.eyebrow}
          </p>
          <h1 className="fade-up font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl" style={d(0.05)}>
            {t.title}
          </h1>
          <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-charcoal-soft" style={d(0.15)}>
            {t.text}
          </p>
          <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={d(0.25)}>
            <a href="#portfolio" className="rounded-full bg-charcoal px-8 py-4 text-center text-sm tracking-wide text-ivory transition-colors hover:bg-gold-dark">
              {t.primary}
            </a>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal/25 px-8 py-4 text-center text-sm tracking-wide transition-colors hover:border-gold-dark hover:text-gold-dark"
            >
              {t.secondary}
            </a>
          </div>
          <p className="fade-up mt-10 font-serif text-xl italic text-charcoal-soft" style={d(0.4)}>
            {t.support}
          </p>
        </div>

        <div className="fade-up relative mx-auto w-full max-w-xl pb-10 pr-8 sm:pr-14" style={d(0.15)}>
          <DesktopFrame src="/screenshots/wedding-01.jpg" alt="LYGM Events — wedding website demo" priority />
          <div className="float-y absolute -bottom-2 right-0 w-[28%] min-w-[96px]">
            <PhoneFrame src="/screenshots/wedding-02-mobile.jpg" alt="LYGM Events — mobile invitation demo" priority />
          </div>
        </div>
      </div>
      <a href="#experiences" aria-label={t.scroll} className="mx-auto mt-14 hidden w-fit flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-charcoal-soft md:flex">
        {t.scroll}
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
