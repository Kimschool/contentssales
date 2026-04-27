type Slug = "production" | "localization" | "planning" | "studio" | "illustration" | "manga";

export function ServiceIcon({ slug }: { slug: string }) {
  const key = (slug as Slug) ?? "production";
  return (
    <span
      aria-hidden
      className="grid h-10 w-10 place-items-center rounded-full border border-ink-900 text-ink-900 transition group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {key === "planning" && <PlanningPath />}
        {key === "production" && <ProductionPath />}
        {key === "localization" && <LocalizationPath />}
        {key === "studio" && <StudioPath />}
        {key === "illustration" && <IllustrationPath />}
        {key === "manga" && <MangaPath />}
      </svg>
    </span>
  );
}

function PlanningPath() {
  return (
    <>
      <path d="M3 3h9l4 4v10H3z" />
      <path d="M12 3v4h4" />
      <path d="M6 11h7" />
      <path d="M6 14h7" />
    </>
  );
}

function ProductionPath() {
  return (
    <>
      <rect x="3" y="4" width="14" height="12" rx="1.5" />
      <path d="M3 8h14" />
      <circle cx="6" cy="6" r="0.5" fill="currentColor" />
      <circle cx="8" cy="6" r="0.5" fill="currentColor" />
      <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    </>
  );
}

function LocalizationPath() {
  return (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M3 10h14" />
      <path d="M10 3c2.5 2.5 2.5 11.5 0 14" />
      <path d="M10 3c-2.5 2.5-2.5 11.5 0 14" />
    </>
  );
}

function StudioPath() {
  return (
    <>
      <path d="M3 17l4-8 3 5 3-3 4 6" />
      <circle cx="15" cy="5" r="2" />
    </>
  );
}

function IllustrationPath() {
  return (
    <>
      <path d="M14 3l3 3-9 9H5v-3L14 3z" />
      <path d="M12 5l3 3" />
    </>
  );
}

function MangaPath() {
  return (
    <>
      <rect x="4" y="2" width="12" height="16" rx="1.5" />
      <path d="M7 6h6" />
      <path d="M7 9h6" />
      <path d="M7 12h4" />
    </>
  );
}
