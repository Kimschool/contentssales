export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-ink-100 bg-canvas-soft py-4"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)"
      }}
    >
      <div className="flex gap-14 whitespace-nowrap">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-ink-500"
          >
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rotate-45 bg-brand-500"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
