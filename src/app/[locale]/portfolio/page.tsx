import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export default async function PortfolioPage({
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
        eyebrow="PORTFOLIO"
        title={dict.portfolioPage.title}
        subtitle={dict.portfolioPage.subtitle}
      />
      <PortfolioGrid locale={locale} dict={dict} showCta={false} />
      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
