"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n";

export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(fr|en)/, "") || "";
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-full border border-charcoal/15 p-0.5 text-xs font-medium">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={`rounded-full px-3 py-1.5 uppercase tracking-wider transition-colors ${
            l === lang ? "bg-charcoal text-ivory" : "text-charcoal-soft hover:text-charcoal"
          }`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
