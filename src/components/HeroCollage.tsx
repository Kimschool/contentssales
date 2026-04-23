export function HeroCollage() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-md justify-self-center lg:max-w-none lg:justify-self-end">
      <svg
        viewBox="0 0 500 600"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="hc-purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a0f5e" />
            <stop offset="60%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ff3ea5" />
          </linearGradient>
          <linearGradient id="hc-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff3ea5" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="hc-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b1d4d" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="hc-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <pattern id="hc-dot" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="white" fillOpacity="0.18" />
          </pattern>
          <pattern id="hc-line" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="2" height="6" fill="white" fillOpacity="0.22" />
          </pattern>
          <filter id="hc-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Panel 1: Top-left — star / face silhouette */}
        <g>
          <rect x="20" y="20" width="280" height="240" rx="24" fill="url(#hc-purple)" />
          <rect x="20" y="20" width="280" height="240" rx="24" fill="url(#hc-dot)" />
          {/* crescent / speech */}
          <circle cx="100" cy="120" r="56" fill="#ffd1ea" opacity="0.35" />
          <circle cx="86" cy="108" r="44" fill="white" opacity="0.9" />
          {/* silhouette head */}
          <g transform="translate(210 170)">
            <circle r="36" fill="white" opacity="0.9" />
            <path
              d="M-28 36 C -40 80 40 80 28 36 Z"
              fill="white"
              opacity="0.75"
            />
          </g>
          {/* stars */}
          <g fill="white" opacity="0.85">
            <path d="M230 60 l3 6 6 1 -4 4 1 7 -6 -3 -6 3 1 -7 -4 -4 6 -1 z" />
            <path d="M180 40 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" />
          </g>
          {/* sfx label */}
          <text
            x="40"
            y="240"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="14"
            fontWeight="800"
            fill="white"
            opacity="0.85"
            letterSpacing="3"
          >
            EPISODE · 01
          </text>
        </g>

        {/* Panel 2: Top-right — microphone / stage vibe */}
        <g>
          <rect x="320" y="20" width="160" height="160" rx="20" fill="url(#hc-blue)" />
          <rect x="320" y="20" width="160" height="160" rx="20" fill="url(#hc-line)" />
          {/* mic */}
          <g transform="translate(400 100)">
            <rect x="-18" y="-38" width="36" height="52" rx="18" fill="white" opacity="0.95" />
            <rect x="-4" y="14" width="8" height="38" rx="4" fill="white" opacity="0.85" />
            <rect x="-20" y="52" width="40" height="4" rx="2" fill="white" opacity="0.6" />
          </g>
          <text
            x="340"
            y="166"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="10"
            fontWeight="800"
            fill="white"
            opacity="0.8"
            letterSpacing="3"
          >
            LIVE · ON AIR
          </text>
        </g>

        {/* Panel 3: Middle-right — heart + sparkles */}
        <g>
          <rect x="320" y="200" width="160" height="180" rx="20" fill="url(#hc-pink)" />
          <g transform="translate(400 290)">
            <path
              d="M0 40 C -60 10 -70 -40 -30 -55 C -10 -60 0 -45 0 -30 C 0 -45 10 -60 30 -55 C 70 -40 60 10 0 40 Z"
              fill="white"
              opacity="0.95"
            />
            <path
              d="M0 40 C -60 10 -70 -40 -30 -55 C -10 -60 0 -45 0 -30 C 0 -45 10 -60 30 -55 C 70 -40 60 10 0 40 Z"
              fill="none"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="8"
            />
          </g>
          <g fill="white" opacity="0.9">
            <path d="M340 230 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" />
            <path d="M460 250 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" />
            <path d="M350 360 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" />
          </g>
        </g>

        {/* Panel 4: Bottom-left — city / night */}
        <g>
          <rect x="20" y="280" width="180" height="200" rx="20" fill="url(#hc-cyan)" />
          <rect x="20" y="280" width="180" height="200" rx="20" fill="url(#hc-dot)" />
          <g transform="translate(30 360)" fill="white" opacity="0.35">
            <rect x="0" y="20" width="24" height="80" />
            <rect x="28" y="0" width="18" height="100" />
            <rect x="50" y="30" width="22" height="70" />
            <rect x="76" y="10" width="16" height="90" />
            <rect x="96" y="24" width="22" height="76" />
            <rect x="122" y="6" width="18" height="94" />
            <rect x="144" y="30" width="18" height="70" />
          </g>
          <g fill="white" opacity="0.95">
            {[[40, 390], [62, 370], [80, 400], [110, 380], [140, 400]].map(
              ([x, y], i) => (
                <rect key={i} x={x} y={y} width="3" height="3" />
              )
            )}
          </g>
          <circle cx="170" cy="320" r="22" fill="white" opacity="0.9" />
          <circle cx="160" cy="314" r="16" fill="url(#hc-cyan)" />
        </g>

        {/* Panel 5: Bottom-right speech bubble */}
        <g>
          <rect x="220" y="400" width="240" height="180" rx="22" fill="#1a0b2e" stroke="white" strokeOpacity="0.18" />
          <rect x="220" y="400" width="240" height="180" rx="22" fill="url(#hc-line)" />
          {/* big headline */}
          <text
            x="240"
            y="466"
            fontFamily="Space Grotesk, Pretendard, sans-serif"
            fontSize="40"
            fontWeight="900"
            fill="white"
            letterSpacing="-1"
          >
            FANDOM
          </text>
          <text
            x="240"
            y="510"
            fontFamily="Space Grotesk, Pretendard, sans-serif"
            fontSize="40"
            fontWeight="900"
            fill="url(#hc-pink)"
            letterSpacing="-1"
          >
            × STORY
          </text>
          <line x1="240" y1="528" x2="280" y2="528" stroke="white" strokeWidth="2" />
          <text
            x="240"
            y="552"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="white"
            opacity="0.7"
            letterSpacing="4"
          >
            WEAVUS · CONTENTS
          </text>
        </g>

        {/* onomatopoeia sticker */}
        <g transform="translate(280 200) rotate(-10)">
          <polygon
            points="0,-30 10,-10 32,-10 14,4 22,28 0,14 -22,28 -14,4 -32,-10 -10,-10"
            fill="#ffd1ea"
            stroke="white"
            strokeWidth="3"
          />
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="14"
            fontWeight="900"
            fill="#6d28d9"
            letterSpacing="1"
          >
            PRESS!
          </text>
        </g>
      </svg>

      <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-neon-purple/40 blur-2xl" />
    </div>
  );
}
