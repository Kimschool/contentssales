type PosterKey = "midnight" | "echo" | "villainess" | "neon";

type Palette = {
  bg: [string, string, string];
  skin: string;
  hair: string;
  hairShade: string;
  accent: string;
  ink: string;
};

const palettes: Record<PosterKey, Palette> = {
  midnight: {
    bg: ["#1a0b3d", "#4c1d95", "#ff3ea5"],
    skin: "#ffe3d6",
    hair: "#1a0b2e",
    hairShade: "#4c1d95",
    accent: "#ffd1ea",
    ink: "#ffffff"
  },
  echo: {
    bg: ["#0b1d4d", "#3b82f6", "#a78bfa"],
    skin: "#ffe3d6",
    hair: "#2a0a55",
    hairShade: "#1a1b6e",
    accent: "#7dd3fc",
    ink: "#ffffff"
  },
  villainess: {
    bg: ["#3b0a2a", "#9d174d", "#f472b6"],
    skin: "#ffe9dc",
    hair: "#fef3c7",
    hairShade: "#fbbf24",
    accent: "#fde2ef",
    ink: "#fff5fa"
  },
  neon: {
    bg: ["#0a0b2e", "#7c3aed", "#22d3ee"],
    skin: "#ffe0d4",
    hair: "#ff3ea5",
    hairShade: "#9333ea",
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
        <radialGradient id={`${gid}-spot`} cx="30%" cy="25%" r="65%">
          <stop offset="0%" stopColor={p.accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${gid}-tone`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill={p.ink} fillOpacity="0.18" />
        </pattern>
        <pattern id={`${gid}-speed`} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
          <rect width="1.5" height="12" fill={p.ink} fillOpacity="0.15" />
        </pattern>
        <linearGradient id={`${gid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </linearGradient>
        <clipPath id={`${gid}-clip`}>
          <rect width="400" height="500" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${gid}-clip)`}>
        <rect width="400" height="500" fill={`url(#${gid}-bg)`} />
        <rect width="400" height="500" fill={`url(#${gid}-spot)`} />

        {kind === "midnight" && <MidnightScene p={p} gid={gid} />}
        {kind === "echo" && <EchoScene p={p} gid={gid} />}
        {kind === "villainess" && <VillainessScene p={p} gid={gid} />}
        {kind === "neon" && <NeonScene p={p} gid={gid} />}

        {/* bottom fade + title */}
        <rect x="0" y="340" width="400" height="160" fill={`url(#${gid}-fade)`} />
        <g fontFamily="Space Grotesk, Pretendard, system-ui, sans-serif" fill={p.ink}>
          <text x="24" y="455" fontSize="11" fontWeight="700" letterSpacing="4" opacity="0.75">
            WEAVUS · CONTENTS
          </text>
          <text x="24" y="482" fontSize="26" fontWeight="900" letterSpacing="-1">
            {title}
          </text>
        </g>
      </g>
    </svg>
  );
}

/* ---------- MIDNIGHT STAGE — romance/fantasy heroine, moonlit ---------- */
function MidnightScene({ p, gid }: { p: Palette; gid: string }) {
  return (
    <g>
      {/* moon + stars */}
      <circle cx="100" cy="80" r="54" fill={p.accent} opacity="0.22" />
      <circle cx="92" cy="72" r="40" fill={p.ink} opacity="0.92" />
      <circle cx="82" cy="68" r="36" fill={p.bg[1]} />
      {[
        [260, 50],
        [310, 90],
        [350, 55],
        [245, 150],
        [355, 175]
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`} fill={p.ink} opacity={0.7 + (i % 3) * 0.1}>
          <path d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z" />
        </g>
      ))}

      {/* halftone screentone */}
      <rect width="400" height="260" fill={`url(#${gid}-tone)`} opacity="0.9" />

      {/* character — flowing hair girl, 3/4 view */}
      <g transform="translate(200 250)">
        {/* back hair (long, flowing) */}
        <path
          d="M -95 -90 C -120 -30 -130 80 -100 160 L 100 160 C 130 80 120 -30 95 -90 C 75 -145 40 -168 0 -170 C -45 -168 -80 -145 -95 -90 Z"
          fill={p.hairShade}
        />
        {/* neck */}
        <path d="M -18 60 L -18 95 L 18 95 L 18 60 Z" fill={p.skin} />
        {/* collarbone shade */}
        <path d="M -40 95 C -20 110 20 110 40 95 L 40 140 L -40 140 Z" fill={p.hair} opacity="0.85" />
        {/* face */}
        <ellipse cx="0" cy="10" rx="62" ry="78" fill={p.skin} />
        {/* hair front (bangs) */}
        <path
          d="M -60 -40 C -50 -90 -20 -105 0 -105 C 25 -105 55 -85 62 -40 C 55 -55 35 -50 20 -38 C 10 -42 -5 -40 -15 -30 C -30 -40 -48 -45 -60 -40 Z"
          fill={p.hair}
        />
        {/* side hair strands */}
        <path d="M -62 -40 C -75 10 -80 80 -60 130 L -40 130 C -45 80 -45 20 -35 -20 Z" fill={p.hair} />
        <path d="M 62 -40 C 75 10 80 80 60 130 L 40 130 C 45 80 45 20 35 -20 Z" fill={p.hair} />
        {/* eyes — big manga style */}
        <g>
          {/* eye whites */}
          <ellipse cx="-22" cy="10" rx="12" ry="15" fill="#fff" />
          <ellipse cx="22" cy="10" rx="12" ry="15" fill="#fff" />
          {/* iris */}
          <ellipse cx="-22" cy="12" rx="9" ry="12" fill={p.bg[2]} />
          <ellipse cx="22" cy="12" rx="9" ry="12" fill={p.bg[2]} />
          {/* pupil */}
          <ellipse cx="-22" cy="13" rx="4" ry="7" fill="#0a0414" />
          <ellipse cx="22" cy="13" rx="4" ry="7" fill="#0a0414" />
          {/* highlights */}
          <circle cx="-19" cy="7" r="3" fill="#fff" />
          <circle cx="25" cy="7" r="3" fill="#fff" />
          <circle cx="-24" cy="17" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="20" cy="17" r="1.5" fill="#fff" opacity="0.8" />
          {/* lashes */}
          <path d="M -34 -2 Q -22 -6 -10 -2" stroke="#0a0414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 10 -2 Q 22 -6 34 -2" stroke="#0a0414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* brows */}
          <path d="M -34 -14 Q -22 -20 -10 -14" stroke={p.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 10 -14 Q 22 -20 34 -14" stroke={p.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        {/* nose */}
        <path d="M 0 22 Q -3 34 0 38" stroke="#d9a48a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
        {/* blush */}
        <ellipse cx="-28" cy="36" rx="9" ry="5" fill="#ff8fb6" opacity="0.55" />
        <ellipse cx="28" cy="36" rx="9" ry="5" fill="#ff8fb6" opacity="0.55" />
        {/* lips */}
        <path d="M -9 52 Q 0 58 9 52 Q 5 50 0 52 Q -5 50 -9 52 Z" fill="#d94477" />
      </g>

      {/* sparkle accents */}
      <g fill={p.ink} opacity="0.9">
        <path d="M 320 280 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 z" />
        <path d="M 70 300 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 z" />
      </g>
    </g>
  );
}

/* ---------- ECHO OF YOU — idol boy with mic, stage lights ---------- */
function EchoScene({ p, gid }: { p: Palette; gid: string }) {
  return (
    <g>
      {/* spotlight cones */}
      <polygon points="100,-20 40,400 160,400" fill={p.accent} opacity="0.16" />
      <polygon points="300,-20 240,400 360,400" fill={p.accent} opacity="0.16" />
      {/* speed lines bg */}
      <rect width="400" height="500" fill={`url(#${gid}-speed)`} opacity="0.5" />

      {/* character — boy idol, singing */}
      <g transform="translate(200 255)">
        {/* back silhouette / stage shadow */}
        <ellipse cx="0" cy="165" rx="130" ry="18" fill="#000" opacity="0.35" />
        {/* hair back */}
        <path d="M -70 -90 C -88 -20 -82 60 -60 130 L 60 130 C 82 60 88 -20 70 -90 C 50 -138 20 -150 0 -150 C -20 -150 -50 -138 -70 -90 Z" fill={p.hairShade} />
        {/* neck */}
        <rect x="-14" y="50" width="28" height="35" fill={p.skin} />
        {/* jacket */}
        <path d="M -70 85 L -90 170 L 90 170 L 70 85 C 45 95 20 100 0 100 C -20 100 -45 95 -70 85 Z" fill={p.bg[0]} />
        <path d="M -30 85 L -20 170 L 20 170 L 30 85 Z" fill={p.ink} />
        {/* collar accents */}
        <polygon points="-70,85 -50,90 -40,120 -60,110" fill={p.accent} />
        <polygon points="70,85 50,90 40,120 60,110" fill={p.accent} />
        {/* face */}
        <ellipse cx="0" cy="0" rx="58" ry="70" fill={p.skin} />
        {/* spiky modern hair */}
        <path
          d="M -60 -30 C -55 -85 -30 -110 0 -110 C 30 -110 55 -90 60 -30 C 50 -48 30 -55 15 -42 C 5 -55 -5 -55 -15 -42 C -30 -55 -48 -48 -60 -30 Z"
          fill={p.hair}
        />
        {/* earrings */}
        <circle cx="-55" cy="6" r="3" fill={p.accent} />
        <circle cx="55" cy="6" r="3" fill={p.accent} />
        {/* eyes — sharper, masculine */}
        <g>
          <ellipse cx="-20" cy="5" rx="11" ry="10" fill="#fff" />
          <ellipse cx="20" cy="5" rx="11" ry="10" fill="#fff" />
          <ellipse cx="-20" cy="7" rx="8" ry="8" fill={p.bg[1]} />
          <ellipse cx="20" cy="7" rx="8" ry="8" fill={p.bg[1]} />
          <ellipse cx="-20" cy="8" rx="4" ry="5" fill="#0a0414" />
          <ellipse cx="20" cy="8" rx="4" ry="5" fill="#0a0414" />
          <circle cx="-17" cy="4" r="2.5" fill="#fff" />
          <circle cx="23" cy="4" r="2.5" fill="#fff" />
          {/* brows — angled */}
          <path d="M -32 -12 L -10 -16" stroke={p.hair} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 32 -12 L 10 -16" stroke={p.hair} strokeWidth="3.5" strokeLinecap="round" />
        </g>
        {/* nose */}
        <path d="M 0 18 Q -2 26 2 30" stroke="#b88069" strokeWidth="1.8" fill="none" opacity="0.7" />
        {/* mouth — singing */}
        <ellipse cx="0" cy="44" rx="5" ry="8" fill="#6e2a2a" />
        <ellipse cx="0" cy="41" rx="4" ry="4" fill="#d94477" />
        {/* microphone in hand */}
        <g transform="translate(80 70) rotate(25)">
          <rect x="-8" y="0" width="16" height="70" rx="4" fill="#1a0b2e" stroke={p.ink} strokeWidth="2" />
          <rect x="-14" y="-36" width="28" height="46" rx="14" fill="#3a3a3a" stroke={p.ink} strokeWidth="2" />
          {/* grill holes */}
          <g fill={p.ink} opacity="0.5">
            <circle cx="-6" cy="-22" r="1.2" />
            <circle cx="0" cy="-22" r="1.2" />
            <circle cx="6" cy="-22" r="1.2" />
            <circle cx="-6" cy="-14" r="1.2" />
            <circle cx="0" cy="-14" r="1.2" />
            <circle cx="6" cy="-14" r="1.2" />
            <circle cx="-6" cy="-6" r="1.2" />
            <circle cx="0" cy="-6" r="1.2" />
            <circle cx="6" cy="-6" r="1.2" />
          </g>
          <rect x="-4" y="40" width="8" height="4" fill={p.accent} />
        </g>
      </g>

      {/* SFX text */}
      <g transform="translate(60 90) rotate(-8)">
        <text fontFamily="Space Grotesk, sans-serif" fontSize="36" fontWeight="900" fill={p.accent} stroke={p.ink} strokeWidth="2" letterSpacing="2">
          LIVE!
        </text>
      </g>
      {/* music notes */}
      <g fill={p.ink} opacity="0.85" fontFamily="serif" fontSize="32" fontWeight="900">
        <text x="330" y="90">♪</text>
        <text x="340" y="210">♫</text>
      </g>
    </g>
  );
}

/* ---------- VILLAINESS NOTE — blonde villainess with crown, roses ---------- */
function VillainessScene({ p, gid }: { p: Palette; gid: string }) {
  return (
    <g>
      {/* radial halftone */}
      <rect width="400" height="500" fill={`url(#${gid}-tone)`} opacity="0.85" />

      {/* back roses pattern */}
      {[[60, 90], [340, 100], [40, 380], [360, 360]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="22" fill="#7a0f3a" opacity="0.6" />
          <circle r="15" fill={p.accent} opacity="0.9" />
          <circle r="8" fill="#7a0f3a" opacity="0.8" />
          <path d="M -5 -5 L 5 5 M 5 -5 L -5 5" stroke="#4a0520" strokeWidth="1.5" />
        </g>
      ))}

      {/* character — villainess with crown */}
      <g transform="translate(200 260)">
        {/* long hair back */}
        <path
          d="M -100 -80 C -130 0 -135 120 -110 200 L 110 200 C 135 120 130 0 100 -80 C 75 -145 35 -160 0 -160 C -35 -160 -75 -145 -100 -80 Z"
          fill={p.hairShade}
        />
        {/* dress / shoulders */}
        <path d="M -90 80 L -110 200 L 110 200 L 90 80 C 60 100 30 110 0 110 C -30 110 -60 100 -90 80 Z" fill="#7a0f3a" />
        <path d="M -90 80 C -80 90 -50 70 -40 90 M 90 80 C 80 90 50 70 40 90" stroke={p.accent} strokeWidth="2" fill="none" />
        {/* neck */}
        <rect x="-16" y="55" width="32" height="32" fill={p.skin} />
        {/* necklace */}
        <path d="M -30 85 Q 0 102 30 85" stroke={p.accent} strokeWidth="2" fill="none" />
        <circle cx="0" cy="100" r="5" fill="#ff3ea5" stroke={p.accent} strokeWidth="1.5" />
        {/* face */}
        <ellipse cx="0" cy="5" rx="60" ry="76" fill={p.skin} />
        {/* hair front — side sweep */}
        <path
          d="M -62 -30 C -60 -80 -30 -105 0 -105 C 30 -105 60 -85 62 -30 C 45 -40 25 -40 10 -30 C 5 -40 -5 -40 -10 -30 C -25 -40 -45 -40 -62 -30 Z"
          fill={p.hair}
        />
        {/* crown */}
        <g transform="translate(0 -110)">
          <polygon
            points="-55,0 -35,-30 -15,-8 0,-38 15,-8 35,-30 55,0"
            fill="#fbbf24"
            stroke="#a16207"
            strokeWidth="2"
          />
          <rect x="-58" y="-2" width="116" height="10" rx="2" fill="#fbbf24" stroke="#a16207" strokeWidth="2" />
          <circle cx="-35" cy="-30" r="4" fill="#ff3ea5" />
          <circle cx="0" cy="-38" r="5" fill="#22d3ee" />
          <circle cx="35" cy="-30" r="4" fill="#ff3ea5" />
        </g>
        {/* eyes — sharp, haughty */}
        <g>
          <ellipse cx="-22" cy="6" rx="12" ry="12" fill="#fff" />
          <ellipse cx="22" cy="6" rx="12" ry="12" fill="#fff" />
          <ellipse cx="-22" cy="8" rx="9" ry="9" fill="#9d174d" />
          <ellipse cx="22" cy="8" rx="9" ry="9" fill="#9d174d" />
          <ellipse cx="-22" cy="9" rx="4" ry="5" fill="#0a0414" />
          <ellipse cx="22" cy="9" rx="4" ry="5" fill="#0a0414" />
          <circle cx="-19" cy="5" r="2.5" fill="#fff" />
          <circle cx="25" cy="5" r="2.5" fill="#fff" />
          {/* lashes long */}
          <path d="M -34 -1 Q -22 -7 -10 -1 M -34 -1 L -36 -6 M -30 -5 L -31 -10 M -26 -7 L -26 -12" stroke="#0a0414" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 10 -1 Q 22 -7 34 -1 M 34 -1 L 36 -6 M 30 -5 L 31 -10 M 26 -7 L 26 -12" stroke="#0a0414" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* slanted brows */}
          <path d="M -35 -18 L -10 -22" stroke="#8b6914" strokeWidth="3" strokeLinecap="round" />
          <path d="M 35 -18 L 10 -22" stroke="#8b6914" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* nose */}
        <path d="M 0 18 Q -3 30 1 34" stroke="#b88069" strokeWidth="1.8" fill="none" opacity="0.7" />
        {/* smirk */}
        <path d="M -10 48 Q 0 56 14 50" stroke="#7a0f3a" strokeWidth="2.5" fill="#d94477" strokeLinecap="round" />
        <path d="M -10 48 Q 0 54 14 50 L 14 52 Q 0 56 -10 50 Z" fill="#d94477" />
        {/* beauty mark */}
        <circle cx="18" cy="60" r="1.5" fill="#4a0520" />
      </g>

      {/* SFX */}
      <g transform="translate(285 140) rotate(15)">
        <text fontFamily="Space Grotesk, sans-serif" fontSize="24" fontWeight="900" fill={p.accent} letterSpacing="2">
          HMPH!
        </text>
      </g>
    </g>
  );
}

/* ---------- NEON HEART — girl with pink hair in neon city ---------- */
function NeonScene({ p, gid }: { p: Palette; gid: string }) {
  return (
    <g>
      {/* city skyline */}
      <g fill={p.bg[0]} opacity="0.75">
        <rect x="0" y="180" width="60" height="180" />
        <rect x="55" y="140" width="40" height="220" />
        <rect x="92" y="200" width="50" height="160" />
        <rect x="138" y="160" width="38" height="200" />
        <rect x="220" y="170" width="48" height="190" />
        <rect x="265" y="140" width="42" height="220" />
        <rect x="305" y="200" width="50" height="160" />
        <rect x="350" y="170" width="50" height="190" />
      </g>
      {/* windows glowing */}
      <g fill={p.accent} opacity="0.95">
        {Array.from({ length: 40 }).map((_, i) => {
          const cols = [10, 22, 60, 100, 110, 145, 160, 228, 240, 275, 290, 315, 330, 360, 380];
          const x = cols[i % cols.length];
          const y = 160 + Math.floor(i / cols.length) * 28;
          return <rect key={i} x={x} y={y} width="4" height="4" />;
        })}
      </g>
      {/* neon signs */}
      <g transform="translate(80 120)" fontFamily="Space Grotesk, sans-serif" fontWeight="900">
        <text fontSize="22" fill={p.hair} stroke={p.ink} strokeWidth="1">NEON</text>
      </g>
      <g transform="translate(310 130)" fontFamily="Space Grotesk, sans-serif" fontWeight="900">
        <text fontSize="20" fill={p.accent}>♡</text>
      </g>

      {/* central heart glow */}
      <g transform="translate(200 180)" opacity="0.35">
        <circle r="85" fill={p.hair} />
      </g>

      {/* character — short pink hair girl, looking at camera */}
      <g transform="translate(200 260)">
        {/* jacket shoulders */}
        <path d="M -85 100 L -105 210 L 105 210 L 85 100 C 55 115 25 120 0 120 C -25 120 -55 115 -85 100 Z" fill={p.hair} />
        <path d="M -50 100 L -45 210 M 50 100 L 45 210" stroke={p.ink} strokeWidth="2" opacity="0.6" />
        {/* zipper */}
        <line x1="0" y1="110" x2="0" y2="210" stroke={p.ink} strokeWidth="2" />
        {/* neck */}
        <rect x="-14" y="70" width="28" height="35" fill={p.skin} />
        {/* face */}
        <ellipse cx="0" cy="15" rx="58" ry="72" fill={p.skin} />
        {/* short bob hair with bangs */}
        <path
          d="M -62 -20 C -66 -72 -35 -100 0 -100 C 35 -100 66 -80 62 -20 C 60 -30 40 -40 20 -32 C 10 -40 -10 -40 -20 -32 C -40 -40 -60 -30 -62 -20 Z"
          fill={p.hair}
        />
        {/* side hair tuft */}
        <path d="M -62 -20 C -70 10 -70 50 -60 80 L -40 80 C -45 40 -45 10 -55 -10 Z" fill={p.hair} />
        <path d="M 62 -20 C 70 10 70 50 60 80 L 40 80 C 45 40 45 10 55 -10 Z" fill={p.hair} />
        {/* headphones */}
        <path d="M -60 -30 C -80 -50 -80 -80 -40 -95" stroke={p.ink} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 60 -30 C 80 -50 80 -80 40 -95" stroke={p.ink} strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="-60" cy="-10" rx="14" ry="18" fill={p.accent} stroke={p.ink} strokeWidth="3" />
        <ellipse cx="60" cy="-10" rx="14" ry="18" fill={p.accent} stroke={p.ink} strokeWidth="3" />
        <circle cx="-60" cy="-10" r="4" fill={p.hair} />
        <circle cx="60" cy="-10" r="4" fill={p.hair} />
        {/* big eyes */}
        <g>
          <ellipse cx="-22" cy="15" rx="13" ry="16" fill="#fff" />
          <ellipse cx="22" cy="15" rx="13" ry="16" fill="#fff" />
          <ellipse cx="-22" cy="17" rx="10" ry="13" fill={p.bg[2]} />
          <ellipse cx="22" cy="17" rx="10" ry="13" fill={p.bg[2]} />
          <ellipse cx="-22" cy="18" rx="4.5" ry="7" fill="#0a0414" />
          <ellipse cx="22" cy="18" rx="4.5" ry="7" fill="#0a0414" />
          <circle cx="-19" cy="12" r="3.5" fill="#fff" />
          <circle cx="25" cy="12" r="3.5" fill="#fff" />
          <circle cx="-25" cy="23" r="2" fill="#fff" opacity="0.9" />
          <circle cx="19" cy="23" r="2" fill="#fff" opacity="0.9" />
          <path d="M -34 3 Q -22 -2 -10 3" stroke="#0a0414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 10 3 Q 22 -2 34 3" stroke="#0a0414" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M -34 -8 Q -22 -14 -10 -8" stroke={p.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 10 -8 Q 22 -14 34 -8" stroke={p.hair} strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
        {/* blush */}
        <ellipse cx="-30" cy="42" rx="10" ry="5" fill="#ff8fb6" opacity="0.7" />
        <ellipse cx="30" cy="42" rx="10" ry="5" fill="#ff8fb6" opacity="0.7" />
        {/* small smile */}
        <path d="M -8 58 Q 0 64 8 58" stroke="#c0366a" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* nose */}
        <path d="M 0 28 Q -2 40 2 44" stroke="#b88069" strokeWidth="1.5" fill="none" opacity="0.7" />
      </g>

      {/* heart sticker */}
      <g transform="translate(85 220)">
        <path
          d="M 0 20 C -30 5 -35 -20 -15 -28 C -5 -30 0 -22 0 -15 C 0 -22 5 -30 15 -28 C 35 -20 30 5 0 20 Z"
          fill={p.hair}
          stroke={p.ink}
          strokeWidth="3"
        />
      </g>
    </g>
  );
}
