export type Category = "wedding" | "babyshower" | "birthday";
type L = { fr: string; en: string };

export interface Project {
  id: string;
  category: Category;
  title: L;
  description: L;
  features: { fr: string[]; en: string[] };
  /** null = pas encore déployé -> affiche "Bientôt disponible" */
  demoUrl: string | null;
  /** Chemins dans /public/screenshots */
  /** null = pas encore de capture -> visuel provisoire */
  screenshot: string | null;
  screenshotMobile?: string;
}

// Pour ajouter un projet : ajoutez simplement un objet à ce tableau.
export const projects: Project[] = [
  {
    id: "wedding-04",
    category: "wedding",
    title: { fr: "Mariage traditionnel — Démo", en: "Traditional Wedding — Demo" },
    description: {
      fr: "Une invitation de mariage traditionnel avec notre histoire, programme, pagnes et livre d'or.",
      en: "A traditional wedding invitation with our story, program, dress code fabrics and guestbook.",
    },
    features: {
      fr: ["RSVP", "Notre histoire", "Programme", "Livre d'or"],
      en: ["RSVP", "Our Story", "Program", "Guestbook"],
    },
    demoUrl: "https://sarah-richesse.vercel.app/",
    screenshot: "/screenshots/wedding-04.jpg",
    screenshotMobile: "/screenshots/wedding-04-mobile.jpg",
  },
  {
    id: "wedding-01",
    category: "wedding",
    title: { fr: "Mariage — Démo 01", en: "Wedding — Demo 01" },
    description: {
      fr: "Un site de mariage élégant avec notre histoire, programme et RSVP.",
      en: "An elegant wedding website with our story, program and RSVP.",
    },
    features: {
      fr: ["RSVP", "Compte à rebours", "Notre histoire", "Galerie photos"],
      en: ["RSVP", "Countdown", "Our Story", "Photo gallery"],
    },
    demoUrl: "https://princy-wedding.vercel.app/",
    screenshot: "/screenshots/wedding-01.jpg",
    screenshotMobile: "/screenshots/wedding-01-mobile.jpg",
  },
  {
    id: "wedding-02",
    category: "wedding",
    title: { fr: "Mariage — Démo 02", en: "Wedding — Demo 02" },
    description: {
      fr: "Une expérience de mariage romantique, du programme aux messages des invités.",
      en: "A romantic wedding experience, from the program to guest messages.",
    },
    features: {
      fr: ["RSVP", "Programme", "Lieu & itinéraire", "Messages des invités"],
      en: ["RSVP", "Event program", "Venue & directions", "Guest messages"],
    },
    demoUrl: "https://israel-mariage.vercel.app/",
    screenshot: "/screenshots/wedding-02.jpg",
    screenshotMobile: "/screenshots/wedding-02-mobile.jpg",
  },
  {
    id: "wedding-03",
    category: "wedding",
    title: { fr: "Mariage — Démo 03", en: "Wedding — Demo 03" },
    description: {
      fr: "Un site de mariage moderne avec tableau de bord d'administration.",
      en: "A modern wedding website with an administration dashboard.",
    },
    features: {
      fr: ["RSVP", "Tableau de bord admin", "Galerie photos", "Compte à rebours"],
      en: ["RSVP", "Admin dashboard", "Photo gallery", "Countdown"],
    },
    demoUrl: "https://achille-deborah.vercel.app/",
    screenshot: "/screenshots/wedding-03.jpg",
    screenshotMobile: "/screenshots/wedding-03-mobile.jpg",
  },
  {
    id: "babyshower-01",
    category: "babyshower",
    title: { fr: "Baby Shower — Démo", en: "Baby Shower — Demo" },
    description: {
      fr: "Une célébration douce pour accueillir bébé, avec vœux et idées de prénoms.",
      en: "A gentle celebration to welcome baby, with wishes and name suggestions.",
    },
    features: {
      fr: ["RSVP", "Vœux pour bébé", "Idées de prénoms", "Liste de cadeaux"],
      en: ["RSVP", "Baby wishes", "Name suggestions", "Gift wishlist"],
    },
    demoUrl: "https://babyshower-mu-puce.vercel.app/",
    screenshot: "/screenshots/babyshower-01.jpg",
    screenshotMobile: "/screenshots/babyshower-01-mobile.jpg",
  },
  {
    id: "birthday-01",
    category: "birthday",
    title: { fr: "Anniversaire de Lisa — Démo", en: "Lisa's Birthday — Demo" },
    description: {
      fr: "Une invitation d'anniversaire stylée avec RSVP et vœux des invités.",
      en: "A stylish birthday invitation with RSVP and guest wishes.",
    },
    features: {
      fr: ["RSVP", "Gestion des invités", "Vœux d'anniversaire", "Galerie photos"],
      en: ["RSVP", "Guest management", "Birthday wishes", "Photo gallery"],
    },
    demoUrl: "https://lisa24.vercel.app/",
    screenshot: "/screenshots/birthday-01.jpg",
    screenshotMobile: "/screenshots/birthday-01-mobile.jpg",
  },
];
