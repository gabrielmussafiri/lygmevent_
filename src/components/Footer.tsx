import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { siteConfig, whatsappLink } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n";

// Lucide n'inclut plus les logos de marques : icônes SVG simples intégrées.
const svg = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const socials = [
  {
    key: "instagram",
    label: "Instagram",
    icon: svg(<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></>),
  },
  { key: "facebook", label: "Facebook", icon: svg(<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />) },
  { key: "tiktok", label: "TikTok", icon: svg(<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.6 2 4.4 5 4.6" />) },
] as const;

export function Footer({ lang, t, nav, brand }: { lang: Locale; t: Dictionary["footer"]; nav: Dictionary["nav"]; brand: Dictionary["brand"] }) {
  const links = [
    { href: "#experiences", label: nav.experiences },
    { href: "#portfolio", label: nav.portfolio },
    { href: "#pricing", label: nav.pricing },
    { href: "#how", label: nav.how },
    { href: "#contact", label: nav.contact },
  ];
  const activeSocials = socials.filter((s) => siteConfig.social[s.key]);

  return (
    <footer className="bg-charcoal pb-10 pt-16 text-ivory">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold">{brand.by}</p>
            <p className="mt-5 max-w-xs font-serif text-xl italic text-ivory/80">{brand.tagline}</p>
          </div>

          <nav aria-label={t.nav}>
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold">{t.nav}</h2>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/75 transition-colors hover:text-gold">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-gold">{t.contact}</h2>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 text-ivory/75 transition-colors hover:text-gold"
            >
              <MessageCircle size={18} aria-hidden />
              {t.whatsapp} · {siteConfig.whatsappDisplay}
            </a>
            {activeSocials.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xs uppercase tracking-[0.25em] text-gold">{t.follow}</h2>
                <ul className="mt-4 flex gap-3">
                  {activeSocials.map(({ key, label, icon }) => (
                    <li key={key}>
                      <a
                        href={siteConfig.social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:border-gold hover:text-gold"
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <p className="mt-14 border-t border-ivory/15 pt-6 text-sm text-ivory/55">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.parent}. {t.rights}
        </p>
      </div>
    </footer>
  );
}
