import Link from "next/link";
import Image from "next/image";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CreatorsForm } from "@/components/CreatorsForm";

export default async function CreatorsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const c = dict.creators;
  const base = `/${locale}`;
  const titleLines = c.heroTitle.split("\n");

  return (
    <>
      {/* HERO — white editorial masthead */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-20 sm:pb-28">
        <Container>
          {/* masthead row */}
          <div className="flex items-start justify-between gap-6 border-b border-ink-900 pb-6">
            <div className="eyebrow">{c.heroEyebrow}</div>
            <div className="text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500">
              <div>Round 01 / 2026</div>
              <div className="mt-1 text-brand-500">● Accepting applications</div>
            </div>
          </div>

          {/* hero key visual — proc.png */}
          <figure className="relative mt-10 overflow-hidden rounded-2xl border border-ink-100 bg-ink-900">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <Image
                src="/creators/proc.png"
                alt={
                  locale === "ko"
                    ? "WEAVUS 크리에이터 키 비주얼"
                    : locale === "ja"
                    ? "WEAVUSクリエイターのキービジュアル"
                    : "WEAVUS creators key visual"
                }
                fill
                priority
                sizes="(min-width: 1024px) 1120px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:px-8">
              <span>— YOUR WORK, OUR STAGE</span>
              <span className="text-brand-500">WEAVUS CREATORS · 2026</span>
            </figcaption>
          </figure>

          {/* stepped headline */}
          <h1 className="mt-16 font-display text-ink-900">
            {titleLines.map((line, i) => {
              const isLast = i === titleLines.length - 1;
              return (
                <span
                  key={i}
                  className={
                    "block font-black leading-[0.92] tracking-tightest " +
                    (i === 0
                      ? "pl-0 text-[clamp(44px,9vw,132px)]"
                      : "pl-[6vw] text-[clamp(52px,10vw,148px)] sm:pl-[8vw]")
                  }
                >
                  {line}
                  {isLast ? <span className="text-brand-500">.</span> : null}
                </span>
              );
            })}
          </h1>

          {/* thick pink divider */}
          <div className="mt-16 flex items-center gap-6">
            <div className="h-[3px] flex-1 bg-brand-500" />
            <span className="font-display text-[11px] font-bold tracking-[0.3em] text-ink-900">
              MANIFESTO
            </span>
            <div className="h-[3px] flex-1 bg-brand-500" />
          </div>

          {/* numbered manifesto */}
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-x-12">
            {c.heroLead.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-5 border-t border-ink-100 pt-5"
              >
                <span className="font-display text-2xl font-black leading-none tracking-tightest text-brand-500">
                  0{i + 1}
                </span>
                <p className="text-base leading-relaxed text-ink-800 sm:text-lg">
                  {line}
                </p>
              </li>
            ))}
          </ol>

          {/* CTA cluster — bottom right of hero */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6">
            <div className="text-sm text-ink-500">
              <span className="mr-2 font-semibold text-ink-900">
                {locale === "ko"
                  ? "응모는 폼 하나로 충분합니다."
                  : locale === "ja"
                  ? "応募はフォーム一つで完結。"
                  : "One form is all it takes."}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-500"
              >
                {c.primaryCta}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#looking"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-white"
              >
                {c.secondaryCta}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Running status bar */}
      <div className="overflow-hidden bg-ink-900 py-3.5 text-white">
        <div
          className="flex animate-[marquee_40s_linear_infinite] gap-12 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80"
            >
              WE ARE HIRING
              <span className="inline-block h-1 w-1 rounded-full bg-brand-500" />
              CHARACTER / LINE / BACKGROUND / FINISH
              <span className="inline-block h-1 w-1 rounded-full bg-brand-500" />
              APPLY NOW
              <span className="inline-block h-1 w-1 rounded-full bg-brand-500" />
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* APPLICATION FLOW */}
      <section className="bg-white py-28 sm:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <div className="eyebrow">{c.processEyebrow}</div>
              <h2 className="mt-6 font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[0.95] tracking-tightest text-ink-900">
                {c.processTitle}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
              {c.processSubtitle}
            </p>
          </div>

          <ol className="mt-16">
            {c.process.map((p) => (
              <li
                key={p.no}
                className="grid grid-cols-[80px_minmax(0,1fr)] items-start gap-6 border-t border-ink-200 py-8 last:border-b sm:grid-cols-[160px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-10"
              >
                <div className="font-display text-4xl font-black leading-none tracking-tightest text-brand-500 sm:text-6xl">
                  {p.no}
                </div>
                <h3 className="font-display text-xl font-black leading-tight tracking-tight text-ink-900 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="col-span-2 text-base leading-relaxed text-ink-600 sm:col-span-1 sm:text-lg">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section id="looking" className="scroll-mt-24 bg-canvas-soft py-28 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="eyebrow">{c.lookingEyebrow}</div>
              <h2 className="mt-6 font-display text-[clamp(32px,4.4vw,56px)] font-black leading-[0.98] tracking-tightest text-ink-900">
                {c.lookingTitle}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {c.looking.map((l, i) => (
                <article
                  key={l.tag}
                  className={
                    "rounded-2xl border border-ink-100 bg-white p-7 transition hover:border-ink-900 " +
                    (i % 2 === 1 ? "sm:mt-10" : "")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                      {l.tag}
                    </span>
                    <span className="font-display text-2xl font-black text-ink-900">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-black leading-tight tracking-tight text-ink-900">
                    {l.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-600">
                    {l.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* APPLICATION FORM — proc.png as wide landscape banner on top */}
      <section id="apply" className="scroll-mt-24 bg-white py-28 sm:py-32">
        <Container>
          <div className="flex flex-col gap-6 border-b border-ink-900 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">{c.formEyebrow}</div>
              <h2 className="mt-6 font-display text-[clamp(32px,4.4vw,56px)] font-black leading-[0.98] tracking-tightest text-ink-900">
                {c.formTitle}
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
              {c.formSubtitle}
            </p>
          </div>

          <figure className="relative mt-10 overflow-hidden rounded-2xl border border-ink-100 bg-canvas-soft">
            <div className="relative aspect-[1018/436] w-full">
              <Image
                src="/creators/top.png"
                alt={
                  locale === "ko"
                    ? "러프 스케치에서 완성까지, 제작 과정의 6단계"
                    : locale === "ja"
                    ? "ラフからフィニッシュまで、制作過程の6ステップ"
                    : "From rough sketch to finish — six stages of production"
                }
                fill
                sizes="(min-width: 1024px) 1120px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-ink-100 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-500 sm:px-6">
              <span>ROUGH → FINISH</span>
              <span className="hidden text-ink-400 sm:inline">
                {locale === "ko"
                  ? "한 장면이 비즈니스가 되기까지 6단계"
                  : locale === "ja"
                  ? "一コマがビジネスになるまで6ステップ"
                  : "Six stages from scene to business"}
              </span>
              <span className="text-brand-500">6 STEPS</span>
            </figcaption>
          </figure>

          <div className="mt-12 rounded-2xl border border-ink-100 bg-white p-8 sm:p-12 lg:p-16">
            <CreatorsForm dict={dict} />
          </div>
        </Container>
      </section>

      {/* IMPORTANT NOTICES */}
      <section className="bg-canvas-soft py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <div className="eyebrow">{c.noticesEyebrow}</div>
              <h2 className="mt-6 font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[0.98] tracking-tightest text-ink-900">
                {c.noticesTitle}
              </h2>
            </div>
            <ul className="space-y-4">
              {c.notices.map((n, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-b border-ink-200 pb-4 text-base leading-relaxed text-ink-700 last:border-b-0 sm:text-lg"
                >
                  <span className="font-display text-sm font-black tracking-[0.1em] text-brand-500">
                    0{i + 1}
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FOR COMPANIES */}
      <section className="bg-ink-900 py-24 text-white sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <div className="eyebrow">{c.businessEyebrow}</div>
              <h2 className="mt-6 font-display text-[clamp(32px,4.4vw,56px)] font-black leading-[0.98] tracking-tightest text-white">
                {c.businessTitle}
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                {c.businessBody}
              </p>
              <Link
                href={`${base}/contact`}
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink-900"
              >
                {c.businessCta}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
