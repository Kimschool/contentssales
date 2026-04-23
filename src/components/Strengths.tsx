import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const sfx = ["POW!", "BAM!", "WOW!"];

export function Strengths({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-canvas-soft py-24">
      {/* corner halftone bursts */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(#ca8a04 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(circle at top left, #000 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at top left, #000 0%, transparent 70%)"
        }}
      />

      <Container>
        <SectionHeading
          eyebrow={dict.strengths.eyebrow}
          title={dict.strengths.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.strengths.items.map((s, idx) => (
            <article
              key={s.no}
              className="group relative rounded-2xl border-2 border-ink-900 bg-white p-8 shadow-[4px_4px_0_rgba(17,28,37,1)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_rgba(250,204,21,1)]"
            >
              {/* speech bubble — SFX sticker top right */}
              <div
                aria-hidden
                className="absolute -right-3 -top-3 rotate-[8deg] transition group-hover:rotate-[14deg]"
              >
                <div className="relative">
                  <svg viewBox="0 0 80 80" className="h-16 w-16">
                    <polygon
                      points="40,4 48,24 70,22 54,38 66,58 44,52 36,74 30,52 8,60 18,40 4,24 26,26"
                      fill="#facc15"
                      stroke="#0b1019"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="absolute inset-0 grid place-items-center font-display text-[10px] font-black tracking-wider text-ink-900">
                    {sfx[idx % sfx.length]}
                  </span>
                </div>
              </div>

              {/* big number with manga speech bubble tail */}
              <div className="relative inline-flex">
                <div className="rounded-2xl border-2 border-ink-900 bg-brand-200 px-4 py-1 font-display text-5xl font-black leading-none tracking-tight text-ink-900">
                  {s.no}
                </div>
                {/* bubble tail */}
                <svg
                  viewBox="0 0 20 20"
                  className="absolute -bottom-3 left-6 h-4 w-4"
                  aria-hidden
                >
                  <polygon points="0,0 20,0 4,18" fill="#fde68a" stroke="#0b1019" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>

              {/* body */}
              <div className="mt-10 h-px w-12 bg-ink-900" />
              <h3 className="mt-4 font-display text-xl font-black text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.desc}</p>

              {/* bottom meta row */}
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-ink-300 pt-3 text-[10px] font-bold tracking-[0.22em] text-ink-500">
                <span>STRENGTH · {s.no}</span>
                <span aria-hidden className="inline-flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                  READ ON
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
