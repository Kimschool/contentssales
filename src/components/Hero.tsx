import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { HeroCollage } from "./HeroCollage";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const titleLines = dict.hero.title.split("\n");

  return (
    <section className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="glow-spot left-[-120px] top-[-120px] bg-ink-600" />
      <div className="glow-spot right-[-120px] top-[80px] bg-neon-pink" />
      <div className="absolute inset-0 -z-10 hero-grid opacity-40" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-ink-100">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-neon-pink/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-pink" />
              </span>
              {dict.hero.eyebrow}
            </div>

            <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {titleLines.map((line, i) => (
                <span key={i} className={i === titleLines.length - 1 ? "text-gradient block" : "block"}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base text-ink-200/85 sm:text-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`${base}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient bg-[length:200%_100%] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:animate-shimmer"
              >
                {dict.hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-100 transition hover:border-white/30 hover:text-white"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
              {dict.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-200/60">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold text-gradient sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <HeroCollage />
        </div>
      </Container>
    </section>
  );
}
