import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-dark">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-charcoal-soft">{intro}</p>}
    </Reveal>
  );
}
