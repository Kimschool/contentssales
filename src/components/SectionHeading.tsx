import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center"
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow ? <div className={`divider-label ${align === "center" ? "" : "justify-start"}`}>{eyebrow}</div> : null}
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-ink-500 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
