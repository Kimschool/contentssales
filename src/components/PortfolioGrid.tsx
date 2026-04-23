import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PosterArt } from "./PosterArt";
import { portfolioAssets } from "@/data/portfolio";

const posterKinds = ["midnight", "echo", "villainess", "neon"] as const;

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
    <section className="bg-canvas-soft py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.portfolio.eyebrow}
          title={dict.portfolio.title}
          subtitle={dict.portfolio.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.portfolio.items.map((item, idx) => {
            const kind = posterKinds[idx % posterKinds.length];
            const img = portfolioAssets[idx]?.src;
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-hover"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-100">
                  {img ? (
                    <Image
                      src={img}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PosterArt kind={kind} title={item.title} />
                  )}
                  <div className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] text-brand-700">
                    {item.badge}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                    {item.genre}
                  </div>
                  <div className="mt-1 font-display text-base font-bold text-ink-900">
                    {item.title}
                  </div>
                  <div className="mt-2 text-xs text-ink-500">{item.platform}</div>
                </div>
              </article>
            );
          })}
        </div>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <Link
              href={`${base}/portfolio`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-400 hover:text-brand-600"
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
