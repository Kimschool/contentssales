import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const nav = [
    { href: `${base}`, label: dict.nav.home },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/portfolio`, label: dict.nav.portfolio },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-canvas/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Link href={base} className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient shadow-glow">
            <span className="font-display text-sm font-black text-white">W</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-[0.18em] text-white">
              {dict.brand.name}
            </span>
            <span className="text-[11px] font-medium text-ink-200/70">
              {dict.brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-200/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} />
          <Link
            href={`${base}/contact`}
            className="hidden rounded-full bg-brand-gradient bg-[length:200%_100%] px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:animate-shimmer sm:inline-block"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
