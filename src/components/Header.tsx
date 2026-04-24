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
  const [open, setOpen] = useState(false);

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
    { href: `${base}/creators`, label: dict.nav.creators },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact }
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all " +
        (scrolled
          ? "border-b border-ink-100 bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-md")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        {/* Wordmark */}
        <Link href={base} className="flex items-center gap-2">
          <span className="font-display text-[19px] font-black tracking-tight text-ink-900">
            WEAVUS
          </span>
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500"
          />
        </Link>

        {/* Desktop nav — plain text links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "text-sm font-medium transition-colors " +
                  (active
                    ? "text-ink-900"
                    : "text-ink-500 hover:text-ink-900")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} />
          <Link
            href={`${base}/contact`}
            className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 sm:inline-flex sm:items-center sm:gap-1.5"
          >
            {dict.nav.cta}
            <span aria-hidden>→</span>
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center lg:hidden"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={
                  "block h-[2px] w-5 bg-ink-900 transition " +
                  (open ? "translate-y-[7px] rotate-45" : "")
                }
              />
              <span
                className={
                  "block h-[2px] w-5 bg-ink-900 transition " +
                  (open ? "opacity-0" : "")
                }
              />
              <span
                className={
                  "block h-[2px] w-5 bg-ink-900 transition " +
                  (open ? "-translate-y-[7px] -rotate-45" : "")
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={
          "overflow-hidden border-t border-ink-100 bg-white transition-[max-height,opacity] lg:hidden " +
          (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8">
          {nav.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  "border-b border-ink-100 py-4 text-base font-semibold transition-colors last:border-b-0 " +
                  (active ? "text-brand-500" : "text-ink-900")
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={`${base}/contact`}
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
          >
            {dict.nav.cta}
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
