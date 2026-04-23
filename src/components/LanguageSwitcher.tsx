"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-brand-200 bg-white p-1 text-[11px] font-bold">
      {locales.map((l) => {
        const href = `/${l}${rest ? "/" + rest : ""}`;
        const active = l === current;
        return (
          <Link
            key={l}
            href={href}
            className={
              "rounded-full px-2.5 py-1 transition " +
              (active
                ? "bg-brand-500 text-ink-900 shadow-[0_2px_0_0_rgb(202,138,4)]"
                : "text-ink-500 hover:bg-brand-50 hover:text-ink-900")
            }
          >
            {localeLabels[l]}
          </Link>
        );
      })}
    </div>
  );
}
