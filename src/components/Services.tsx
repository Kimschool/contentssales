import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
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
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {dict.services.items.map((item, idx) => (
            <article
              key={item.slug}
              className="border-gradient group relative overflow-hidden p-8 transition hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    idx % 2 === 0
                      ? "radial-gradient(circle at 80% 0%, rgba(255,62,165,0.18), transparent 60%)"
                      : "radial-gradient(circle at 20% 0%, rgba(59,130,246,0.2), transparent 60%)"
                }}
              />
              <div className="relative">
                <ServiceIcon slug={item.slug} />
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-ink-200/70">
                    {item.tag}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 text-xs text-ink-100 transition group-hover:bg-brand-gradient group-hover:text-white">
                    →
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200/80">
                  {item.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-ink-100/90"
                    >
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <Link
              href={`${base}/services`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ink-100 transition hover:border-white/30 hover:text-white"
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
