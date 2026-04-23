import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const titleLines = dict.hero.title.split("\n");

  return (
    <section className="relative overflow-hidden bg-brand-500 text-white">
      {/* subtle ray pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(110deg, #ffffff 0 2px, transparent 2px 14px)"
        }}
      />
      {/* bottom fade to white for seamless next-section handoff */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/20" />

      <Container className="relative">
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.2em]">
              {dict.hero.eyebrow}
            </div>

            <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`${base}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-ink-50"
              >
                {dict.hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/20 pt-8">
              {dict.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroPanel />
        </div>
      </Container>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-sm justify-self-center lg:max-w-none lg:justify-self-end">
      <div className="absolute inset-0 rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(8,42,59,0.45)]" />

      <svg
        viewBox="0 0 400 480"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <pattern id="hero-tone" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="#156c91" fillOpacity="0.35" />
          </pattern>
          <clipPath id="hero-clip">
            <rect x="20" y="20" width="360" height="440" rx="12" />
          </clipPath>
        </defs>

        <g clipPath="url(#hero-clip)">
          {/* background */}
          <rect x="20" y="20" width="360" height="440" fill="#eaf7fb" />
          {/* halftone accent */}
          <circle cx="300" cy="120" r="140" fill="url(#hero-tone)" />

          {/* soft band */}
          <rect x="20" y="300" width="360" height="160" fill="#d0ecf4" />

          {/* character — bust portrait, single-tone */}
          <g transform="translate(200 260)">
            {/* hair back */}
            <path
              d="M -100 -70 C -125 0 -120 100 -100 160 L 100 160 C 120 100 125 0 100 -70 C 80 -130 45 -150 0 -152 C -45 -150 -80 -130 -100 -70 Z"
              fill="#0f5473"
            />
            {/* neck */}
            <rect x="-18" y="55" width="36" height="32" fill="#ffe3d6" />
            {/* shoulders / blouse */}
            <path
              d="M -80 85 L -100 170 L 100 170 L 80 85 C 50 100 25 108 0 108 C -25 108 -50 100 -80 85 Z"
              fill="#1f86ad"
            />
            <path d="M -40 85 L -30 170 L 30 170 L 40 85 Z" fill="#ffffff" />
            {/* face */}
            <ellipse cx="0" cy="0" rx="62" ry="76" fill="#ffe3d6" />
            {/* bangs */}
            <path
              d="M -62 -40 C -55 -90 -25 -108 0 -108 C 25 -108 55 -90 62 -40 C 52 -55 32 -52 18 -40 C 8 -50 -8 -50 -18 -40 C -32 -52 -52 -55 -62 -40 Z"
              fill="#0f5473"
            />
            <path d="M -62 -40 C -72 10 -78 80 -62 130 L -44 130 C -48 80 -50 20 -38 -22 Z" fill="#0f5473" />
            <path d="M 62 -40 C 72 10 78 80 62 130 L 44 130 C 48 80 50 20 38 -22 Z" fill="#0f5473" />
            {/* eyes */}
            <g>
              <ellipse cx="-22" cy="8" rx="13" ry="16" fill="#fff" />
              <ellipse cx="22" cy="8" rx="13" ry="16" fill="#fff" />
              <ellipse cx="-22" cy="10" rx="10" ry="13" fill="#1f86ad" />
              <ellipse cx="22" cy="10" rx="10" ry="13" fill="#1f86ad" />
              <ellipse cx="-22" cy="11" rx="4" ry="7" fill="#0c141f" />
              <ellipse cx="22" cy="11" rx="4" ry="7" fill="#0c141f" />
              <circle cx="-19" cy="5" r="3" fill="#fff" />
              <circle cx="25" cy="5" r="3" fill="#fff" />
              <path d="M -34 -3 Q -22 -8 -10 -3" stroke="#0c141f" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              <path d="M 10 -3 Q 22 -8 34 -3" stroke="#0c141f" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              <path d="M -34 -16 Q -22 -22 -10 -16" stroke="#0f5473" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 10 -16 Q 22 -22 34 -16" stroke="#0f5473" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>
            {/* nose */}
            <path d="M 0 22 Q -3 34 1 38" stroke="#c79a83" strokeWidth="1.8" fill="none" opacity="0.8" strokeLinecap="round" />
            {/* blush */}
            <ellipse cx="-30" cy="40" rx="10" ry="5" fill="#f7a8a8" opacity="0.55" />
            <ellipse cx="30" cy="40" rx="10" ry="5" fill="#f7a8a8" opacity="0.55" />
            {/* lips */}
            <path d="M -9 54 Q 0 60 9 54" stroke="#b55a6a" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* badge */}
        <g transform="translate(40 40)">
          <rect width="110" height="28" rx="14" fill="#ffffff" />
          <text
            x="55"
            y="19"
            textAnchor="middle"
            fontFamily="Pretendard, sans-serif"
            fontSize="11"
            fontWeight="800"
            fill="#0f5473"
            letterSpacing="2"
          >
            EPISODE · 01
          </text>
        </g>
      </svg>
    </div>
  );
}
