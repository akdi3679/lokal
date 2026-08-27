/** Vraie carte Google Maps (embed sans clé API) — Galerie Grand Quartier. */
export default function RealMap({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="Plan d'accès — LOKAL, Galerie commerciale Grand Quartier, Saint-Grégoire"
      src="https://maps.google.com/maps?q=Galerie%20commerciale%20Grand%20Quartier%2C%2035760%20Saint-Gr%C3%A9goire&z=14&output=embed"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full border-0 ${className}`}
    />
  );
}