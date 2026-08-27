export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastData {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  /** ms · 0 = persistant (§68) */
  duration?: number;
}

const ICONS: Record<ToastType, string> = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
};
const COLORS: Record<ToastType, string> = {
  success: "border-green-600/30 bg-green-50 text-green-900",
  error: "border-red-600/30 bg-red-50 text-red-900",
  warning: "border-amber-600/30 bg-amber-50 text-amber-900",
  info: "border-navy/20 bg-paper text-ink",
};

/** Carte toast présentationale — rendue par ToastProvider. */
export function ToastCard({
  toast,
  onDismiss,
}: {
  toast: ToastData;
  onDismiss: (id: string) => void;
}) {
  return (
    <div
      role={toast.type === "error" ? "alert" : "status"}
      className={`pointer-events-auto flex w-[min(360px,calc(100vw-24px))] items-start gap-3 rounded-2xl border p-4 shadow-(--shadow-lokal) ${COLORS[toast.type]}`}
    >
      <span aria-hidden="true" className="text-lg leading-none font-bold">
        {ICONS[toast.type]}
      </span>
      <div className="flex-1">
        <p className="text-sm font-bold">{toast.title}</p>
        {toast.description && <p className="mt-0.5 text-[0.85rem] opacity-80">{toast.description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        aria-label="Fermer la notification"
        className="opacity-60 hover:opacity-100"
      >
        ✕
      </button>
    </div>
  );
}