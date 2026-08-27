# ADR-0001 — Stack technique

**Statut :** Accepté · **Date :** 2026-08 · **Tier :** L1 / Type 1

## Contexte
Site vitrine creator-first pour boutique éphémère. Besoin : SEO fort, perf mobile,
zéro maintenance lourde, évolution vers CMS puis e-commerce possible.

## Décision
Next.js 16 (App Router) + TypeScript strict + Tailwind v4 + Zod + Vitest.
Déploiement cible : Vercel + Cloudflare (DNS/CDN/WAF).

## Conséquences
+ Server Components par défaut = JS client minimal (§26/§73).
+ next/font = polices self-hosted (§59 perf + privacy).
+ proxy.ts = filtre de bordure uniquement (§03/§19 : pas la sécurité).
− Écosystème Next requis pour toute évolution (verrouillage acceptable).