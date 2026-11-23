export interface Plan {
  id: "starter" | "standard" | "premium" | "ultimate";
  highlighted?: boolean; // mise en avant visuelle uniquement (aucune mention "populaire")
}

// Aucun prix affiché : chaque projet est chiffré par discussion sur WhatsApp.
export const plans: Plan[] = [
  { id: "starter" },
  { id: "standard" },
  { id: "premium", highlighted: true },
  { id: "ultimate" },
];
