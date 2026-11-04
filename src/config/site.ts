export const siteConfig = {
  name: "LYGM Events",
  parent: "LYGM Group",
  // URL publique du site : définissez NEXT_PUBLIC_SITE_URL au déploiement (domaine final)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lygmevents.vercel.app",
  // Numéro WhatsApp au format international, sans "+" ni espaces
  whatsappNumber: "27601214105",
  // Affichage lisible du numéro
  whatsappDisplay: "+27 60 121 4105",
  whatsappMessage: {
    fr: "Bonjour LYGM Events ! Je souhaite créer une invitation digitale personnalisée pour mon événement. J'aimerais en savoir plus sur vos services.",
    en: "Hello LYGM Events! I'm interested in creating a personalized digital invitation for my event. I would love to know more about your services.",
  },
  // Laissez une chaîne vide pour masquer un réseau
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

export function whatsappLink(lang: "fr" | "en", message?: string) {
  const text = message ?? siteConfig.whatsappMessage[lang];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
