"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em]">
      {locales.map((l, i) => {
        const href = `/${l}${rest ? "/" + rest : ""}`;
        const active = l === current;
        return (
          <span key={l} className="inline-flex items-center gap-3">
            <Link
              href={href}
              className={
                "transition-colors " +
                (active ? "text-ink-900" : "text-ink-400 hover:text-ink-900")
              }
            >
              {localeLabels[l]}
            </Link>
            {i < locales.length - 1 ? (
              <span aria-hidden className="text-ink-300">
                /
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
