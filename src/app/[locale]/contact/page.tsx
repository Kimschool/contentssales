import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({
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
        eyebrow="CONTACT"
        title={dict.contactPage.title}
        subtitle={dict.contactPage.subtitle}
      />

      <section className="py-20 pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr]">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 sm:p-12">
              <ContactForm dict={dict} />
            </div>

            <aside className="space-y-4">
              {dict.contactPage.info.map((i) => (
                <div
                  key={i.label}
                  className="rounded-2xl border border-ink-100 bg-white p-6"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                    {i.label}
                  </div>
                  <div className="mt-2 font-display text-base font-black text-ink-900">
                    {i.value}
                  </div>
                </div>
              ))}

              <div className="rounded-2xl bg-ink-900 p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                  Response Time
                </div>
                <div className="mt-3 font-display text-2xl font-black tracking-tightest">
                  &lt; 2 business days
                </div>
                <p className="mt-3 text-sm text-white/70">
                  {locale === "ko"
                    ? "영업일 기준 2일 이내 답변드립니다."
                    : locale === "ja"
                    ? "営業日2日以内にご連絡いたします。"
                    : "We reply within 2 business days."}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
