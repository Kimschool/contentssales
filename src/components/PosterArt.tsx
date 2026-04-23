type PosterKey = "midnight" | "echo" | "villainess" | "neon";

type Palette = {
  bg: string;
  bg2: string;
  ink: string;
  accent: string;
  subdued: string;
};

const palettes: Record<PosterKey, Palette> = {
  midnight: { bg: "#0b3d55", bg2: "#156c91", ink: "#ffffff", accent: "#d0ecf4", subdued: "#72bfd8" },
  echo:       { bg: "#1f86ad", bg2: "#45a3c5", ink: "#ffffff", accent: "#eaf7fb", subdued: "#a5d9e9" },
  villainess: { bg: "#082a3b", bg2: "#0f5473", ink: "#ffffff", accent: "#d0ecf4", subdued: "#72bfd8" },
  neon:       { bg: "#156c91", bg2: "#1f86ad", ink: "#ffffff", accent: "#d0ecf4", subdued: "#45a3c5" }
};

const genreLabel: Record<PosterKey, string> = {
  midnight: "VOL. 01 / ROMANCE",
  echo: "VOL. 02 / IDOL DRAMA",
  villainess: "VOL. 03 / ISEKAI",
  neon: "VOL. 04 / YOUTH"
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
          <stop offset="0%" stopColor={p.bg} />
          <stop offset="100%" stopColor={p.bg2} />
        </linearGradient>
        <pattern id={`${gid}-tone`} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill={p.accent} fillOpacity="0.18" />
        </pattern>
      </defs>

      <rect width="400" height="500" fill={`url(#${gid}-bg)`} />
      <rect width="400" height="500" fill={`url(#${gid}-tone)`} />

      {kind === "midnight" && <MidnightShape p={p} />}
      {kind === "echo" && <EchoShape p={p} />}
      {kind === "villainess" && <VillainessShape p={p} />}
      {kind === "neon" && <NeonShape p={p} />}

      {/* vertical rule */}
      <line x1="30" y1="60" x2="30" y2="440" stroke={p.ink} strokeOpacity="0.35" strokeWidth="1" />

      {/* vol number — rotated */}
      <g
        transform="translate(370 70) rotate(90)"
        fontFamily="Pretendard, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="4"
        fill={p.ink}
        opacity="0.7"
      >
        <text>{genreLabel[kind]}</text>
      </g>

      {/* title block */}
      <g fontFamily="Pretendard, sans-serif" fill={p.ink}>
        <text x="50" y="80" fontSize="11" fontWeight="700" letterSpacing="4" opacity="0.7">
          WEAVUS STUDIO · WEBTOON
        </text>
        <text x="50" y="200" fontSize="48" fontWeight="900" letterSpacing="-1.5">
          {splitLine(title)[0]}
        </text>
        {splitLine(title)[1] ? (
          <text x="50" y="248" fontSize="48" fontWeight="900" letterSpacing="-1.5">
            {splitLine(title)[1]}
          </text>
        ) : null}
        <line x1="50" y1="275" x2="110" y2="275" stroke={p.ink} strokeWidth="2" />
        <text x="50" y="300" fontSize="13" fontWeight="600" letterSpacing="1" opacity="0.85">
          A WEAVUS ORIGINAL
        </text>
      </g>

      {/* bottom meta */}
      <g fontFamily="Pretendard, sans-serif" fill={p.ink}>
        <text x="50" y="440" fontSize="10" fontWeight="700" letterSpacing="3" opacity="0.6">
          ISSUE · 01
        </text>
        <text x="50" y="460" fontSize="10" fontWeight="600" letterSpacing="2" opacity="0.5">
          © WEAVUS CONTENTS
        </text>
      </g>
    </svg>
  );
}

