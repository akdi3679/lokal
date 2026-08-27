export interface NavItem {
  label: string;
  href: string;
}

/** Navigation principale — 6 entrées max (Hick's Law, §54). */
export const NAVIGATION = [
  { label: "Découvrir", href: "/#decouvrir" },
  { label: "Les créateurs", href: "/createurs" },
  { label: "Les créations", href: "/creations" },
  { label: "Idées cadeaux", href: "/#cadeaux" },
  { label: "Actualités", href: "/actualites" },
  { label: "La boutique", href: "/la-boutique" },
] as const;