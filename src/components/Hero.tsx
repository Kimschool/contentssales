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
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(110deg, #171c25 0 2px, transparent 2px 18px)"
        }}
      />

      <Container className="relative">
        <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-900/25 bg-white/60 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-ink-900">
              {dict.hero.eyebrow}
            </div>

            <h1 className="font-display text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-xl text-base text-ink-800 sm:text-lg">
              {dict.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`${base}/contact`}
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
              >
                {dict.hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={`${base}/services`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/35 bg-white/40 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-white/70"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-ink-900/20 pt-8">
              {dict.hero.stats.map((s) => (
                <div key={s.label}>
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
      </Container>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-sm justify-self-center lg:max-w-none lg:justify-self-end">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(11,16,25,0.45)]">
        <Image
          src="/portfolio/main.png"
          alt="WEAVUS main visual"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover"
        />
        <div className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-brand-700 shadow-sm">
          EPISODE · 01
        </div>
      </div>
    </div>
  );
}
