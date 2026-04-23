type Slug = "production" | "localization" | "planning" | "studio";

export function ServiceIcon({ slug }: { slug: string }) {
  const key = (slug as Slug) ?? "production";
  return (
    <div className="relative h-28 w-full overflow-hidden rounded-2xl">
      <svg
        viewBox="0 0 320 140"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id={`svc-${key}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a0b2e" />
            <stop offset="55%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#ff3ea5" />
          </linearGradient>
          <pattern id={`svc-${key}-dot`} width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="white" fillOpacity="0.14" />
          </pattern>
        </defs>
        <rect width="320" height="140" fill={`url(#svc-${key})`} />
        <rect width="320" height="140" fill={`url(#svc-${key}-dot)`} />

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
    <g>
      {/* comic panels */}
      <g stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.1">
        <rect x="30" y="22" width="80" height="48" rx="6" />
        <rect x="30" y="78" width="80" height="40" rx="6" />
        <rect x="118" y="22" width="54" height="96" rx="6" />
        <rect x="180" y="22" width="110" height="42" rx="6" />
        <rect x="180" y="72" width="110" height="46" rx="6" />
      </g>
      {/* face circle */}
      <circle cx="145" cy="70" r="14" fill="white" opacity="0.85" />
      {/* speech bubble */}
      <g transform="translate(220 50)" fill="white">
        <rect x="-20" y="-14" width="50" height="22" rx="8" opacity="0.85" />
        <path d="M-10 8 L-14 16 L-4 8 Z" opacity="0.85" />
        <circle cx="-8" cy="-3" r="1.5" fill="#6d28d9" />
        <circle cx="0" cy="-3" r="1.5" fill="#6d28d9" />
        <circle cx="8" cy="-3" r="1.5" fill="#6d28d9" />
      </g>
    </g>
  );
}

function LocalizationArt() {
  return (
    <g>
      {/* globe */}
      <g transform="translate(80 70)">
        <circle r="46" fill="white" opacity="0.15" />
        <circle r="36" fill="white" opacity="0.1" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <ellipse rx="36" ry="14" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <ellipse rx="36" ry="26" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="-36" y1="0" x2="36" y2="0" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="0" y1="-36" x2="0" y2="36" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
      </g>
      {/* language chips */}
      <g fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="12" fill="#1a0b2e">
        <g>
          <rect x="160" y="34" width="40" height="22" rx="11" fill="white" opacity="0.95" />
          <text x="180" y="49" textAnchor="middle">KO</text>
        </g>
        <g>
          <rect x="210" y="34" width="40" height="22" rx="11" fill="#ffd1ea" />
          <text x="230" y="49" textAnchor="middle">EN</text>
        </g>
        <g>
          <rect x="260" y="34" width="40" height="22" rx="11" fill="white" opacity="0.95" />
          <text x="280" y="49" textAnchor="middle">JP</text>
        </g>
        <g>
          <rect x="160" y="64" width="40" height="22" rx="11" fill="#a78bfa" />
          <text x="180" y="79" textAnchor="middle">ZH</text>
        </g>
        <g>
          <rect x="210" y="64" width="40" height="22" rx="11" fill="white" opacity="0.9" />
          <text x="230" y="79" textAnchor="middle">ES</text>
        </g>
        <g>
          <rect x="260" y="64" width="40" height="22" rx="11" fill="#22d3ee" />
          <text x="280" y="79" textAnchor="middle">FR</text>
        </g>
        <g>
          <rect x="180" y="94" width="40" height="22" rx="11" fill="white" opacity="0.9" />
          <text x="200" y="109" textAnchor="middle">DE</text>
        </g>
        <g>
          <rect x="230" y="94" width="40" height="22" rx="11" fill="#ff3ea5" />
          <text x="250" y="109" textAnchor="middle">TH</text>
        </g>
      </g>
    </g>
  );
}

function PlanningArt() {
  return (
    <g>
      {/* storyboard cards */}
      <g transform="translate(40 30)">
        <rect width="60" height="80" rx="6" fill="white" opacity="0.95" transform="rotate(-6)" />
        <rect x="6" y="8" width="48" height="30" rx="3" fill="#6d28d9" />
        <rect x="6" y="42" width="48" height="3" fill="#6d28d9" opacity="0.4" />
        <rect x="6" y="48" width="40" height="3" fill="#6d28d9" opacity="0.4" />
        <rect x="6" y="54" width="44" height="3" fill="#6d28d9" opacity="0.4" />
      </g>
      <g transform="translate(110 30)">
        <rect width="60" height="80" rx="6" fill="white" opacity="0.95" transform="rotate(4)" />
        <rect x="6" y="8" width="48" height="30" rx="3" fill="#ff3ea5" />
        <rect x="6" y="42" width="48" height="3" fill="#6d28d9" opacity="0.4" />
        <rect x="6" y="48" width="40" height="3" fill="#6d28d9" opacity="0.4" />
        <rect x="6" y="54" width="44" height="3" fill="#6d28d9" opacity="0.4" />
      </g>
      <g transform="translate(180 30)">
        <rect width="60" height="80" rx="6" fill="white" opacity="0.95" transform="rotate(-2)" />
        <rect x="6" y="8" width="48" height="30" rx="3" fill="#3b82f6" />
        <rect x="6" y="42" width="48" height="3" fill="#6d28d9" opacity="0.4" />
        <rect x="6" y="48" width="40" height="3" fill="#6d28d9" opacity="0.4" />
        <rect x="6" y="54" width="44" height="3" fill="#6d28d9" opacity="0.4" />
      </g>
      {/* arrow + pin */}
      <g transform="translate(260 70)" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M -10 0 L 30 0" />
        <path d="M 20 -8 L 30 0 L 20 8" />
      </g>
      <circle cx="300" cy="70" r="10" fill="#ffd1ea" stroke="white" strokeWidth="2" />
    </g>
  );
}

function StudioArt() {
  return (
    <g>
      {/* monitor */}
      <g transform="translate(40 30)">
        <rect width="140" height="80" rx="6" fill="#1a0b2e" stroke="white" strokeWidth="2" />
        <rect x="8" y="8" width="124" height="64" rx="3" fill="white" opacity="0.15" />
        <rect x="16" y="18" width="60" height="12" rx="2" fill="#ff3ea5" />
        <rect x="16" y="34" width="100" height="4" rx="2" fill="white" opacity="0.5" />
        <rect x="16" y="42" width="80" height="4" rx="2" fill="white" opacity="0.5" />
        <rect x="16" y="50" width="90" height="4" rx="2" fill="white" opacity="0.5" />
        <rect x="60" y="80" width="20" height="10" fill="white" opacity="0.4" />
      </g>
      {/* tablet + pen */}
      <g transform="translate(200 40)">
        <rect width="80" height="60" rx="6" fill="white" opacity="0.95" />
        <path d="M 10 50 Q 30 20 50 45 T 70 40" stroke="#6d28d9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* pen */}
        <g transform="translate(90 -10) rotate(20)" stroke="white" strokeWidth="2" fill="#1a0b2e">
          <rect x="0" y="0" width="6" height="48" rx="2" />
          <polygon points="0,48 3,58 6,48" />
          <rect x="0" y="10" width="6" height="3" fill="#ff3ea5" />
        </g>
      </g>
    </g>
  );
}
