import { BRAND } from "@/data/brand";

/** Bandeau annonce — éditable via data/brand.ts (stratégie boutique éphémère, §25). */
export default function AnnouncementBar() {
  return (
    <p className="relative z-50 bg-navy px-4 py-2 text-center text-[0.82rem] font-medium tracking-[0.06em] text-sand-soft">
      {BRAND.announcement}
    </p>
  );
}