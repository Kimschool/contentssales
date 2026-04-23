import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ServiceIcon } from "./ServiceIcon";

const panelLabels = ["PANEL 01", "PANEL 02", "PANEL 03", "PANEL 04"];

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
    <section className="relative bg-white py-24">
      {/* speed lines background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 h-60 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #0b1019 0 1px, transparent 1px 32px)",
          maskImage:
            "linear-gradient(180deg, #000 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, transparent 100%)"
        }}
      />

      <Container>
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {dict.services.items.map((item, idx) => (
            <article
              key={item.slug}
              className="group relative rounded-2xl border-2 border-ink-900 bg-white p-6 shadow-[4px_4px_0_rgba(11,16,25,1)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_rgba(250,204,21,1)]"
            >
              {/* comic panel label top-left — taped paper feel */}
              <div
                aria-hidden
                className="absolute -top-3 left-5 z-10 rotate-[-3deg] bg-ink-900 px-2 py-0.5 font-display text-[10px] font-black tracking-[0.22em] text-brand-300"
              >
                {panelLabels[idx % panelLabels.length]}
              </div>

              {/* comic-style frame wrapping icon */}
              <div className="relative overflow-hidden rounded-xl border-2 border-ink-900">
                <ServiceIcon slug={item.slug} />
                {/* motion speed lines on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(110deg, rgba(11,16,25,0.35) 0 1.5px, transparent 1.5px 10px)"
                  }}
                />
                {/* corner fold */}
                <div
                  aria-hidden
                  className="absolute bottom-0 right-0 h-6 w-6 border-l-2 border-t-2 border-ink-900 bg-brand-200"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)"
                  }}
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.22em] text-ink-900">
                  <span className="inline-block h-1.5 w-1.5 rotate-45 bg-brand-500" />
                  {item.tag}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink-900 bg-white text-sm font-black text-ink-900 transition group-hover:bg-brand-500">
                  →
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-black leading-tight text-ink-900">
                {item.title}
              </h3>

              {/* description in a speech-bubble-like box */}
              <div className="relative mt-3 rounded-xl bg-brand-50 px-4 py-3 text-sm leading-relaxed text-ink-700">
                {/* tail pointing up */}
                <svg
                  viewBox="0 0 20 12"
                  aria-hidden
                  className="absolute -top-2 left-6 h-3 w-5 text-brand-50"
                >
                  <polygon points="0,12 20,12 10,0" fill="currentColor" />
                </svg>
                {item.desc}
              </div>

              <ul className="mt-5 space-y-2 border-t-2 border-dashed border-ink-200 pt-4">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-ink-800"
                  >
                    <span
                      aria-hidden
                      className="mt-[6px] inline-block h-2 w-2 rotate-45 bg-brand-500 ring-2 ring-ink-900"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {showCta ? (
          <div className="mt-12 flex justify-center">
            <Link
              href={`${base}/services`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-white px-6 py-3 text-sm font-bold text-ink-900 shadow-[3px_3px_0_rgba(11,16,25,1)] transition hover:-translate-y-0.5 hover:bg-brand-100 hover:shadow-[5px_5px_0_rgba(11,16,25,1)]"
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
