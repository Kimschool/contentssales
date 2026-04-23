import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { Services } from "@/components/Services";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default async function ServicesPage({
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
        eyebrow="SERVICES"
        title={dict.servicesPage.title}
        subtitle={dict.servicesPage.subtitle}
      />

      <Services locale={locale} dict={dict} showCta={false} />

      <section className="bg-canvas-soft py-20">
        <Container>
          <SectionHeading
            eyebrow="PROCESS"
            title={dict.servicesPage.processTitle}
            subtitle={dict.servicesPage.processSubtitle}
          />

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {dict.servicesPage.process.map((p, i) => (
              <li
                key={p.no}
                className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card"
              >
                <div className="text-[11px] font-semibold tracking-[0.22em] text-brand-600">
                  {p.no}
                </div>
                <div className="mt-2 font-display text-4xl font-black text-brand-500">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
