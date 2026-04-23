type PosterKey = "midnight" | "echo" | "villainess" | "neon";

type Palette = {
  bg: [string, string, string];
  accent: string;
  ink: string;
};

const palettes: Record<PosterKey, Palette> = {
  midnight: {
    bg: ["#2a0f5e", "#6d28d9", "#ff3ea5"],
    accent: "#ffd1ea",
    ink: "#ffffff"
  },
  echo: {
    bg: ["#0b1d4d", "#3b82f6", "#a78bfa"],
    accent: "#e0f2fe",
    ink: "#ffffff"
  },
  villainess: {
    bg: ["#3b0a2a", "#9d174d", "#f472b6"],
    accent: "#fde2ef",
    ink: "#fff5fa"
  },
  neon: {
    bg: ["#1a0b2e", "#7c3aed", "#22d3ee"],
    accent: "#e0f7ff",
    ink: "#ffffff"
  }
};

export function PosterArt({ kind, title }: { kind: PosterKey; title: string }) {
  const p = palettes[kind];
  const gid = `poster-${kind}`;

  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.bg[0]} />
          <stop offset="55%" stopColor={p.bg[1]} />
          <stop offset="100%" stopColor={p.bg[2]} />
        </linearGradient>
        <radialGradient id={`${gid}-spot`} cx="30%" cy="20%" r="65%">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${gid}-dot`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill={p.ink} fillOpacity="0.12" />
        </pattern>
      </defs>

      <rect width="400" height="500" fill={`url(#${gid}-bg)`} />
      <rect width="400" height="500" fill={`url(#${gid}-spot)`} />
      <rect width="400" height="500" fill={`url(#${gid}-dot)`} />

      {kind === "midnight" && <MidnightStage ink={p.ink} accent={p.accent} />}
      {kind === "echo" && <EchoOfYou ink={p.ink} accent={p.accent} />}
      {kind === "villainess" && <VillainessNote ink={p.ink} accent={p.accent} />}
      {kind === "neon" && <NeonHeart ink={p.ink} accent={p.accent} />}

      <g fontFamily="Space Grotesk, Pretendard, system-ui, sans-serif" fill={p.ink}>
        <text
          x="24"
          y="455"
          fontSize="11"
          fontWeight="700"
          letterSpacing="4"
          opacity="0.75"
        >
          WEAVUS · CONTENTS
        </text>
        <text
          x="24"
          y="480"
          fontSize="26"
          fontWeight="900"
          letterSpacing="-1"
        >
          {title}
        </text>
      </g>

      {/* horizon vignette */}
      <rect
        x="0"
        y="340"
        width="400"
        height="160"
        fill="url(#fade)"
      />
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MidnightStage({ ink, accent }: { ink: string; accent: string }) {
  return (
    <g>
      {/* moon */}
      <circle cx="120" cy="130" r="60" fill={accent} opacity="0.25" />
      <circle cx="120" cy="130" r="44" fill={ink} opacity="0.12" />
      <circle cx="108" cy="120" r="38" fill={ink} opacity="0.6" />

      {/* stars */}
      {[[260, 60], [300, 110], [340, 70], [240, 170], [350, 200], [280, 230]].map(
        ([x, y], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <path
              d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z"
              fill={ink}
              opacity={0.6 + (i % 3) * 0.1}
            />
          </g>
        )
      )}

      {/* silhouette */}
      <g transform="translate(200 260)">
        <path
          d="M0 0 C -50 -30 -60 -110 -10 -130 C 40 -150 70 -100 50 -60 C 80 -50 90 20 60 60 L -60 60 C -80 40 -60 10 0 0 Z"
          fill={ink}
          opacity="0.82"
        />
        <circle cx="-5" cy="-120" r="22" fill={ink} opacity="0.85" />
      </g>
    </g>
  );
}

function EchoOfYou({ ink, accent }: { ink: string; accent: string }) {
  return (
    <g>
      {/* spotlight cones */}
      <polygon points="120,0 80,300 160,300" fill={accent} opacity="0.18" />
      <polygon points="280,0 240,300 320,300" fill={accent} opacity="0.18" />

      {/* stage */}
      <ellipse cx="200" cy="330" rx="170" ry="26" fill={ink} opacity="0.18" />

      {/* microphone */}
      <g transform="translate(200 240)">
        <rect x="-4" y="0" width="8" height="60" rx="4" fill={ink} opacity="0.85" />
        <rect x="-22" y="60" width="44" height="4" rx="2" fill={ink} opacity="0.6" />
        <rect x="-18" y="-50" width="36" height="56" rx="18" fill={ink} opacity="0.9" />
        <rect x="-12" y="-42" width="24" height="4" rx="2" fill={accent} opacity="0.9" />
        <rect x="-12" y="-34" width="24" height="4" rx="2" fill={accent} opacity="0.7" />
        <rect x="-12" y="-26" width="24" height="4" rx="2" fill={accent} opacity="0.5" />
      </g>

      {/* music notes */}
      <g fill={ink} opacity="0.85" fontFamily="serif" fontSize="44" fontWeight="900">
        <text x="60" y="120">♪</text>
        <text x="310" y="150">♫</text>
        <text x="70" y="220">♬</text>
      </g>
    </g>
  );
}

function VillainessNote({ ink, accent }: { ink: string; accent: string }) {
  return (
    <g>
      {/* crown */}
      <g transform="translate(200 110)">
        <polygon
          points="-50,0 -30,-35 -10,-10 10,-40 30,-10 50,-35 60,0"
          fill={accent}
          opacity="0.9"
        />
        <circle cx="-30" cy="-38" r="5" fill={ink} />
        <circle cx="10" cy="-44" r="6" fill={ink} />
        <circle cx="50" cy="-38" r="5" fill={ink} />
        <rect x="-55" y="0" width="110" height="10" rx="3" fill={accent} />
      </g>

      {/* roses */}
      {[[90, 230], [320, 220], [80, 310], [330, 300]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle cx="0" cy="0" r="20" fill={ink} opacity="0.35" />
          <circle cx="0" cy="0" r="14" fill={accent} opacity="0.7" />
          <circle cx="-4" cy="-4" r="6" fill={ink} opacity="0.3" />
        </g>
      ))}

      {/* silhouette dress */}
      <g transform="translate(200 300)">
        <ellipse cx="0" cy="40" rx="100" ry="60" fill={ink} opacity="0.45" />
        <path
          d="M-40 0 L-60 60 L60 60 L40 0 Z"
          fill={ink}
          opacity="0.6"
        />
        <circle cx="0" cy="-30" r="22" fill={ink} opacity="0.85" />
      </g>
    </g>
  );
}

