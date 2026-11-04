import Image from "next/image";
import { ArrowUpRight, Baby, Cake, Check, Clock, Heart } from "lucide-react";
import { PlaceholderVisual } from "./PlaceholderVisual";
import type { Project } from "@/config/projects";
import type { Dictionary, Locale } from "@/i18n";

const icons = { wedding: Heart, babyshower: Baby, birthday: Cake } as const;

export function ProjectCard({ project, lang, t }: { project: Project; lang: Locale; t: Dictionary["portfolio"] }) {
  const Icon = icons[project.category];
  const title = project.title[lang];
  const live = project.demoUrl !== null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white/60 transition-shadow duration-500 hover:shadow-[0_30px_60px_-25px_rgba(43,43,43,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-ivory-deep">
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`${t.screenshotAlt} ${title}`}
            fill
            sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <PlaceholderVisual icon={<Icon size={26} />} label={t.comingSoon} className="h-full w-full" />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-gold-dark backdrop-blur">
          {t.categoryLabel[project.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-serif text-2xl leading-snug">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{project.description[lang]}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.features[lang].map((f) => (
            <li key={f} className="flex items-center gap-1.5 rounded-full bg-ivory-deep px-3 py-1 text-xs text-charcoal">
              <Check size={12} className="text-gold-dark" aria-hidden />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          {live ? (
            <a
              href={project.demoUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm tracking-wide text-ivory transition-colors hover:bg-gold-dark"
            >
              {t.viewDemo}
              <ArrowUpRight size={16} aria-hidden />
              <span className="sr-only">{t.opensNew}</span>
            </a>
          ) : (
            <div
              aria-disabled="true"
              className="flex items-center justify-center gap-2 rounded-full border border-dashed border-gold-dark/50 px-6 py-3.5 text-sm tracking-wide text-gold-dark"
            >
              <Clock size={16} aria-hidden />
              {t.comingSoon}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
