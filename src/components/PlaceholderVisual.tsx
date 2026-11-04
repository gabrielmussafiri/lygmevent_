import type { ReactNode } from "react";

/** Visuel élégant provisoire pour les démos sans capture (pas de photo de stock). */
export function PlaceholderVisual({ icon, label, className = "" }: { icon: ReactNode; label?: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ivory-deep via-ivory to-gold/25 text-gold-dark ${className}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-ivory/70">{icon}</span>
      {label && <span className="text-xs font-medium uppercase tracking-[0.25em]">{label}</span>}
    </div>
  );
}
