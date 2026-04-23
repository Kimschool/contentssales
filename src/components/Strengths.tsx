import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Strengths({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-canvas-soft py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.strengths.eyebrow}
          title={dict.strengths.title}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dict.strengths.items.map((s) => (
            <article
              key={s.no}
              className="group rounded-2xl border border-ink-200 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-hover"
            >
              <div className="font-display text-5xl font-black tracking-tight text-brand-500">
                {s.no}
              </div>
              <div className="mt-6 h-px w-10 bg-brand-500" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
