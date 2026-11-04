# LYGM Events — catalogue digital

Site vitrine commercial et bilingue (FR/EN) de **LYGM Events**, marque de LYGM Group : il présente des invitations digitales (mariages, baby showers, anniversaires) et convertit les visiteurs via WhatsApp.
Ce n'est **pas** la plateforme de gestion d'événements. Voir @AGENTS.md : ce Next.js (16) a des changements majeurs, lire `node_modules/next/dist/docs/` avant de coder.

## Production
- URL : https://events.lygmgroup.co.za (projet Vercel `lygmevent`, équipe `gabrielmussafiris-projects`, DNS géré par Vercel).
- Le site de groupe `www.lygmgroup.co.za` est un **autre projet** (`lygmgroup`) : ne pas y toucher.
- Dépôt : `gabrielmussafiri/lygmevent_`, branche `main`. Un `git push` sur `main` redéploie automatiquement.
- Variable d'environnement : `NEXT_PUBLIC_SITE_URL` (production), utilisée pour Open Graph, sitemap et canonical.
- CLI Vercel : toujours passer `--scope gabrielmussafiris-projects` (mode non interactif).

## Commandes
```bash
npm run dev      # http://localhost:3000
npm run build    # vérifie aussi les types
npm run lint
```

## Architecture
- `src/app/[lang]/` : routes `/fr` et `/en` (page unique à ancres). `src/proxy.ts` redirige `/` selon `Accept-Language` (défaut : fr). Les `params` sont asynchrones.
- `src/i18n/fr.json` + `en.json` : **tous** les textes. Toute nouvelle chaîne doit exister dans les deux fichiers. Pas de texte en dur dans les composants.
- `src/config/site.ts` : numéro WhatsApp (`27601214105`), messages, réseaux sociaux (chaîne vide = masqué), URL du site.
- `src/config/projects.ts` : les 5 démos (titres, URL, captures). `demoUrl: null` affiche « Bientôt disponible ». Ajouter un projet = ajouter un objet + une capture dans `public/screenshots/`.
- `src/config/pricing.ts` : prix par devise (USD pour la RDC, ZAR pour l'Afrique du Sud).
- `src/components/` : un composant par section (Hero, Experiences, Portfolio, ProjectCard, WhyUs, HowItWorks, Services, Pricing, CtaSection, ContactForm, Footer…).

## Règles métier (à respecter)
- Ne pas inventer de démos, clients, témoignages, avis, statistiques ou badges (« populaire »…), ni d'URL ou de prix.
- Pas de photos de stock : uniquement les vraies captures des 5 démos.
- Prix : ceux fournis par le propriétaire (Starter $75/R1 250 · Standard $150/R2 500 · Premium $200–250/R3 500–4 500 · Ultimate $300+/R5 000+). Toujours présentés comme indicatifs. Ne pas dire que toutes les fonctionnalités sont dans chaque package.
- Contact principal = WhatsApp. Pas de comptes clients, pas de paiement en ligne, pas de base de données, pas d'éditeur de templates.
- Les 5 démos : princy-wedding, israel-mariage, achille-deborah, babyshower-mu-puce, lisa24 (tous `.vercel.app`).

## Conventions techniques
- Tailwind v4 : le thème est défini dans `src/app/globals.css` (`@theme inline`). Couleurs : `ivory`, `gold`, `gold-dark` (#7a5d2b, texte accessible), `charcoal`. Polices : Cormorant Garamond (titres) et Inter.
- Le hero est un composant **serveur** avec animations CSS (`fade-up`, `float-y`) : ne pas le repasser en `initial={{opacity:0}}` Framer Motion (casse le LCP). Les autres sections utilisent `Reveal` (Framer Motion).
- `lucide-react` (v1) n'a plus les logos de marques : les icônes sociales sont des SVG intégrés dans `Footer.tsx`.
- Accessibilité : garder `aria-*`, lien d'évitement, focus visibles, `prefers-reduced-motion`. Objectif maintenu : Lighthouse 100 en accessibilité, bonnes pratiques et SEO.
- Les captures des démos s'obtiennent avec Playwright + Chrome (les démos 02 et 03 ont un écran d'ouverture à cliquer). Les images Open Graph (`public/og-fr.jpg`, `og-en.jpg`, 1200×630) sont générées hors dépôt : à refaire si les captures changent.

## À faire / ouvert
- Renseigner les réseaux sociaux dans `siteConfig.social`.
- Titres de démos de mariage génériques (« Démo 01 ») : noms des couples non utilisés, à la demande du propriétaire.
- Lien « LYGM Events » à ajouter depuis `www.lygmgroup.co.za` (autre dépôt).
