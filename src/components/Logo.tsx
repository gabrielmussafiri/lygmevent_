export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif text-2xl tracking-[0.18em] ${light ? "text-ivory" : "text-charcoal"}`}>
        LYGM <span className={light ? "text-gold" : "text-gold-dark"}>EVENTS</span>
      </span>
    </span>
  );
}
