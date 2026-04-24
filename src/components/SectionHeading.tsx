import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 className="mt-6 font-display text-[clamp(32px,4.8vw,56px)] font-black leading-[0.98] tracking-tightest text-ink-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
