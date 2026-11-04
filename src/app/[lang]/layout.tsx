import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "@/i18n";
import { siteConfig } from "@/config/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(siteConfig.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: `/${lang}`, languages: { fr: "/fr", en: "/en", "x-default": "/fr" } },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      siteName: siteConfig.name,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      url: `/${lang}`,
      images: [{ url: `/og-${lang}.jpg`, width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: [`/og-${lang}.jpg`] },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const social = Object.values(siteConfig.social).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: t.meta.description,
    url: `${siteConfig.url}/${lang}`,
    image: `${siteConfig.url}/og-${lang}.jpg`,
    telephone: `+${siteConfig.whatsappNumber}`,
    parentOrganization: { "@type": "Organization", name: siteConfig.parent },
    inLanguage: ["fr", "en"],
    ...(social.length ? { sameAs: social } : {}),
  };
  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-charcoal px-5 py-3 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.nav.skip}
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
