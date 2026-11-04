import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Dictionary } from "@/i18n";

export function HowItWorks({ t }: { t: Dictionary["how"] }) {
  return (
    <section id="how" className="bg-charcoal py-20 text-ivory md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="[&_p:first-child]:text-gold [&_p]:text-ivory/70">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} center />
        </div>
        <ol className="relative mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gold/30 lg:block" />
          {t.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 0.12}>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-charcoal font-serif text-2xl text-gold">
                  {i + 1}
                </span>
                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">
                  {t.step} {i + 1}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/70">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
