import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={dict.aboutPage.title}
        subtitle={dict.aboutPage.subtitle}
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink-100 lg:grid-cols-2">
            <article className="bg-white p-10 sm:p-14">
              <div className="eyebrow">Mission</div>
              <h3 className="mt-6 font-display text-3xl font-black leading-tight tracking-tightest text-ink-900 sm:text-4xl">
                {dict.aboutPage.missionTitle}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
                {dict.aboutPage.mission}
              </p>
            </article>

            <article className="bg-white p-10 sm:p-14">
              <div className="eyebrow">Vision</div>
              <h3 className="mt-6 font-display text-3xl font-black leading-tight tracking-tightest text-ink-900 sm:text-4xl">
                {dict.aboutPage.visionTitle}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
                {dict.aboutPage.vision}
              </p>
            </article>
          </div>

          <div className="mt-16 grid gap-10 border-t border-ink-100 pt-16 md:grid-cols-3">
            {dict.aboutPage.info.map((i) => (
              <div key={i.label}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                  {i.label}
                </div>
                <div className="mt-3 font-display text-xl font-black text-ink-900">
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
