import { Baby, Cake, Check, Heart } from "lucide-react";
import { PhoneFrame } from "./DeviceMockup";
import { PlaceholderVisual } from "./PlaceholderVisual";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects, type Category } from "@/config/projects";
import type { Dictionary, Locale } from "@/i18n";

const icons = { wedding: Heart, babyshower: Baby, birthday: Cake } as const;
const order: Category[] = ["wedding", "babyshower", "birthday"];

function Visual({ category, lang, label }: { category: Category; lang: Locale; label: string }) {
  const items = projects.filter((p) => p.category === category);
  const shots = items.filter((p) => p.screenshotMobile || p.screenshot);
  const Icon = icons[category];
  if (shots.length === 0) {
    return (
      <div className="mx-auto w-48 overflow-hidden rounded-[2rem] border-[6px] border-charcoal/80 shadow-xl sm:w-56">
        <PlaceholderVisual icon={<Icon size={26} />} label={label} className="aspect-[9/19]" />
      </div>
    );
  }
  return (
    <div className="flex items-end justify-center gap-3 sm:gap-5">
      {shots.slice(0, 3).map((p, i) => (
        <div key={p.id} className={`${shots.length === 1 ? "w-44 sm:w-52" : "w-[30%] max-w-[170px]"} ${shots.length > 1 && i === 1 ? "-translate-y-4 sm:-translate-y-8" : ""}`}>
          <PhoneFrame src={p.screenshotMobile ?? p.screenshot!} alt={`${p.title[lang]}`} />
        </div>
      ))}
    </div>
  );
}

export function Experiences({ lang, t, portfolioLabel }: { lang: Locale; t: Dictionary["experiences"]; portfolioLabel: string }) {
  return (
    <section id="experiences" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} center />
        <div className="mt-20 space-y-24 md:space-y-32">
          {order.map((cat, i) => {
            const c = t.categories[cat];
            const Icon = icons[cat];
            const reversed = i % 2 === 1;
            return (
              <article key={cat} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 text-gold-dark">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-serif text-4xl sm:text-5xl">{c.name}</h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-charcoal-soft">{c.description}</p>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-charcoal">
                        <Check size={16} className="mt-0.5 shrink-0 text-gold-dark" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#portfolio" className="mt-9 inline-block border-b border-gold-dark pb-1 text-sm tracking-wide text-charcoal transition-colors hover:text-gold-dark">
                    {t.seeDemos} →
                  </a>
                </Reveal>
                <Reveal delay={0.15} className={`rounded-3xl bg-ivory-deep/70 px-4 py-12 sm:px-10 ${reversed ? "lg:order-1" : ""}`}>
                  <Visual category={cat} lang={lang} label={portfolioLabel} />
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
