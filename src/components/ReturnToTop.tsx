"use client";

import type { Locale } from "@/i18n/config";

export function ReturnToTop({ locale }: { locale: Locale }) {
  const label =
    locale === "ko"
      ? "첫 페이지로"
      : locale === "ja"
      ? "最初のページへ"
      : "Return to first page";
  const eyebrow =
    locale === "ko"
      ? "이슈의 끝 — 다시 읽기"
      : locale === "ja"
      ? "イシューの終わり — 再読"
      : "End of issue — read again";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const top = document.getElementById("ch-01");
    if (top) {
      top.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="border-t border-ink-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ink-400">
          <span aria-hidden className="inline-block h-px w-8 bg-ink-300" />
          {eyebrow}
        </div>

        <a
          href="#ch-01"
          onClick={handleClick}
          className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink-900 transition hover:text-brand-500"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-900 transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white"
          >
            ↑
          </span>
          <span>{label}</span>
          <span
            aria-hidden
            className="hidden text-brand-500 sm:inline"
          >
            · CH. 01
          </span>
        </a>
      </div>
    </div>
  );
}
