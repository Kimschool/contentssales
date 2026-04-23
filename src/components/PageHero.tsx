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
    <section className="relative overflow-hidden bg-canvas-band py-16 sm:py-20">
      <Container>
        {eyebrow ? <div className="section-label">{eyebrow}</div> : null}
        <h1 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-ink-500 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
