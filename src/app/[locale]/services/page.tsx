import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { Services } from "@/components/Services";
import { CtaBanner } from "@/components/CtaBanner";
import { Container } from "@/components/Container";

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
      <Services locale={locale} dict={dict} showCta={false} />

      <section className="bg-canvas-soft py-28 sm:py-32">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <div className="eyebrow">Process</div>
              <h2 className="mt-6 font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[0.95] tracking-tightest text-ink-900">
                {dict.servicesPage.processTitle}
              </h2>
            </div>
            <p className="text-base leading-relaxed text-ink-500 sm:text-lg">
              {dict.servicesPage.processSubtitle}
            </p>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-5">
            {dict.servicesPage.process.map((p, i) => (
              <li key={p.no} className="bg-white p-8">
                <div className="font-display text-[44px] font-black leading-none tracking-tightest text-brand-500">
                  0{i + 1}
                </div>
                <h3 className="mt-8 font-display text-base font-black text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{p.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
