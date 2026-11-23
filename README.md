# LYGM Events — Catalogue digital

Site vitrine bilingue (FR/EN) de LYGM Events, une marque de LYGM Group. Next.js · TypeScript · Tailwind · Framer Motion · Lucide.

## Démarrer
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Configuration (tout est centralisé)
| Fichier | Contenu |
|---|---|
| `src/config/site.ts` | Numéro WhatsApp, messages, réseaux sociaux (vide = masqué), URL du site |
| `src/config/projects.ts` | Projets du portfolio : titres, URL des démos, captures. `demoUrl: null` = « Bientôt disponible » |
| `src/config/pricing.ts` | Packages (sans prix : devis par WhatsApp) |
| `src/i18n/fr.json`, `en.json` | Tous les textes du site |

**Ajouter un projet :** ajoutez un objet dans `projects.ts` et déposez la capture dans `public/screenshots/`.

**Déploiement :** définir `NEXT_PUBLIC_SITE_URL` (voir `.env.example`) avec le domaine final.
