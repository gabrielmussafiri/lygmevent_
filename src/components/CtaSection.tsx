import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { whatsappLink } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n";

export function CtaSection({ lang, t }: { lang: Locale; t: Dictionary["cta"] }) {
  return (
    <section id="cta" className="px-5 py-10 md:px-8 md:py-16">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-charcoal px-6 py-20 text-center text-ivory md:px-16 md:py-28">
          <div aria-hidden className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">{t.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">{t.text}</p>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-9 py-4 text-sm font-medium tracking-wide text-charcoal transition-colors hover:bg-ivory"
            >
              <MessageCircle size={18} aria-hidden />
              {t.button}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
