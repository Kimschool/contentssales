export function HeroCollage() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-md justify-self-center lg:max-w-none lg:justify-self-end">
      <svg
        viewBox="0 0 500 600"
        className="h-full w-full drop-shadow-[0_30px_80px_rgba(139,92,246,0.35)]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="hc-purple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a0b3d" />
            <stop offset="60%" stopColor="#6d28d9" />
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
          <pattern id="hc-tone" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="white" fillOpacity="0.18" />
          </pattern>
          <pattern id="hc-speed" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
            <rect width="1.5" height="10" fill="white" fillOpacity="0.18" />
          </pattern>
          <radialGradient id="hc-spot" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ffd1ea" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffd1ea" stopOpacity="0" />
          </radialGradient>
          <clipPath id="hc-main-panel">
            <rect x="20" y="20" width="300" height="360" rx="24" />
          </clipPath>
          <clipPath id="hc-tr-panel">
            <rect x="336" y="20" width="144" height="170" rx="18" />
          </clipPath>
          <clipPath id="hc-mr-panel">
            <rect x="336" y="206" width="144" height="174" rx="18" />
          </clipPath>
          <clipPath id="hc-br-panel">
            <rect x="200" y="400" width="280" height="180" rx="20" />
          </clipPath>
          <clipPath id="hc-bl-panel">
            <rect x="20" y="400" width="164" height="180" rx="20" />
          </clipPath>
        </defs>

        {/* ===== MAIN PANEL: female lead portrait ===== */}
        <g clipPath="url(#hc-main-panel)">
          <rect x="20" y="20" width="300" height="360" fill="url(#hc-purple)" />
          <rect x="20" y="20" width="300" height="360" fill="url(#hc-spot)" />
          <rect x="20" y="20" width="300" height="360" fill="url(#hc-tone)" opacity="0.6" />

          {/* stars */}
          <g fill="white" opacity="0.85">
            <path d="M 70 70 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
            <path d="M 280 90 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 z" />
            <path d="M 260 230 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
          </g>

          {/* moon */}
          <circle cx="85" cy="100" r="40" fill="#ffd1ea" opacity="0.35" />
          <circle cx="80" cy="96" r="32" fill="#fff" opacity="0.9" />
          <circle cx="72" cy="92" r="28" fill="#6d28d9" />

          {/* character — heroine close-up */}
          <g transform="translate(175 230)">
            {/* long flowing hair */}
            <path
              d="M -115 -75 C -140 -10 -135 100 -115 170 L 115 170 C 135 100 140 -10 115 -75 C 92 -140 55 -165 0 -168 C -55 -165 -92 -140 -115 -75 Z"
              fill="#2a0f5e"
            />
            {/* neck */}
            <rect x="-22" y="70" width="44" height="35" fill="#ffe3d6" />
            {/* collar / dress hint */}
            <path d="M -60 105 L -80 170 L 80 170 L 60 105 C 30 115 -30 115 -60 105 Z" fill="#1a0b2e" />
            <path d="M -60 105 C -40 115 40 115 60 105" stroke="#ff3ea5" strokeWidth="2.5" fill="none" />
            {/* face */}
            <ellipse cx="0" cy="10" rx="72" ry="88" fill="#ffe3d6" />
            {/* bangs + hair frame */}
            <path
              d="M -72 -40 C -62 -100 -25 -120 0 -120 C 28 -120 62 -100 72 -40 C 62 -58 40 -55 22 -42 C 10 -52 -10 -52 -20 -42 C -38 -55 -62 -58 -72 -40 Z"
              fill="#1a0b2e"
            />
            <path d="M -72 -40 C -85 10 -90 80 -72 140 L -50 140 C -55 80 -55 20 -42 -22 Z" fill="#1a0b2e" />
            <path d="M 72 -40 C 85 10 90 80 72 140 L 50 140 C 55 80 55 20 42 -22 Z" fill="#1a0b2e" />
            {/* hair highlight */}
            <path d="M -50 -50 C -40 -80 -10 -90 20 -80" stroke="#ff3ea5" strokeWidth="3" fill="none" opacity="0.5" />

            {/* HUGE manga eyes */}
            <g>
              <ellipse cx="-26" cy="12" rx="15" ry="19" fill="#fff" />
              <ellipse cx="26" cy="12" rx="15" ry="19" fill="#fff" />
              <ellipse cx="-26" cy="14" rx="11" ry="15" fill="#ff3ea5" />
              <ellipse cx="26" cy="14" rx="11" ry="15" fill="#ff3ea5" />
              <ellipse cx="-26" cy="16" rx="5" ry="9" fill="#0a0414" />
              <ellipse cx="26" cy="16" rx="5" ry="9" fill="#0a0414" />
              {/* huge highlights */}
              <circle cx="-22" cy="8" r="4" fill="#fff" />
              <circle cx="30" cy="8" r="4" fill="#fff" />
              <circle cx="-30" cy="22" r="2.5" fill="#fff" opacity="0.9" />
              <circle cx="22" cy="22" r="2.5" fill="#fff" opacity="0.9" />
              {/* eyelashes */}
              <path d="M -42 -2 Q -26 -8 -10 -2 M -42 -2 L -46 -8 M -36 -6 L -38 -13 M -30 -8 L -30 -15 M -22 -8 L -20 -15" stroke="#0a0414" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              <path d="M 10 -2 Q 26 -8 42 -2 M 42 -2 L 46 -8 M 36 -6 L 38 -13 M 30 -8 L 30 -15 M 22 -8 L 20 -15" stroke="#0a0414" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              {/* brows */}
              <path d="M -40 -18 Q -26 -26 -12 -18" stroke="#1a0b2e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <path d="M 12 -18 Q 26 -26 40 -18" stroke="#1a0b2e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </g>

            {/* nose */}
            <path d="M 0 28 Q -4 42 1 48" stroke="#d9a48a" strokeWidth="2" fill="none" opacity="0.8" strokeLinecap="round" />
            {/* blush */}
            <ellipse cx="-34" cy="45" rx="12" ry="6" fill="#ff8fb6" opacity="0.65" />
            <ellipse cx="34" cy="45" rx="12" ry="6" fill="#ff8fb6" opacity="0.65" />
            {/* lips */}
            <path d="M -11 60 Q 0 68 11 60 Q 6 57 0 60 Q -6 57 -11 60 Z" fill="#d94477" />
            <path d="M -11 60 Q 0 66 11 60" stroke="#7a0f3a" strokeWidth="1" fill="none" />
          </g>

          {/* EPISODE tag */}
          <rect x="40" y="40" width="92" height="24" rx="12" fill="#fff" opacity="0.95" />
          <text x="50" y="57" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="800" fill="#6d28d9" letterSpacing="2">
            EP · 01
          </text>
        </g>

        {/* ===== TOP-RIGHT PANEL: microphone / stage ===== */}
        <g clipPath="url(#hc-tr-panel)">
          <rect x="336" y="20" width="144" height="170" fill="url(#hc-blue)" />
          <rect x="336" y="20" width="144" height="170" fill="url(#hc-speed)" />
          {/* mic */}
          <g transform="translate(408 95)">
            <rect x="-20" y="-42" width="40" height="55" rx="20" fill="#fff" />
            <rect x="-12" y="-34" width="24" height="6" rx="3" fill="#3b82f6" />
            <rect x="-12" y="-24" width="24" height="6" rx="3" fill="#3b82f6" />
            <rect x="-12" y="-14" width="24" height="6" rx="3" fill="#3b82f6" />
            <rect x="-5" y="13" width="10" height="42" rx="5" fill="#fff" />
            <rect x="-22" y="55" width="44" height="4" rx="2" fill="#fff" opacity="0.7" />
          </g>
          <text x="350" y="175" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="800" fill="white" letterSpacing="3" opacity="0.9">
            LIVE · ON AIR
          </text>
          <circle cx="468" cy="32" r="5" fill="#ff3ea5" />
          <circle cx="468" cy="32" r="5" fill="#ff3ea5" opacity="0.3" className="animate-ping" />
        </g>

        {/* ===== MIDDLE-RIGHT PANEL: heart + sparkles ===== */}
        <g clipPath="url(#hc-mr-panel)">
          <rect x="336" y="206" width="144" height="174" fill="url(#hc-pink)" />
          <rect x="336" y="206" width="144" height="174" fill="url(#hc-tone)" opacity="0.5" />
          <g transform="translate(408 293)">
            <path
              d="M 0 44 C -66 12 -78 -42 -33 -60 C -12 -65 0 -50 0 -33 C 0 -50 12 -65 33 -60 C 78 -42 66 12 0 44 Z"
              fill="#fff"
              opacity="0.97"
              stroke="#fff"
              strokeWidth="2"
            />
            <path
              d="M 0 44 C -66 12 -78 -42 -33 -60 C -12 -65 0 -50 0 -33 C 0 -50 12 -65 33 -60 C 78 -42 66 12 0 44 Z"
              fill="none"
              stroke="#ff3ea5"
              strokeWidth="10"
              strokeLinejoin="round"
              opacity="0.25"
            />
          </g>
          <g fill="white" opacity="0.9">
            <path d="M 355 230 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
            <path d="M 465 240 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
            <path d="M 350 360 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 z" />
            <path d="M 460 355 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 z" />
          </g>
        </g>

        {/* ===== BOTTOM-LEFT PANEL: city skyline ===== */}
        <g clipPath="url(#hc-bl-panel)">
          <rect x="20" y="400" width="164" height="180" fill="url(#hc-cyan)" />
          <rect x="20" y="400" width="164" height="180" fill="url(#hc-tone)" opacity="0.45" />
          {/* buildings */}
          <g fill="#0a0414" opacity="0.55">
            <rect x="30" y="490" width="22" height="90" />
            <rect x="56" y="460" width="20" height="120" />
            <rect x="80" y="500" width="22" height="80" />
            <rect x="104" y="470" width="18" height="110" />
            <rect x="126" y="490" width="22" height="90" />
            <rect x="150" y="460" width="20" height="120" />
          </g>
          {/* windows */}
          <g fill="#22d3ee">
            {[[36, 500], [62, 472], [86, 510], [112, 482], [132, 500], [156, 472], [64, 500], [108, 500], [156, 500]].map(
              ([x, y], i) => (
                <rect key={i} x={x} y={y} width="3" height="3" />
              )
            )}
          </g>
          {/* moon */}
          <circle cx="155" cy="425" r="18" fill="#fff" opacity="0.9" />
          <circle cx="150" cy="422" r="14" fill="#3b82f6" />
        </g>

        {/* ===== BOTTOM-RIGHT PANEL: big headline ===== */}
        <g clipPath="url(#hc-br-panel)">
          <rect x="200" y="400" width="280" height="180" fill="#1a0b2e" />
          <rect x="200" y="400" width="280" height="180" fill="url(#hc-speed)" opacity="0.8" />
          <text
            x="220"
            y="466"
            fontFamily="Space Grotesk, Pretendard, sans-serif"
            fontSize="44"
            fontWeight="900"
            fill="white"
            letterSpacing="-1.5"
          >
            FANDOM
          </text>
          <text
            x="220"
            y="512"
            fontFamily="Space Grotesk, Pretendard, sans-serif"
            fontSize="44"
            fontWeight="900"
            fill="url(#hc-pink)"
            letterSpacing="-1.5"
          >
            × STORY
          </text>
          <line x1="220" y1="530" x2="260" y2="530" stroke="white" strokeWidth="2.5" />
          <text
            x="220"
            y="555"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="10"
            fontWeight="700"
            fill="white"
            letterSpacing="4"
            opacity="0.75"
          >
            WEAVUS · CONTENTS
          </text>
        </g>

        {/* panel borders */}
        <g fill="none" stroke="white" strokeOpacity="0.22" strokeWidth="1.5">
          <rect x="20" y="20" width="300" height="360" rx="24" />
          <rect x="336" y="20" width="144" height="170" rx="18" />
          <rect x="336" y="206" width="144" height="174" rx="18" />
          <rect x="200" y="400" width="280" height="180" rx="20" />
          <rect x="20" y="400" width="164" height="180" rx="20" />
        </g>

        {/* ===== onomatopoeia sticker (over main panel) ===== */}
        <g transform="translate(290 340) rotate(-10)">
          <polygon
            points="0,-32 11,-10 34,-10 15,4 23,30 0,15 -23,30 -15,4 -34,-10 -11,-10"
            fill="#ffd1ea"
            stroke="#0a0414"
            strokeWidth="3.5"
          />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="15"
            fontWeight="900"
            fill="#6d28d9"
            letterSpacing="1"
          >
            LIVE!
          </text>
        </g>
      </svg>

      <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-neon-purple/40 blur-2xl" />
    </div>
  );
}
