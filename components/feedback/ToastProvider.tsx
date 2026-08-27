"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ToastCard, type ToastData, type ToastType } from "@/components/ui/Toast";

interface ToastContextValue {
  toast: (t: Omit<ToastData, "id">) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/** File max 3, auto-dismiss, accessible (§68 : un toast à la fois visible max, queue). */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const timers = useRef<Map<string, number>>(new Map());

  const dismiss = useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id));
    const timer = timers.current.get(id);
    if (timer) window.clearTimeout(timer);
    timers.current.delete(id);
  }, []);

  const push = useCallback(
    (t: Omit<ToastData, "id">) => {
      const id = crypto.randomUUID();
      const duration = t.duration ?? (t.type === "error" ? 0 : t.type === "info" ? 2000 : 4000);
      setToasts((prev) => [...prev.slice(-2), { ...t, id }]); // queue max 3
      if (duration > 0) {
        timers.current.set(
          id,
          window.setTimeout(() => dismiss(id), duration),
        );
      }
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={{ toast: push }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed right-3 bottom-3 z-[75] flex flex-col gap-2 md:right-4 md:bottom-4"
      >
        {toasts.map((t) => (
          <ToastCard key={t.id} toast={t} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}