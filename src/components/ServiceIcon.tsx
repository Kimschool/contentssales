type Slug = "production" | "localization" | "planning" | "studio";

export function ServiceIcon({ slug }: { slug: string }) {
  const key = (slug as Slug) ?? "production";
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-xl bg-brand-50">
      <svg
        viewBox="0 0 320 140"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <pattern id={`svc-${key}-tone`} width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#a16207" fillOpacity="0.22" />
          </pattern>
        </defs>
        <rect width="320" height="140" fill="#fffbeb" />
        <rect width="320" height="140" fill={`url(#svc-${key}-tone)`} />

        {key === "production" && <ProductionArt />}
        {key === "localization" && <LocalizationArt />}
        {key === "planning" && <PlanningArt />}
        {key === "studio" && <StudioArt />}
      </svg>
    </div>
  );
}

function ProductionArt() {
  return (
    <g stroke="#a16207" strokeWidth="2" fill="#ffffff">
      <rect x="30" y="22" width="80" height="48" rx="6" />
      <rect x="30" y="78" width="80" height="40" rx="6" />
      <rect x="118" y="22" width="54" height="96" rx="6" />
      <rect x="180" y="22" width="110" height="42" rx="6" />
      <rect x="180" y="72" width="110" height="46" rx="6" />
      <circle cx="145" cy="70" r="13" fill="#facc15" stroke="none" />
      <g transform="translate(225 45)" fill="#facc15" stroke="none">
        <circle cx="-8" cy="0" r="2" />
        <circle cx="0" cy="0" r="2" />
        <circle cx="8" cy="0" r="2" />
      </g>
    </g>
  );
}

function LocalizationArt() {
  return (
    <g>
      <g transform="translate(80 70)" stroke="#a16207" strokeWidth="2" fill="none">
        <circle r="42" fill="#ffffff" />
        <ellipse rx="42" ry="16" />
        <ellipse rx="42" ry="28" />
        <line x1="-42" y1="0" x2="42" y2="0" />
        <line x1="0" y1="-42" x2="0" y2="42" />
      </g>
      <g fontFamily="Pretendard, sans-serif" fontWeight="800" fontSize="11" fill="#a16207">
        {[
          { x: 160, y: 34, t: "KO" },
          { x: 210, y: 34, t: "EN" },
          { x: 260, y: 34, t: "JP" },
          { x: 160, y: 64, t: "ZH" },
          { x: 210, y: 64, t: "ES" },
          { x: 260, y: 64, t: "FR" },
          { x: 185, y: 94, t: "DE" },
          { x: 235, y: 94, t: "TH" }
        ].map((c) => (
          <g key={c.t}>
            <rect x={c.x} y={c.y} width="40" height="22" rx="11" fill="#ffffff" stroke="#facc15" strokeWidth="1.5" />
            <text x={c.x + 20} y={c.y + 15} textAnchor="middle">
              {c.t}
            </text>
          </g>
        ))}
      </g>
    </g>
  );
}

function PlanningArt() {
  return (
    <g stroke="#a16207" strokeWidth="2" strokeLinecap="round">
      <g transform="translate(40 30)" fill="#ffffff">
        <rect width="60" height="80" rx="6" transform="rotate(-6)" />
        <rect x="6" y="8" width="48" height="30" rx="3" fill="#facc15" stroke="none" transform="rotate(-6)" />
      </g>
      <g transform="translate(110 30)" fill="#ffffff">
        <rect width="60" height="80" rx="6" transform="rotate(4)" />
        <rect x="6" y="8" width="48" height="30" rx="3" fill="#facc15" stroke="none" transform="rotate(4)" />
      </g>
      <g transform="translate(180 30)" fill="#ffffff">
        <rect width="60" height="80" rx="6" transform="rotate(-2)" />
        <rect x="6" y="8" width="48" height="30" rx="3" fill="#facc15" stroke="none" transform="rotate(-2)" />
      </g>
      <g transform="translate(260 70)" fill="none">
        <path d="M -10 0 L 30 0" />
        <path d="M 20 -8 L 30 0 L 20 8" />
      </g>
      <circle cx="300" cy="70" r="8" fill="#facc15" stroke="#a16207" strokeWidth="1.5" />
    </g>
  );
}

function StudioArt() {
  return (
    <g stroke="#a16207" strokeWidth="2">
      <g transform="translate(40 30)">
        <rect width="140" height="80" rx="6" fill="#ffffff" />
        <rect x="8" y="8" width="124" height="64" rx="3" fill="#fffbeb" stroke="none" />
        <rect x="16" y="18" width="50" height="10" rx="2" fill="#facc15" stroke="none" />
        <rect x="16" y="34" width="100" height="3" fill="#facc15" stroke="none" opacity="0.6" />
        <rect x="16" y="42" width="80" height="3" fill="#facc15" stroke="none" opacity="0.6" />
        <rect x="16" y="50" width="90" height="3" fill="#facc15" stroke="none" opacity="0.6" />
        <rect x="60" y="80" width="20" height="8" fill="#ffffff" />
      </g>
      <g transform="translate(200 40)">
        <rect width="80" height="60" rx="6" fill="#ffffff" />
        <path d="M 10 50 Q 30 20 50 45 T 70 40" stroke="#facc15" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <g transform="translate(90 -10) rotate(20)" fill="#ffffff">
          <rect x="0" y="0" width="6" height="48" rx="2" />
          <polygon points="0,48 3,58 6,48" />
          <rect x="0" y="10" width="6" height="3" fill="#facc15" stroke="none" />
        </g>
      </g>
    </g>
  );
}
