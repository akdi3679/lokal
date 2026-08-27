const UNIVERS = ["Bijoux","Céramique","Vitrail","Bois","Illustration","Bougies","Textile","Savons","Kokedamas","Upcycling","Décoration","Affiches"];

export default function Ticker() {
  const row = [...UNIVERS, ...UNIVERS];
  return (
    <div className="overflow-hidden bg-navy py-3.5">
      <div className="flex w-max gap-10 whitespace-nowrap animate-[tick_32s_linear_infinite] text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-sand">
        {row.map((u, i) => (
          <span key={i} className="flex items-center gap-10">
            {u}<span className="text-cream" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}