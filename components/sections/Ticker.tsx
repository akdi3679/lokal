const UNIVERS = [
  "Bijoux", "Céramique", "Vitrail", "Bois", "Illustration", "Bougies",
  "Textile", "Savons", "Kokedamas", "Upcycling", "Décoration", "Affiches",
];

/**
 * Barre sous le hero — défilement CONTINU infini (32s, linear, seamless).
 * Keyframes injectées dans <head> via useEffect pour garantir l'application.
 */
export default function Ticker() {
  const items = [...UNIVERS, ...UNIVERS];

  // Injection des keyframes dans <head> au montage
  if (typeof window !== "undefined") {
    if (!document.getElementById("lokal-ticker-styles")) {
      const style = document.createElement("style");
      style.id = "lokal-ticker-styles";
      style.textContent = `
        @keyframes lokal-tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  return (
    <div className="overflow-hidden bg-navy py-3.5">
      <div
        className="flex whitespace-nowrap"
        style={{
          width: "max-content",
          animation: "lokal-tick 32s linear infinite",
        }}
      >
        {items.map((u, i) => (
          <span
            key={i}
            className="flex items-center text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-sand"
            style={{ marginRight: "2.5rem" }}
            aria-hidden={i >= UNIVERS.length || undefined}
          >
            {u}
            <span style={{ marginLeft: "2.5rem" }} className="text-cream" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}