import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
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
    <section className="bg-white py-28 sm:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <div className="eyebrow">{dict.portfolio.eyebrow}</div>
            <h2 className="mt-6 font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[0.95] tracking-tightest text-ink-900">
              {dict.portfolio.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
            {dict.portfolio.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.portfolio.items.map((item, idx) => {
            const kind = posterKinds[idx % posterKinds.length];
            const img = portfolioAssets[idx]?.src;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-ink-100 bg-white transition hover:border-ink-900"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
                  {img ? (
                    <Image
                      src={img}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <PosterArt kind={kind} title={item.title} />
                  )}
                  <div className="absolute left-4 top-4 bg-brand-500 px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] text-white">
                    {item.badge}
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">
                    {item.genre}
                  </div>
                  <div className="mt-2 font-display text-lg font-black leading-tight tracking-tight text-ink-900">
                    {item.title}
                  </div>
                  <div className="mt-2 text-xs text-ink-500">{item.platform}</div>
                </div>
              </article>
            );
          })}
        </div>

        {showCta ? (
          <div className="mt-14 flex justify-center">
            <Link
              href={`${base}/portfolio`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
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
