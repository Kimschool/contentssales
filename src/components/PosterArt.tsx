type PosterKey = "midnight" | "echo" | "villainess" | "neon";

const genreLabel: Record<PosterKey, string> = {
  midnight: "VOL. 01 / ROMANCE",
  echo: "VOL. 02 / IDOL DRAMA",
  villainess: "VOL. 03 / ISEKAI",
  neon: "VOL. 04 / YOUTH"
};

export function PosterArt({ kind, title }: { kind: PosterKey; title: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="400" height="500" fill="#000000" />

      {kind === "midnight" && <MidnightShape />}
      {kind === "echo" && <EchoShape />}
      {kind === "villainess" && <VillainessShape />}
      {kind === "neon" && <NeonShape />}

      <g fontFamily="Inter, sans-serif" fill="#ffffff">
        <text x="30" y="52" fontSize="10" fontWeight="700" letterSpacing="3" opacity="0.7">
          {genreLabel[kind]}
        </text>
        <text x="30" y="420" fontSize="32" fontWeight="900" letterSpacing="-1">
          {splitLine(title)[0]}
        </text>
        {splitLine(title)[1] ? (
          <text x="30" y="458" fontSize="32" fontWeight="900" letterSpacing="-1">
            {splitLine(title)[1]}
          </text>
        ) : null}
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

function MidnightShape() {
  return (
    <g>
      <circle cx="300" cy="170" r="90" fill="#ff1f6a" opacity="0.85" />
      <path d="M 300 80 A 90 90 0 0 0 300 260 A 60 90 0 0 1 300 80" fill="#000000" />
    </g>
  );
}

function EchoShape() {
  return (
    <g>
      <circle cx="290" cy="180" r="70" fill="none" stroke="#ff1f6a" strokeWidth="2" opacity="0.9" />
      <circle cx="290" cy="180" r="40" fill="#ff1f6a" opacity="0.85" />
      <g transform="translate(200 300)" fill="#ff1f6a" opacity="0.7">
        {[30, 55, 80, 60, 40, 70, 45].map((h, i) => (
          <rect key={i} x={i * 14} y={-h} width="6" height={h} rx="1" />
        ))}
      </g>
    </g>
  );
}

function VillainessShape() {
  return (
    <g transform="translate(290 180)">
      <polygon points="0,-70 60,0 0,70 -60,0" fill="#ff1f6a" opacity="0.9" />
      <polygon points="0,-38 32,0 0,38 -32,0" fill="#000000" />
    </g>
  );
}

function NeonShape() {
  return (
    <g transform="translate(290 180)">
      <path
        d="M 0 60 C -70 20 -80 -50 -35 -64 C -12 -70 0 -56 0 -36 C 0 -56 12 -70 35 -64 C 80 -50 70 20 0 60 Z"
        fill="#ff1f6a"
        opacity="0.9"
      />
    </g>
  );
}
