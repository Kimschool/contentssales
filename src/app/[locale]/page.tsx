import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Strengths } from "@/components/Strengths";
import { Services } from "@/components/Services";
import { WorksImpact } from "@/components/WorksImpact";
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
    "CONTENT",
    "COMMERCE",
    "GLOBAL",
    "FANDOM IP",
    "STORY TO BUSINESS",
    "14 LANGUAGES"
  ];

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Marquee items={marqueeItems} />
      <Services locale={locale} dict={dict} />
      <Strengths dict={dict} />
      <WorksImpact locale={locale} dict={dict} />
      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
