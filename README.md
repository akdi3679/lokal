# LOKAL — Boutique éphémère d'artisans-créateurs du 35

Site vitrine (Type 1, tier L1) — collaboration **LOKAL × Fanar**. LOKAL reste le héros ; Fanar est le crédit discret.

## Stack
Next.js 16 (App Router) · TypeScript strict · Tailwind v4 · Zod · Vitest · Vercel + Cloudflare (cible).

## Démarrer
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run test
npm run build

## Architecture
- `data/` = source de vérité statique (18 créateurs, planning réel, créations placeholder).
- `lib/content/` = repository pattern : basculer local → Sanity = 1 ligne dans `lib/content/index.ts` (ADR-0003).
- `schemas/` = contrats Zod 1:1 avec les futurs `defineType` Sanity.
- `proxy.ts` = headers sécurité + rate-limit (filtre de bordure, PAS la sécurité — §03).

## À faire avant lancement (docs/runbooks/pre-launch.md)
1. Remplacer les photos placeholder par de vraies photos (accord des créateurs).
2. Compléter les 11 créateurs placeholders + textes.
3. Faire valider les pages légales par un juriste (§45).
4. Vérifier horaires + téléphone avec LOKAL.
5. Renseigner `BRAND.fanar.url`, clés Turnstile, provider email (Resend).
6. CSP : passer de Report-Only à strict dans `proxy.ts`.

## Docs
`docs/ARCHITECTURE.md` · `docs/adr/` · `SECURITY.md` · `CHANGELOG.md`