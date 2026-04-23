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
    { href: `${base}`, label: dict.nav.home, icon: "★", exact: true },
    { href: `${base}/services`, label: dict.nav.services, icon: "✿" },
    { href: `${base}/portfolio`, label: dict.nav.portfolio, icon: "♥" },
    { href: `${base}/about`, label: dict.nav.about, icon: "✎" },
    { href: `${base}/contact`, label: dict.nav.contact, icon: "✉" }
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* top ticker bar — tiny playful status row */}
      <div className="hidden w-full bg-ink-900 py-1.5 text-center text-[10px] font-bold tracking-[0.3em] text-brand-300 sm:block">
        ★ WEAVUS CONTENTS — NOW SERIALIZING ACROSS 14 LANGUAGES ★
      </div>

      <header
        className={
          "sticky top-0 z-50 border-b transition-all " +
          (scrolled
            ? "border-brand-200 bg-white/95 shadow-[0_1px_0_rgba(202,138,4,0.08),0_10px_30px_-14px_rgba(202,138,4,0.28)] backdrop-blur-md"
            : "border-transparent bg-white/90 backdrop-blur-md")
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
          {/* ---------- Logo ---------- */}
          <Link href={base} className="group flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-brand-500 shadow-[0_4px_0_0_rgb(202,138,4)] ring-1 ring-brand-600/30 transition-transform group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]">
              <span className="font-display text-base font-black text-ink-900">W</span>
              {/* cute dot accent */}
              <span
                aria-hidden
                className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-ink-900 text-[8px] font-black text-brand-400"
              >
                ★
              </span>
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-black tracking-[0.16em] text-ink-900">
                {dict.brand.name}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-ink-500">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                {dict.brand.tagline}
              </span>
            </span>
          </Link>

          {/* ---------- Desktop Nav ---------- */}
          <nav className="hidden items-center gap-1 rounded-full border border-brand-200 bg-brand-50/60 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "group/nav relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition " +
                    (active
                      ? "bg-brand-500 text-ink-900 shadow-[0_2px_0_0_rgb(202,138,4)]"
                      : "text-ink-700 hover:bg-brand-100 hover:text-ink-900")
                  }
                >
                  <span
                    aria-hidden
                    className={
                      "text-[11px] transition-transform " +
                      (active
                        ? "-rotate-12 scale-110"
                        : "opacity-60 group-hover/nav:-rotate-12 group-hover/nav:opacity-100")
                    }
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ---------- Right actions ---------- */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher current={locale} />

            {/* CTA — cute pressed-button style */}
            <Link
              href={`${base}/contact`}
              className="group/cta hidden rounded-full bg-ink-900 px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_0_0_rgb(11,16,25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_rgb(11,16,25)] active:translate-y-0.5 active:shadow-[0_2px_0_0_rgb(11,16,25)] sm:inline-flex sm:items-center sm:gap-1.5"
            >
              <span
                aria-hidden
                className="inline-block text-brand-400 transition-transform group-hover/cta:rotate-12"
              >
                ✦
              </span>
              {dict.nav.cta}
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-brand-200 bg-white text-ink-900 transition hover:bg-brand-100 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                <span
                  className={
                    "block h-0.5 w-4 bg-ink-900 transition " +
                    (open ? "translate-y-[6px] rotate-45" : "")
                  }
                />
                <span
                  className={
                    "block h-0.5 w-4 bg-ink-900 transition " +
                    (open ? "opacity-0" : "")
                  }
                />
                <span
                  className={
                    "block h-0.5 w-4 bg-ink-900 transition " +
                    (open ? "-translate-y-[6px] -rotate-45" : "")
                  }
                />
              </div>
            </button>
          </div>
        </div>

        {/* ---------- Mobile drawer ---------- */}
        <div
          className={
            "overflow-hidden border-t border-brand-100 bg-white transition-[max-height,opacity] lg:hidden " +
            (open ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
          }
        >
          <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition " +
                    (active
                      ? "bg-brand-500 text-ink-900"
                      : "text-ink-700 hover:bg-brand-50")
                  }
                >
                  <span
                    aria-hidden
                    className={
                      "grid h-7 w-7 place-items-center rounded-full text-xs " +
                      (active ? "bg-ink-900 text-brand-400" : "bg-brand-100 text-ink-700")
                    }
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={`${base}/contact`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink-900 px-5 py-3 text-sm font-bold text-white"
            >
              <span aria-hidden className="text-brand-400">✦</span>
              {dict.nav.cta}
            </Link>
          </nav>
        </div>

        {/* decorative bottom strip — scalloped yellow */}
        <div aria-hidden className="pointer-events-none h-1 w-full overflow-hidden">
          <div className="flex h-full w-full">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className={
                  "flex-1 " + (i % 2 === 0 ? "bg-brand-400" : "bg-transparent")
                }
              />
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
