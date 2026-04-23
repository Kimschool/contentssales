import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const titleLines = dict.hero.title.split("\n");

  return (
    <section className="relative overflow-hidden bg-brand-500 text-ink-900">
      {/* soft diagonal stripes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(110deg, #171c25 0 2px, transparent 2px 18px)"
        }}
      />
      {/* subtle dot halftone */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(#171c25 0.9px, transparent 0.9px)",
          backgroundSize: "22px 22px"
        }}
      />

      {/* corner crop marks */}
      <CornerMarks />

      <Container className="relative">
        {/* top micro-label row */}
        <div className="flex items-center justify-between pt-8 text-[11px] font-bold tracking-[0.3em] text-ink-900/75">
          <span>WEAVUS · CONTENTS SALES</span>
          <span className="hidden sm:inline">ISSUE No.01 / 2026</span>
        </div>

        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-900/25 bg-white/60 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-ink-900">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-ink-900/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink-900" />
              </span>
              {dict.hero.eyebrow}
            </div>

            <h1 className="font-display text-4xl font-black leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[60px]">
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-800 sm:text-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`${base}/contact`}
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
              >
                {dict.hero.ctaPrimary}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/35 bg-white/40 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-white/70"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-ink-900/20 pt-8">
              {dict.hero.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={
                    i !== 0 ? "border-l border-ink-900/15 pl-4" : ""
                  }
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-700">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroPanel />
        </div>

        {/* scroll hint */}
        <div className="pb-6 flex justify-center">
          <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-ink-900/70">
            <span>SCROLL</span>
            <span aria-hidden className="inline-block h-4 w-px animate-pulse bg-ink-900/60" />
            <span aria-hidden>↓</span>
          </div>
        </div>
      </Container>

      {/* bottom scalloped divider */}
      <div aria-hidden className="pointer-events-none">
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="block h-5 w-full text-white"
        >
          <path d="M0,0 L1440,0 L1440,20 Q720,60 0,20 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

function CornerMarks() {
  const mark =
    "pointer-events-none absolute h-4 w-4 border-ink-900/40";
  return (
    <>
      <span className={`${mark} left-4 top-4 border-l border-t`} />
      <span className={`${mark} right-4 top-4 border-r border-t`} />
      <span className={`${mark} left-4 bottom-10 border-l border-b`} />
      <span className={`${mark} right-4 bottom-10 border-r border-b`} />
    </>
  );
}

function HeroPanel() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-sm justify-self-center lg:max-w-none lg:justify-self-end">
      {/* offset decoration layer */}
      <div
        aria-hidden
        className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-ink-900/80"
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(11,16,25,0.45)]">
        <Image
          src="/portfolio/main.png"
          alt="WEAVUS main visual"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover transition duration-700 hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-brand-700 shadow-sm">
          EPISODE · 01
        </div>
        {/* film strip border hint */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(23,28,37,0) 0%, rgba(23,28,37,0.35) 100%)"
          }}
        />
        <div className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-[0.2em] text-white/95">
          © WEAVUS STUDIO
        </div>
      </div>
    </div>
  );
}
