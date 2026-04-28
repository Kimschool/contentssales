import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";

export function Strengths({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-canvas-soft py-28 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="eyebrow">{dict.strengths.eyebrow}</div>
            <h2 className="mt-6 whitespace-pre-line font-display text-[clamp(32px,4.4vw,56px)] font-black leading-[0.98] tracking-tightest text-ink-900">
              {dict.strengths.title}
            </h2>
          </div>

          <ol className="flex flex-col">
            {dict.strengths.items.map((s) => (
              <li
                key={s.no}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-ink-200 py-10 first:border-t-0 first:pt-0 sm:gap-10"
              >
                <div className="font-display text-2xl font-bold leading-none tracking-tight text-brand-500 sm:text-3xl">
                  {s.no}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-ink-900 sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-600 sm:text-lg">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
