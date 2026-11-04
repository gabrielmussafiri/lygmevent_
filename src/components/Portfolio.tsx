"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { projects, type Category } from "@/config/projects";
import type { Dictionary, Locale } from "@/i18n";

type Filter = "all" | Category;
const filters: Filter[] = ["all", "wedding", "babyshower", "birthday"];

export function Portfolio({ lang, t }: { lang: Locale; t: Dictionary["portfolio"] }) {
  const [active, setActive] = useState<Filter>("all");
  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="portfolio" className="bg-ivory-deep/60 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} center />

        <div role="group" aria-label={t.title} className="mt-12 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                active === f ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 hover:border-gold-dark hover:text-gold-dark"
              }`}
            >
              {t.filters[f]}
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={p} lang={lang} t={t} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
