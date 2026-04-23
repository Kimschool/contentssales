import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  return (
    <footer className="mt-24 bg-ink-900 text-ink-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1.4fr]">
          {/* brand block */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500">
                <span className="font-display text-base font-black text-ink-900">W</span>
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold tracking-[0.18em] text-white">
                  {dict.brand.name}
                </div>
                <div className="text-[11px] text-ink-300">{dict.brand.tagline}</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-300">
              {dict.hero.subtitle}
            </p>
          </div>

          {/* menu */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Menu
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={`${base}/services`} className="text-ink-200 hover:text-white">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`${base}/portfolio`} className="text-ink-200 hover:text-white">
                  {dict.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="text-ink-200 hover:text-white">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact`} className="text-ink-200 hover:text-white">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* company info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              {dict.footer.companyHeading}
            </h4>
            <dl className="mt-4 space-y-3 text-sm">
              {dict.footer.company.map((c) => (
                <div
                  key={c.label}
                  className="grid grid-cols-[72px_1fr] items-start gap-3 border-b border-ink-800 pb-2 last:border-b-0"
                >
                  <dt className="text-[11px] font-semibold tracking-[0.12em] text-ink-400">
                    {c.label}
                  </dt>
                  <dd className="text-ink-100">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-700 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <div>{dict.footer.copyright}</div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">
              {dict.footer.links.privacy}
            </Link>
            <Link href="#" className="hover:text-white">
              {dict.footer.links.terms}
            </Link>
            <Link href={`${base}/contact`} className="hover:text-white">
              {dict.footer.links.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
