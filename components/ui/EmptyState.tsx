import type { ReactNode } from "react";

/** État vide utile : pourquoi c'est vide + action primaire (§46/§64). */
export default function EmptyState({
  title,
  text,
  action,
  className = "",
}: {
  title: string;
  text: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border-2 border-dashed border-sand p-10 text-center ${className}`}>
      <p className="font-serif text-2xl font-bold text-navy">{title}</p>
      <p className="mx-auto mt-3 max-w-[46ch] text-muted">{text}</p>
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  );
}