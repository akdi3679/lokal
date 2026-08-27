/**
 * Canvas OG 1200×630 — navy + sand, mark LOKAL (O pointé + feuille),
 * pattern de points en filigrane. Satori-compatible (flex + svg uniquement).
 */
export function OgCanvas({ withText }: { withText: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#1C2452",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Pattern de points (extrait s1/s2/s5/s6) */}
      <svg
        width="520"
        height="520"
        viewBox="0 0 1132 1184"
        style={{ position: "absolute", top: -120, right: -80, opacity: 0.45 }}
      >
        <circle cx="1070" cy="584" r="65" fill="#C9A876" />
        <circle cx="1078" cy="52" r="58" fill="#C9A876" />
        <circle cx="1022" cy="334" r="68" fill="#C9A876" />
        <circle cx="704" cy="834" r="68" fill="#C9A876" />
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 56, padding: "0 90px" }}>
        {/* Mark : O pointé + feuille (géométrie icon.svg) */}
        <svg width="300" height="300" viewBox="0 0 64 64">
          <circle cx="32" cy="38" r="15" fill="#C9A876" />
          <circle cx="32" cy="38" r="4.5" fill="#1C2452" />
          <path
            d="M25 13c4-1 8 0 10 3 2 3 1 7-3 9-5 3-8 3-11 8-2-8-1-16 4-20z"
            fill="#C9A876"
          />
        </svg>

        {withText && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                fontFamily: "Jost",
                fontSize: 108,
                fontWeight: 800,
                color: "#FAF6EE",
                letterSpacing: 6,
                lineHeight: 1,
              }}
            >
              LOKAL
            </div>
            <div style={{ fontFamily: "Jost", fontSize: 36, color: "#C9A876" }}>
              La création locale, à découvrir autrement.
            </div>
            <div style={{ fontFamily: "Jost", fontSize: 26, color: "rgba(250,246,238,0.72)" }}>
              Galerie Grand Quartier · Saint-Grégoire · 18 créateurs du 35
            </div>
          </div>
        )}
      </div>
    </div>
  );
}