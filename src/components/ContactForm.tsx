"use client";
import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig, whatsappLink } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n";

type EventType = "wedding" | "babyshower" | "birthday" | "other";
type Pref = "whatsapp" | "call";
const eventTypes: EventType[] = ["wedding", "babyshower", "birthday", "other"];
const prefs: Pref[] = ["whatsapp", "call"];

const field =
  "w-full rounded-xl border border-charcoal/20 bg-white/70 px-4 py-3.5 text-base outline-none transition-colors placeholder:text-charcoal-soft/60 focus:border-gold-dark focus:ring-2 focus:ring-gold/30";

export function ContactForm({ lang, t }: { lang: Locale; t: Dictionary["contact"] }) {
  const [name, setName] = useState("");
  const [type, setType] = useState<EventType>("wedding");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [pref, setPref] = useState<Pref>("whatsapp");
  const [errors, setErrors] = useState<{ name?: boolean; message?: boolean }>({});

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = { name: !name.trim(), message: !message.trim() };
    setErrors(next);
    if (next.name || next.message) return;

    const w = t.wa;
    const lines = [
      `${w.greeting} ${w.intro}`,
      "",
      `${w.name}: ${name.trim()}`,
      `${w.type}: ${t.eventTypes[type]}`,
      ...(date ? [`${w.date}: ${new Date(date + "T00:00:00").toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}`] : []),
      `${w.message}: ${message.trim()}`,
      `${w.pref}: ${t.preferences[pref]}`,
    ];
    window.open(whatsappLink(lang, lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
          <Reveal delay={0.15}>
            <p className="mt-10 text-sm uppercase tracking-[0.2em] text-charcoal-soft">{t.direct}</p>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-3 font-serif text-3xl transition-colors hover:text-gold-dark"
            >
              <MessageCircle size={26} className="text-gold-dark" aria-hidden />
              {siteConfig.whatsappDisplay}
            </a>
            <p className="mt-6 text-sm text-charcoal-soft">{t.hint}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="space-y-6 rounded-3xl border border-charcoal/10 bg-white/50 p-6 sm:p-10">
            <div>
              <label htmlFor="c-name" className="mb-2 block text-sm font-medium">{t.name}</label>
              <input
                id="c-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                autoComplete="name"
                aria-invalid={errors.name || undefined}
                aria-describedby={errors.name ? "c-name-err" : undefined}
                className={field}
              />
              {errors.name && <p id="c-name-err" role="alert" className="mt-1.5 text-sm text-red-700">{t.required}</p>}
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-medium">{t.eventType}</legend>
              <div className="grid grid-cols-2 gap-3">
                {eventTypes.map((et) => (
                  <label
                    key={et}
                    className={`cursor-pointer rounded-xl border px-4 py-3 text-center text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-dark ${
                      type === et ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 hover:border-gold-dark"
                    }`}
                  >
                    <input type="radio" name="eventType" value={et} checked={type === et} onChange={() => setType(et)} className="sr-only" />
                    {t.eventTypes[et]}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="c-date" className="mb-2 block text-sm font-medium">
                {t.date} <span className="font-normal text-charcoal-soft">{t.optional}</span>
              </label>
              <input id="c-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
            </div>

            <div>
              <label htmlFor="c-msg" className="mb-2 block text-sm font-medium">{t.message}</label>
              <textarea
                id="c-msg"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messagePlaceholder}
                aria-invalid={errors.message || undefined}
                aria-describedby={errors.message ? "c-msg-err" : undefined}
                className={field}
              />
              {errors.message && <p id="c-msg-err" role="alert" className="mt-1.5 text-sm text-red-700">{t.required}</p>}
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-medium">{t.preference}</legend>
              <div className="flex flex-col gap-3 sm:flex-row">
                {prefs.map((p) => (
                  <label
                    key={p}
                    className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold-dark ${
                      pref === p ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 hover:border-gold-dark"
                    }`}
                  >
                    <input type="radio" name="pref" value={p} checked={pref === p} onChange={() => setPref(p)} className="sr-only" />
                    {t.preferences[p]}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#1fa855] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#178a45]"
            >
              <MessageCircle size={20} aria-hidden />
              {t.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
