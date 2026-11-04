"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { whatsappLink } from "@/config/site";
import type { Dictionary, Locale } from "@/i18n";

export function Navbar({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { href: "#experiences", label: t.experiences },
    { href: "#portfolio", label: t.portfolio },
    { href: "#pricing", label: t.pricing },
    { href: "#how", label: t.how },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-ivory/90 shadow-[0_1px_0_rgba(43,43,43,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8" aria-label="Main">
        <a href="#top" aria-label="LYGM Events" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm tracking-wide text-charcoal-soft transition-colors hover:text-charcoal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} label={t.language} />
          <a
            href={whatsappLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-charcoal px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-gold-dark md:inline-block"
          >
            {t.cta}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? t.close : t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto bg-ivory px-6 pb-10 pt-8 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-charcoal/10 py-4 font-serif text-3xl"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-charcoal py-4 text-center text-ivory"
            >
              {t.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
