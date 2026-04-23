export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink-100 bg-white py-4">
      <div className="flex gap-10 whitespace-nowrap">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="font-display text-xs font-bold uppercase tracking-[0.35em] text-ink-400"
          >
            ● {item}
          </span>
        ))}
      </div>
    </div>
  );
}
