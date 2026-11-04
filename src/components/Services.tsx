import { CalendarClock, ClipboardCheck, Gift, Image as ImageIcon, LayoutDashboard, ListChecks, MailOpen, MessageSquareHeart, ScrollText, SlidersHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Dictionary } from "@/i18n";

const icons = [MailOpen, ClipboardCheck, ListChecks, CalendarClock, ImageIcon, ScrollText, MessageSquareHeart, Gift, SlidersHorizontal, LayoutDashboard];

export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" className="bg-ivory-deep/60 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} center />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={s.title}>
                <Reveal delay={(i % 5) * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-charcoal/10 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ivory-deep text-gold-dark">
                      <Icon size={20} aria-hidden />
                    </span>
                    <h3 className="font-serif text-xl leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-charcoal-soft">{t.note}</p>
      </div>
    </section>
  );
}
