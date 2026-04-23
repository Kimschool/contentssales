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

      <section className="py-20">
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
                className="border-gradient relative overflow-hidden p-6"
              >
                <div className="text-[11px] font-semibold tracking-[0.22em] text-ink-200/70">
                  {p.no}
                </div>
                <div className="mt-2 font-display text-5xl font-black text-gradient">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-200/80">
                  {p.desc}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
