import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function CtaBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const titleLines = dict.cta.title.split("\n");
  return (
    <section className="bg-brand-500 py-24 text-white sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <h2 className="font-display text-[clamp(36px,6vw,80px)] font-black leading-[0.95] tracking-tightest">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="flex flex-col items-start gap-6">
            <p className="text-base leading-relaxed text-white/85 sm:text-lg">
              {dict.cta.subtitle}
            </p>
            <Link
              href={`${base}/contact`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-500"
            >
              {dict.cta.button}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
