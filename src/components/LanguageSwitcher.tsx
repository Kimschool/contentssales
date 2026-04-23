"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold">
      {locales.map((l) => {
        const href = `/${l}${rest ? "/" + rest : ""}`;
        const active = l === current;
        return (
          <Link
            key={l}
            href={href}
            className={
              "rounded-full px-3 py-1 transition " +
              (active
                ? "bg-brand-gradient text-white shadow-glow"
                : "text-ink-200/80 hover:text-white")
            }
          >
            {localeLabels[l]}
          </Link>
        );
      })}
    </div>
  );
}
