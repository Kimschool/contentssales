import { Container } from "./Container";

type Tone = "light" | "dark" | "cream";

export function ChapterBridge({
  fromChapter,
  fromLabel,
  toChapter,
  toLabel,
  tone = "light"
}: {
  fromChapter: string;
  fromLabel: string;
  toChapter: string;
  toLabel: string;
  tone?: Tone;
}) {
  const palette =
    tone === "dark"
      ? "bg-ink-900 text-white/70 border-white/15"
      : tone === "cream"
      ? "bg-canvas-soft text-ink-600 border-ink-200"
      : "bg-white text-ink-500 border-ink-100";

  return (
    <div className={`border-y ${palette} py-4`}>
      <Container>
        <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.3em]">
          <div className="flex items-center gap-3">
            <span className="opacity-70">{fromChapter}</span>
            <span aria-hidden>—</span>
            <span>{fromLabel}</span>
          </div>
          <span aria-hidden className="text-brand-500 text-sm">↘</span>
          <div className="flex items-center gap-3">
            <span>{toLabel}</span>
            <span aria-hidden>—</span>
            <span className="text-brand-500">{toChapter}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
