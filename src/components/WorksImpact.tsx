import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function WorksImpact({
  locale,
  dict
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const base = `/${locale}`;
  const titleLines = dict.works.title.split("\n");

  return (
    <section className="relative overflow-hidden bg-ink-900 py-28 text-white sm:py-32">
      <Container>
        {/* top header row */}
        <div className="flex flex-col gap-6 border-b border-white/20 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">{dict.works.eyebrow}</div>
            <h2 className="mt-6 font-display text-[clamp(36px,5.4vw,72px)] font-black leading-[0.95] tracking-tightest text-white">
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          <Link
            href={`${base}/portfolio`}
            className="group inline-flex w-fit items-center gap-2 border-b border-white/40 pb-1 text-sm font-semibold text-white transition hover:border-brand-500 hover:text-brand-500"
          >
            {dict.portfolio.viewAll}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        {/* staggered stats — diagonal composition */}
        <div className="relative mt-16 min-h-[420px] sm:mt-20 sm:min-h-[560px]">
          {dict.works.stats.map((s, i) => {
            const positions = [
              "left-0 top-0 sm:left-[2%] sm:top-0",
              "right-0 top-[32%] text-right sm:right-[4%]",
              "left-[8%] bottom-0 sm:left-[14%] sm:bottom-2"
            ];
            return (
              <div
                key={s.label}
                className={"absolute max-w-[92%] " + positions[i]}
              >
                <div
                  className="font-display font-black leading-[0.82] tracking-tightest text-brand-500"
                  style={{ fontSize: "clamp(72px, 14vw, 220px)" }}
                >
                  {s.value}
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-xs">
                  — {s.label}
                </div>
              </div>
            );
          })}

          {/* subtitle floating mid-right */}
          <p className="absolute bottom-0 right-0 max-w-xs text-base leading-relaxed text-white/70 sm:max-w-sm sm:text-lg">
            {dict.works.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
