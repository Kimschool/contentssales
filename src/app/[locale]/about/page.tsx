import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export default async function AboutPage({
  params
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={dict.aboutPage.title}
        subtitle={dict.aboutPage.subtitle}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="border-gradient relative overflow-hidden p-10">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-ink-200/70">
                MISSION
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                {dict.aboutPage.missionTitle}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink-100/90">
                {dict.aboutPage.mission}
              </p>
            </article>

            <article className="border-gradient relative overflow-hidden p-10">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-ink-200/70">
                VISION
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                {dict.aboutPage.visionTitle}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink-100/90">
                {dict.aboutPage.vision}
              </p>
            </article>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {dict.aboutPage.info.map((i) => (
              <div
                key={i.label}
                className="rounded-3xl border border-white/10 bg-canvas-surface p-6"
              >
                <div className="text-[11px] font-semibold tracking-[0.22em] text-ink-200/70">
                  {i.label}
                </div>
                <div className="mt-3 font-display text-lg font-bold text-white">
                  {i.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
