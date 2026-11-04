import { Palette, MousePointerClick, ClipboardList, Smartphone, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Dictionary } from "@/i18n";

const icons = [Palette, MousePointerClick, ClipboardList, Smartphone, Sparkles];

export function WhyUs({ t }: { t: Dictionary["why"] }) {
  return (
    <section id="why" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title}>
                <Reveal delay={(i % 3) * 0.1}>
                  <div className="flex items-baseline gap-4 border-t border-charcoal/15 pt-6">
                    <span className="font-serif text-lg text-gold-dark">0{i + 1}</span>
                    <div>
                      <Icon size={24} className="mb-4 text-gold-dark" aria-hidden />
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-charcoal-soft">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
