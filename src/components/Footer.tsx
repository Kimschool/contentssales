import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  return (
    <footer className="mt-24 bg-ink-900 text-ink-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500">
                <span className="font-display text-base font-black text-white">W</span>
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold tracking-[0.18em] text-white">
                  {dict.brand.name}
                </div>
                <div className="text-[11px] text-ink-300">{dict.brand.tagline}</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-ink-300">{dict.hero.subtitle}</p>
          </div>

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

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-200">
              {dict.contactPage.info.map((i) => (
                <li key={i.label}>
                  <span className="text-ink-400">{i.label} · </span>
                  {i.value}
                </li>
              ))}
            </ul>
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
