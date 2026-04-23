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
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {dict.services.items.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-hover"
            >
              <ServiceIcon slug={item.slug} />
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-600">
                  {item.tag}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ink-200 text-xs text-ink-500 transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                  →
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-ink-100 pt-4">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <Link
              href={`${base}/services`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-400 hover:text-brand-600"
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
