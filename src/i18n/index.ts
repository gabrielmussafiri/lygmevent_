import fr from "./fr.json";
import en from "./en.json";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
export type Dictionary = typeof fr;

const dictionaries: Record<Locale, Dictionary> = { fr, en };

export const hasLocale = (l: string): l is Locale => (locales as readonly string[]).includes(l);
export const getDictionary = (l: Locale): Dictionary => dictionaries[l];
