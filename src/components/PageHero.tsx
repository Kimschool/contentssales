import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Container>
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="mt-6 font-display text-[clamp(44px,7vw,104px)] font-black leading-[0.95] tracking-tightest text-ink-900">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
      <div className="mx-auto mt-14 h-px w-full max-w-7xl bg-ink-100 sm:mt-20" />
    </section>
  );
}