function splitLine(title: string): [string, string?] {
  const words = title.split(" ");
  if (words.length <= 1 || title.length < 10) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

function MidnightShape({ p }: { p: Palette }) {
  return (
    <g>
      {/* large moon circle */}
      <circle cx="340" cy="130" r="70" fill={p.accent} opacity="0.18" />
      <circle cx="340" cy="130" r="48" fill="none" stroke={p.accent} strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="340" cy="130" r="28" fill="none" stroke={p.accent} strokeOpacity="0.5" strokeWidth="1" />
      {/* thin stars */}
      {[[310, 220], [360, 300], [310, 380], [370, 400]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`} stroke={p.accent} strokeWidth="1" opacity="0.6">
          <line x1="-6" y1="0" x2="6" y2="0" />
          <line x1="0" y1="-6" x2="0" y2="6" />
        </g>
      ))}
      {/* bottom wave */}
      <path d="M 0 420 Q 100 395 200 420 T 400 420 L 400 500 L 0 500 Z" fill={p.subdued} opacity="0.25" />
    </g>
  );
}

function EchoShape({ p }: { p: Palette }) {
  return (
    <g>
      {/* equalizer bars */}
      <g transform="translate(280 340)" fill={p.accent}>
        {[40, 70, 100, 80, 55, 95, 60, 85, 45].map((h, i) => (
          <rect key={i} x={i * 12} y={-h} width="8" height={h} opacity="0.75" rx="1" />
        ))}
      </g>
      {/* circle */}
      <circle cx="330" cy="130" r="60" fill="none" stroke={p.accent} strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="330" cy="130" r="30" fill={p.accent} opacity="0.2" />
      <text x="330" y="138" textAnchor="middle" fontFamily="Pretendard, sans-serif" fontSize="28" fontWeight="900" fill={p.accent}>
        ♪
      </text>
    </g>
  );
}

function VillainessShape({ p }: { p: Palette }) {
  return (
    <g>
      {/* crown diamond */}
      <g transform="translate(340 120)" stroke={p.accent} strokeWidth="1.5" fill="none">
        <polygon points="0,-40 30,0 0,40 -30,0" opacity="0.7" />
        <polygon points="0,-22 16,0 0,22 -16,0" fill={p.accent} fillOpacity="0.2" />
        <line x1="-40" y1="0" x2="40" y2="0" opacity="0.4" />
        <line x1="0" y1="-50" x2="0" y2="50" opacity="0.4" />
      </g>
      {/* rose outlines */}
      {[[320, 320], [360, 380], [340, 420]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`} stroke={p.accent} strokeWidth="1.2" fill="none" opacity="0.55">
          <circle r="14" />
          <circle r="9" />
          <circle r="5" />
        </g>
      ))}
    </g>
  );
}

function NeonShape({ p }: { p: Palette }) {
  return (
    <g>
      {/* heart outline */}
      <g transform="translate(330 140)" stroke={p.accent} strokeWidth="2" fill="none" opacity="0.7">
        <path d="M 0 40 C -50 12 -58 -32 -25 -46 C -8 -50 0 -38 0 -24 C 0 -38 8 -50 25 -46 C 58 -32 50 12 0 40 Z" />
      </g>
      {/* city skyline bottom */}
      <g transform="translate(0 410)" fill={p.accent} opacity="0.28">
        <rect x="40" y="20" width="30" height="70" />
        <rect x="72" y="0" width="24" height="90" />
        <rect x="98" y="30" width="28" height="60" />
        <rect x="128" y="10" width="22" height="80" />
        <rect x="220" y="20" width="30" height="70" />
        <rect x="252" y="-10" width="24" height="100" />
        <rect x="278" y="30" width="28" height="60" />
        <rect x="308" y="10" width="22" height="80" />
        <rect x="332" y="20" width="26" height="70" />
      </g>
      <g fill={p.accent} opacity="0.9">
        <rect x="50" y="440" width="3" height="3" />
        <rect x="80" y="420" width="3" height="3" />
        <rect x="110" y="450" width="3" height="3" />
        <rect x="140" y="430" width="3" height="3" />
        <rect x="230" y="440" width="3" height="3" />
        <rect x="260" y="420" width="3" height="3" />
        <rect x="290" y="450" width="3" height="3" />
        <rect x="340" y="440" width="3" height="3" />
      </g>
    </g>
  );
}
