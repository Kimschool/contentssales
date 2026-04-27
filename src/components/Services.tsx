import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { ServiceIcon } from "./ServiceIcon";

export function Services({
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
    <section className="relative bg-white py-28 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 border-b-2 border-ink-900 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">{dict.services.eyebrow}</div>
            <h2 className="mt-6 font-display text-[clamp(36px,5.4vw,72px)] font-black leading-[0.95] tracking-tightest text-ink-900">
              {dict.services.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
            {dict.services.subtitle}
          </p>
        </div>

        {/* zigzag pipeline — each step alternates left/right */}
        <ol className="mt-4">
          {dict.services.items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <li
                key={item.slug}
                className="border-b border-ink-200"
              >
                <div
                  className={
                    "grid items-start gap-8 py-14 sm:py-20 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] " +
                    (isEven ? "" : "lg:[&>*:first-child]:order-2")
                  }
                >
                  <div className="flex items-start justify-between gap-6 lg:block">
                    <div
                      className={
                        "flex items-baseline gap-4 " +
                        (isEven ? "" : "lg:justify-end lg:text-right")
                      }
                    >
                      <span
                        className="font-display font-black leading-[0.85] tracking-tightest text-brand-500"
                        style={{ fontSize: "clamp(72px,10vw,180px)" }}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div
                      className={
                        "mt-0 flex items-center gap-3 lg:mt-6 " +
                        (isEven ? "" : "lg:justify-end")
                      }
                    >
                      <ServiceIcon slug={item.slug} />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      "flex flex-col gap-5 lg:border-ink-200 " +
                      (isEven ? "lg:border-l lg:pl-10" : "lg:border-r lg:pr-10 lg:text-right")
                    }
                  >
                    <h3 className="font-display text-[clamp(28px,3.4vw,44px)] font-black leading-tight tracking-tightest text-ink-900">
                      {item.title}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg lg:self-start">
                      {isEven ? (
                        <>{item.desc}</>
                      ) : (
                        <span className="block lg:ml-auto">{item.desc}</span>
                      )}
                    </p>
                    <ul
                      className={
                        "mt-2 flex flex-wrap gap-2 " +
                        (isEven ? "" : "lg:justify-end")
                      }
                    >
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="inline-flex items-center rounded-full border border-ink-200 px-3.5 py-1.5 text-xs font-medium text-ink-700"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    {"cta" in item && item.cta && (
                      <div className={isEven ? "" : "lg:flex lg:justify-end"}>
                        <Link
                          href={`${base}/contact`}
                          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500"
                        >
                          {item.cta} <span aria-hidden>→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {showCta ? (
          <div className="mt-14 flex justify-center">
            <Link
              href={`${base}/services`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
            >
              {dict.nav.services}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
