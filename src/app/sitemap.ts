import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${siteConfig.url}/${l}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${siteConfig.url}/${x}`])) },
  }));
}
