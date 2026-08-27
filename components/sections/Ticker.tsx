import { content } from "@/lib/content";

export default async function Ticker() {
  const univers = await content.getUnivers();

  return (
    <div className="overflow-hidden bg-navy py-3.5">
      <style>{"@keyframes lokal-tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}"}</style>
      <div
        className="hover:[animation-play-state:paused]"
        style={{ display: "flex", width: "max-content", animation: "lokal-tick 30s linear infinite" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 || undefined} style={{ display: "flex" }}>
            {univers.map((u) => (
              <span
                key={u}
                className="flex items-center text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-sand"
                style={{ marginRight: "2.5rem" }}
              >
                {u}
                <span className="text-cream" style={{ marginLeft: "2.5rem" }} aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}