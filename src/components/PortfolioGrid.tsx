import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const palettes = [
  "from-ink-700 via-neon-purple to-neon-pink",
  "from-neon-pink via-ink-600 to-neon-blue",
  "from-neon-blue via-ink-700 to-neon-purple",
  "from-ink-600 via-neon-pink to-ink-700"
];

export function PortfolioGrid({
  locale,
  dict,
  showCta = true
}: {
  locale: Locale;
  dict: Dictionary;
  showCta?: boolean;
}) {
  const base = `/${locale}`;
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.portfolio.eyebrow}
          title={dict.portfolio.title}
          subtitle={dict.portfolio.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.portfolio.items.map((item, idx) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-canvas-surface transition hover:-translate-y-1"
            >
              <div
                className={`relative aspect-[4/5] w-full bg-gradient-to-br ${palettes[idx % palettes.length]}`}
              >
                <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
                <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white backdrop-blur">
                  {item.badge}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-display text-xl font-black leading-tight tracking-tight text-white">
                    {item.title}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-200/70">
                  {item.genre}
                </div>
                <div className="mt-2 text-sm text-ink-100/90">{item.platform}</div>
              </div>
            </article>
          ))}
        </div>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <Link
              href={`${base}/portfolio`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-100 transition hover:border-white/30 hover:text-white"
            >
              {dict.portfolio.viewAll}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
