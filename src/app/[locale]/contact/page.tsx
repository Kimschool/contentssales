import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({
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
        eyebrow="CONTACT"
        title={dict.contactPage.title}
        subtitle={dict.contactPage.subtitle}
      />

      <section className="py-10 pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
            <div className="border-gradient p-8 sm:p-10">
              <ContactForm dict={dict} />
            </div>

            <aside className="space-y-4">
              {dict.contactPage.info.map((i) => (
                <div
                  key={i.label}
                  className="rounded-3xl border border-white/10 bg-canvas-surface p-6"
                >
                  <div className="text-[11px] font-semibold tracking-[0.22em] text-ink-200/70">
                    {i.label}
                  </div>
                  <div className="mt-2 font-display text-lg font-bold text-white">
                    {i.value}
                  </div>
                </div>
              ))}

              <div className="rounded-3xl bg-hero-gradient p-6 shadow-glow-pink">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-white/80">
                  RESPONSE TIME
                </div>
                <div className="mt-2 font-display text-2xl font-black text-white">
                  &lt; 2 business days
                </div>
                <p className="mt-2 text-sm text-white/80">
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