function NeonHeart({ ink, accent }: { ink: string; accent: string }) {
  return (
    <g>
      {/* city skyline */}
      <g fill={ink} opacity="0.3">
        <rect x="30" y="240" width="40" height="100" />
        <rect x="75" y="200" width="30" height="140" />
        <rect x="110" y="260" width="36" height="80" />
        <rect x="150" y="220" width="26" height="120" />
        <rect x="185" y="180" width="34" height="160" />
        <rect x="225" y="240" width="30" height="100" />
        <rect x="260" y="210" width="36" height="130" />
        <rect x="300" y="250" width="30" height="90" />
        <rect x="335" y="230" width="30" height="110" />
      </g>
      {/* windows */}
      <g fill={accent} opacity="0.85">
        {Array.from({ length: 24 }).map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return (
            <rect
              key={i}
              x={60 + col * 48}
              y={230 + row * 20}
              width="4"
              height="4"
            />
          );
        })}
      </g>

      {/* heart */}
      <g transform="translate(200 150)">
        <path
          d="M0 40 C -60 10 -70 -40 -30 -55 C -10 -60 0 -45 0 -30 C 0 -45 10 -60 30 -55 C 70 -40 60 10 0 40 Z"
          fill={accent}
          stroke={ink}
          strokeWidth="4"
          opacity="0.95"
        />
        <path
          d="M0 40 C -60 10 -70 -40 -30 -55 C -10 -60 0 -45 0 -30 C 0 -45 10 -60 30 -55 C 70 -40 60 10 0 40 Z"
          fill="none"
          stroke={ink}
          strokeWidth="8"
          opacity="0.25"
        />
      </g>
    </g>
  );
}
