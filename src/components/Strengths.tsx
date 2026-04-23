import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Strengths({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.strengths.eyebrow}
          title={<span>{dict.strengths.title}</span>}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dict.strengths.items.map((s) => (
            <article
              key={s.no}
              className="border-gradient group relative overflow-hidden p-8 transition hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-gradient opacity-10 blur-3xl transition group-hover:opacity-30" />
              <div className="relative">
                <div className="font-display text-5xl font-black tracking-tight text-gradient">
                  {s.no}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200/80">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
