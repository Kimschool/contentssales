export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink-100 bg-white py-6">
      <div
        className="flex animate-[marquee_36s_linear_infinite] gap-10 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-10 font-display text-2xl font-black uppercase tracking-[-0.01em] text-ink-900 sm:text-3xl"
          >
            {item}
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-brand-500"
            />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
