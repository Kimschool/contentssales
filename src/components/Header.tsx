"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const pathname = usePathname() ?? base;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: `${base}`, label: dict.nav.home, exact: true },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/portfolio`, label: dict.nav.portfolio },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact }
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={
        "sticky top-0 z-50 border-b transition-all " +
        (scrolled
          ? "border-ink-100 bg-white/95 shadow-[0_1px_0_rgba(11,16,25,0.04),0_8px_24px_-12px_rgba(11,16,25,0.14)] backdrop-blur-md"
          : "border-transparent bg-white/85 backdrop-blur-md")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Link href={base} className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500 ring-1 ring-brand-600/30">
            <span className="font-display text-sm font-black text-ink-900">W</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-[0.18em] text-ink-900">
              {dict.brand.name}
            </span>
            <span className="text-[11px] font-medium text-ink-500">
              {dict.brand.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "relative text-sm font-medium transition " +
                  (active
                    ? "text-ink-900"
                    : "text-ink-600 hover:text-ink-900")
                }
              >
                {item.label}
                <span
                  aria-hidden
                  className={
                    "absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-500 transition-all " +
                    (active ? "w-6" : "w-0")
                  }
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} />
          <Link
            href={`${base}/contact`}
            className="hidden rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-800 sm:inline-block"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
