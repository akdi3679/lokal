"use client";

import { useState, useTransition, type FormEvent } from "react";
import { useToast } from "@/components/feedback";
interface State {
  status: "idle" | "sending" | "success" | "error";
  message?: string;
  field?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "visite", message: "", company: "" });
  const [state, setState] = useState<State>({ status: "idle" });
  const [pending, start] = useTransition();
  const { toast } = useToast();

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    start(async () => {
      setState({ status: "sending" });
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, turnstileToken: "dev-bypass" }), // TODO Phase 6 : vrai token Turnstile
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setState({ status: "error", message: data.error ?? "Une erreur est survenue.", field: data.field });
          return;
        }
     toast({
  type: "success",
  title: "Message envoyé ✓",
  description: "Nous revenons vers vous très vite.",
});
setForm({ name: "", email: "", phone: "", subject: "visite", message: "", company: "" });
setState({ status: "idle" });
 } catch {
        setState({ status: "error", message: "Connexion impossible — appelez-nous directement au 06 14 33 70 46." });
      }
    });
  }

  const base = "w-full rounded-xl border border-navy/15 bg-paper px-4 py-3 text-ink placeholder-muted outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Nom *</span>
          <input
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={base}
            autoComplete="name"
            aria-invalid={state.field === "name"}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Email *</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={base}
            autoComplete="email"
            aria-invalid={state.field === "email"}
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Téléphone <span className="text-muted">(facultatif)</span></span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={base}
            autoComplete="tel"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-navy">Sujet *</span>
          <select
            name="subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={base}
          >
            <option value="visite">Je prépare ma visite</option>
            <option value="createur">Question sur un créateur</option>
            <option value="cadeau">Je cherche un cadeau</option>
            <option value="autre">Autre</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy">Message *</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={base + " resize-y"}
          aria-invalid={state.field === "message"}
        />
      </label>

      {/* Honeypot §12 — invisible */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {state.status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          {state.message}
        </p>
      )}
      {state.status === "success" && (
        <p role="status" className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
          ✓ {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || state.status === "sending"}
        className="w-full rounded-full bg-navy px-8 py-4 font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-royal disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {state.status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <p className="text-xs text-muted">
        Vos données servent uniquement à répondre à votre demande. Elles ne sont ni stockées ni partagées.
      </p>
    </form>
  );
}