import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Strengths } from "@/components/Strengths";
import { Services } from "@/components/Services";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { Marquee } from "@/components/Marquee";

export default async function HomePage({
  params
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  const marqueeItems = [
    "WEBTOON PRODUCTION",
    "GLOBAL LOCALIZATION",
    "FANDOM IP",
    "14 LANGUAGES",
    "ONE-STOP PIPELINE",
    "K-CULTURE"
  ];

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Marquee items={marqueeItems} />
      <Strengths dict={dict} />
      <Services locale={locale} dict={dict} />
      <PortfolioGrid locale={locale} dict={dict} />
      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
