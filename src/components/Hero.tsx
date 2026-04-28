import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { features } from "@/config/features";
import { Container } from "./Container";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;

  return (
    <section className="relative overflow-hidden bg-canvas-soft">
      {/* vertical rotated marquee on left edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-10 items-center justify-center border-r border-ink-200 lg:flex"
      >
        <span
          className="origin-center -rotate-90 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.5em] text-ink-500"
        >
          {dict.hero.eyebrow}
        </span>
      </div>

      <Container className="relative lg:pl-20">
        {/* top masthead row */}
        <div className="flex items-start justify-between gap-4 border-b border-ink-900 pt-12 pb-4 sm:pt-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ink-900">
            WEAVUS&nbsp;/&nbsp;CONTENT&nbsp;BUREAU
          </span>
          <span className="text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
            Issue 01 · 2026
          </span>
        </div>

        {/* stepped headline
            - 우측 컨테이너 라인 침범 방지: 폰트 max 축소 + 좌측 인덴트 축소 (특히 large 뷰포트)
            - "to BUSINESS." 가 12자라 같은 clamp로 두면 우측 오버플로우 발생 → max 축소 */}
        <h1 className="mt-10 sm:mt-14">
          <span
            className="block font-display font-bold uppercase tracking-tightest text-ink-500"
            style={{ fontSize: "clamp(18px, 2.4vw, 32px)", letterSpacing: "0.2em" }}
          >
            — From
          </span>
          <span
            className="mt-2 block font-display font-black leading-[0.88] tracking-tightest text-ink-900"
            style={{ fontSize: "clamp(64px, 12vw, 168px)" }}
          >
            STORY
          </span>
          <span
            className="mt-1 block pl-[5vw] font-display font-black leading-[0.88] tracking-tightest text-ink-900 sm:pl-[8vw]"
            style={{ fontSize: "clamp(56px, 10.5vw, 148px)" }}
          >
            to BUSINESS
            <span className="text-brand-500">.</span>
          </span>
        </h1>

        {/* subtitle + CTA row (side by side) */}
        <div className="mt-14 grid gap-10 border-t border-ink-200 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p className="max-w-xl whitespace-pre-line text-base leading-relaxed text-ink-700 sm:text-lg">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`${base}/contact`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
            >
              {dict.hero.ctaPrimary}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
            {/* "우리의 작품 보기": 포트폴리오 공개(6월 이후)까지 숨김 — features.showPortfolio 로 토글 */}
            {features.showPortfolio && (
              <Link
                href={`${base}/portfolio`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
              >
                {dict.hero.ctaSecondary}
              </Link>
            )}
          </div>
        </div>

        {/* thin stats line — masthead style rather than column grid */}
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-y-2 border-ink-900 py-6 sm:mt-16">
          {dict.hero.stats.map((s) => (
            <div
              key={s.label}
              className="inline-flex items-baseline gap-3"
            >
              <span className="font-display text-2xl font-black leading-none tracking-tightest text-brand-500 sm:text-3xl">
                {s.value}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-700">
                {s.label}
              </span>
            </div>
          ))}
          <div className="ml-auto text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-400">
            EST. 2015 · TOKYO
          </div>
        </div>

        <div className="h-14 sm:h-20" />
      </Container>
    </section>
  );
}
