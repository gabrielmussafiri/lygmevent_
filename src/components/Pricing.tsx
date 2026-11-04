"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { currencies, plans, type Currency } from "@/config/pricing";
import { whatsappLink } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n";

export function Pricing({ lang, t }: { lang: Locale; t: Dictionary["pricing"] }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} center />

        <div role="radiogroup" aria-label={t.currencyLabel} className="mx-auto mt-10 flex w-fit rounded-full border border-charcoal/15 p-1">
          {currencies.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={currency === c}
              onClick={() => setCurrency(c)}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                currency === c ? "bg-charcoal text-ivory" : "text-charcoal-soft hover:text-charcoal"
              }`}
            >
              {t.currency[c]}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const p = t.plans[plan.id];
            const base = "base" in p ? p.base : null;
            return (
              <li key={plan.id}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div
                    className={`flex h-full flex-col rounded-3xl border p-7 ${
                      plan.highlighted ? "border-gold bg-charcoal text-ivory shadow-xl" : "border-charcoal/10 bg-white/60"
                    }`}
                  >
                    <h3 className="font-serif text-3xl">{p.name}</h3>
                    <p className={`mt-2 min-h-10 text-sm ${plan.highlighted ? "text-ivory/70" : "text-charcoal-soft"}`}>{p.tagline}</p>
                    <div className="mt-7 border-y border-current/10 py-6">
                      <span className={`text-xs uppercase tracking-[0.2em] ${plan.highlighted ? "text-gold" : "text-gold-dark"}`}>{t.from}</span>
                      <p className="mt-1 font-serif text-4xl" aria-live="polite">
                        {plan.price[currency]}
                      </p>
                    </div>
                    {base && <p className="mt-6 text-sm font-medium">{base}</p>}
                    <ul className={`${base ? "mt-3" : "mt-6"} space-y-3 text-sm`}>
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={16} className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-gold" : "text-gold-dark"}`} aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-8">
                    <a
                      href={whatsappLink(lang, t.waMessage.replace("{plan}", p.name))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block rounded-full px-6 py-3.5 text-center text-sm tracking-wide transition-colors ${
                        plan.highlighted ? "bg-gold text-charcoal hover:bg-ivory" : "bg-charcoal text-ivory hover:bg-gold-dark"
                      }`}
                    >
                      {t.cta}
                    </a>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-charcoal-soft">{t.note}</p>
      </div>
    </section>
  );
}
