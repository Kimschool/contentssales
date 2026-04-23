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
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="glow-spot left-[-150px] top-[-120px] bg-ink-600" />
      <div className="glow-spot right-[-150px] top-[40px] bg-neon-pink" />
      <div className="absolute inset-0 -z-10 hero-grid opacity-30" />
      <Container>
        {eyebrow ? (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
            {eyebrow}
          </div>
        ) : null}
        <h1 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-gradient">{title}</span>
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base text-ink-200/80 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
