import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.8fr_1.4fr]">
          {/* brand block */}
          <div>
            <Link href={base} className="flex items-center gap-2">
              <span className="font-display text-xl font-black tracking-tight text-white">
                WEAVUS
              </span>
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              {dict.hero.subtitle}
            </p>
          </div>

          {/* menu */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
              Menu
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href={`${base}/services`} className="text-white/80 hover:text-white">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`${base}/portfolio`} className="text-white/80 hover:text-white">
                  {dict.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href={`${base}/about`} className="text-white/80 hover:text-white">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact`} className="text-white/80 hover:text-white">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* company info */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
              {dict.footer.companyHeading}
            </h4>
            <dl className="mt-5 space-y-3 text-sm">
              {dict.footer.company.map((c) => (
                <div
                  key={c.label}
                  className="grid grid-cols-[80px_1fr] items-start gap-4 border-b border-white/10 pb-3 last:border-b-0"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    {c.label}
                  </dt>
                  <dd className="text-white/90">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>{dict.footer.copyright}</div>
          <div className="flex gap-6">
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
