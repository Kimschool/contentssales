export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="ticker overflow-hidden border-y border-white/5 bg-canvas-soft py-5">
      <div className="ticker-track flex gap-10 whitespace-nowrap">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="font-display text-xs font-bold uppercase tracking-[0.35em] text-ink-200/60"
          >
            ★ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
