/**
 * ⚠️ BROUILLONS — à faire valider par un juriste avant mise en ligne (§45).
 * Remplacer tous les [CROCHETS] par les informations réelles de LOKAL.
 */
export interface LegalSection {
  title: string;
  body: string[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export const LEGAL = {
  mentions: {
    title: "Mentions légales",
    updated: "Août 2026",
    sections: [
      {
        title: "1 · Éditeur du site",
        body: [
          "Le site LOKAL est édité par : [NOM JURIDIQUE — association / société], boutique éphémère d'artisans-créateurs du 35, Galerie commerciale Grand Quartier, 35760 Saint-Grégoire, France. Téléphone : 06 14 33 70 46 · Email : [EMAIL DE CONTACT].",
          "Directeur de la publication : [PRÉNOM NOM].",
        ],
      },
      {
        title: "2 · Hébergement",
        body: [
          "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (infrastructure UE selon configuration). [À CONFIRMER SELON RÉGION DE DÉPLOIEMENT].",
        ],
      },
      {
        title: "3 · Propriété intellectuelle",
        body: [
          "L'ensemble des contenus (textes, photographies, illustrations, logos, créations présentées) appartient à LOKAL et à ses créateurs. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.",
          "Chaque créateur conserve l'intégralité de ses droits sur ses œuvres présentées sur ce site.",
        ],
      },
      {
        title: "4 · Responsabilité",
        body: [
          "Les informations du site (horaires, planning, créations, prix) sont fournies à titre indicatif et peuvent évoluer ; seule la boutique fait foi. LOKAL s'efforce d'assurer l'exactitude des informations mais ne saurait être tenu responsable des erreurs ou omissions.",
        ],
      },
      {
        title: "5 · Contact",
        body: [
          "Pour toute question : par téléphone au 06 14 33 70 46, par message sur Instagram @lokal_bzh, ou via le formulaire de contact de la page « La boutique ».",
        ],
      },
    ],
  },
  confidentialite: {
    title: "Politique de confidentialité",
    updated: "Août 2026",
    sections: [
      {
        title: "1 · Données collectées",
        body: [
          "Via le formulaire de contact : nom, adresse email, téléphone (facultatif) et contenu du message. Aucune autre donnée personnelle n'est collectée par ce site.",
        ],
      },
      {
        title: "2 · Finalités et base légale",
        body: [
          "Vos données servent uniquement à répondre à votre demande (base légale : consentement / intérêt légitime de répondre aux sollicitations). Elles ne sont ni vendues, ni louées, ni utilisées à des fins publicitaires.",
        ],
      },
      {
        title: "3 · Destinataires et conservation",
        body: [
          "Destinataires : l'équipe LOKAL uniquement. Conservation : le temps du traitement de votre demande, puis archivage limité à 3 ans maximum.",
        ],
      },
      {
        title: "4 · Vos droits (RGPD)",
        body: [
          "Conformément au Règlement (UE) 2016/679, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Exercez-les par email à [EMAIL DE CONTACT] ou par courrier à l'adresse de la boutique.",
          "Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).",
        ],
      },
      {
        title: "5 · Cookies et traceurs",
        body: [
          "Voir la page « Politique de cookies ». Ce site ne dépose aucun cookie publicitaire ni tiers.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politique de cookies",
    updated: "Août 2026",
    sections: [
      {
        title: "1 · Aucun cookie non essentiel",
        body: [
          "Ce site ne dépose aucun cookie publicitaire, de tracking ou de mesure d'audience nécessitant un consentement. Aucun bandeau de consentement n'est donc requis à ce jour.",
        ],
      },
      {
        title: "2 · Stockage local fonctionnel",
        body: [
          "Un stockage local purement fonctionnel (localStorage) est utilisé pour mémoriser la fermeture du panneau « Site conçu avec Fanar ». Il ne contient aucune donnée personnelle, aucun identifiant, et n'est partagé avec personne. Ce type de stockage est exempté de consentement (lignes directrices CNIL).",
        ],
      },
      {
        title: "3 · Mesure d'audience éventuelle",
        body: [
          "Si une mesure d'audience est activée (ex. Plausible / Umami, sans cookie et anonymisée), elle est exemptée de consentement selon la doctrine CNIL. En cas d'ajout futur d'un outil déposant des cookies non essentiels, un bandeau de consentement conforme (accepter aussi simple que refuser) sera mis en place avant activation.",
        ],
      },
    ],
  },
} as const satisfies Record<string, LegalDoc>;