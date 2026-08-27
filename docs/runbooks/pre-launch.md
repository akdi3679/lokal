# Pre-launch LOKAL (L1)

## Contenu
- [ ] Vraies photos (hero, créateurs, créations) + alt réels ; retirer les placeholders.
- [ ] Compléter 11 créateurs (nom, marque, craft, story, liens) avec LOKAL.
- [ ] Vérifier horaires, téléphone, adresse, « à côté de Cultura ».
- [ ] Planning hebdo à jour (ou masquer la section si obsolète).

## Légal & confiance
- [ ] Mentions légales / confidentialité / cookies validées par juriste.
- [ ] Remplacer [CROCHETS] dans data/legal.ts.
- [ ] security.txt : contact réel.

## Technique
- [ ] .env prod : NEXT_PUBLIC_SITE_URL, TURNSTILE_*, CONTACT_EMAIL (+ Resend).
- [ ] proxy.ts : CSP Report-Only → strict ; vérifier securityheaders.com ≥ A.
- [ ] npm audit propre ; typecheck + tests verts ; build OK.
- [ ] Lighthouse ≥ 90/95 ; axe 0 critique ; keyboard + reduced-motion testés.
- [ ] robots.txt + sitemap.xml live ; OG image vérifiée (partage FB/WhatsApp).
- [ ] UptimeRobot + Sentry branchés ; /api/health surveillé.
- [ ] Formulaire : test réel (email reçu), honeypot, rate-limit 429 vérifié.
- [ ] Fanar : BRAND.fanar.url renseigné ; crédit footer visible mais discret.

## Jour J (§89)
- [ ] Smoke test home + 3 routes + formulaire ; Sentry sans nouvelle erreur ; rollback = redéploy commit précédent.