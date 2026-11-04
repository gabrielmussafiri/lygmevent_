export type Currency = "USD" | "ZAR";
export const currencies: Currency[] = ["USD", "ZAR"];

export interface Plan {
  id: "starter" | "standard" | "premium" | "ultimate";
  /** Prix indicatifs par devise ("from" = "à partir de") */
  price: Record<Currency, string>;
  highlighted?: boolean; // mise en avant visuelle uniquement (aucune mention "populaire")
}

export const plans: Plan[] = [
  { id: "starter", price: { USD: "$75", ZAR: "R1 250" } },
  { id: "standard", price: { USD: "$150", ZAR: "R2 500" } },
  { id: "premium", price: { USD: "$200 – $250", ZAR: "R3 500 – R4 500" }, highlighted: true },
  { id: "ultimate", price: { USD: "$300+", ZAR: "R5 000+" } },
];
