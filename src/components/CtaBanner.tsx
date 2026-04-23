import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function CtaBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand-500 p-10 text-ink-900 sm:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(110deg, #171c25 0 2px, transparent 2px 18px)"
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {dict.cta.title}
              </h2>
              <p className="mt-3 text-base text-ink-800 sm:text-lg">
                {dict.cta.subtitle}
              </p>
            </div>
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink-900 px-7 py-4 text-sm font-bold text-white transition hover:bg-ink-800"
            >
              {dict.cta.button}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
