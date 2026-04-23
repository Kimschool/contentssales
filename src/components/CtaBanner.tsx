import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function CtaBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  return (
    <section className="relative py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-hero-gradient p-10 shadow-glow-pink sm:p-16">
          <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
          <div className="glow-spot right-[-100px] top-[-120px] bg-neon-pink" />
          <div className="glow-spot left-[-100px] bottom-[-120px] bg-neon-blue" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {dict.cta.title}
              </h2>
              <p className="mt-4 text-base text-white/85 sm:text-lg">
                {dict.cta.subtitle}
              </p>
            </div>
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-4 text-sm font-bold text-canvas shadow-lg transition hover:bg-white/90"
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
