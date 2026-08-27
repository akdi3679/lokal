"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "bijoux", label: "Bijoux" },
  { id: "maison", label: "Maison" },
  { id: "mode", label: "Mode & accessoires" },
  { id: "cadeaux", label: "Créations & cadeaux" },
] as const;

interface Props {
  creators: Array<{ id: string; brand: string }>;
}

export default function FiltersBar({ creators }: Props) {
  const router = useRouter();
  const sp = useSearchParams();
  const [pending, start] = useTransition();

  const update = useCallback(
    (key: string, value: string) => {
      start(() => {
        const next = new URLSearchParams(sp.toString());
        if (value === "" || value === "all" || value === "tous") next.delete(key);
        else next.set(key, value);
        router.push(`/creations?${next.toString()}`, { scroll: false });
      });
    },
    [router, sp],
  );

  const cat = sp.get("cat") ?? "all";
  const creatorId = sp.get("createur") ?? "";
  const unique = sp.get("unique") === "1";

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer les créations">
      {CATEGORIES.map((c) => (
       <button
  key={c.id}
  type="button"
  aria-pressed={cat === c.id}
  disabled={cat === c.id}
  onClick={() => update("cat", c.id)}
  className={`rounded-full border px-4 py-2.5 text-[0.88rem] font-semibold transition ${
    cat === c.id
      ? "cursor-default border-navy bg-navy text-sand"
      : "border-navy/15 bg-paper text-ink hover:border-navy"
  }`}
>
  {c.label}
</button>      ))}
      <select
        aria-label="Filtrer par créateur"
        value={creatorId}
        onChange={(e) => update("createur", e.target.value)}
        className="rounded-full border border-navy/15 bg-paper px-4 py-2.5 text-[0.9rem] font-semibold text-ink"
      >
        <option value="">Tous les créateurs</option>
        {creators.map((c) => (
          <option key={c.id} value={c.id}>
            {c.brand}
          </option>
        ))}
      </select>
      <button
        type="button"
        aria-pressed={unique}
        onClick={() => update("unique", unique ? "" : "1")}
        className={`rounded-full border px-4 py-2.5 text-[0.88rem] font-semibold transition ${
          unique ? "border-navy bg-navy text-sand" : "border-navy/15 bg-paper text-ink hover:border-navy"
        }`}
      >
        Pièces uniques
      </button>
      {(cat !== "all" || creatorId || unique) && (
        <button
          type="button"
          onClick={() => router.push("/creations", { scroll: false })}
          className="rounded-full px-4 py-2.5 text-[0.88rem] font-semibold text-muted hover:text-navy"
        >
          Réinitialiser
        </button>
      )}
      {pending && <span className="ml-auto text-sm text-muted" aria-live="polite">Mise à jour…</span>}
    </div>
  );
}