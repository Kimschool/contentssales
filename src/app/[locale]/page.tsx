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

  // 메인 hero stats 변경에 따라 마퀴 정합성 맞춤
  // (구) 14 LANGUAGES → (신) 1000+ LOCALIZATIONS  ※ 로컬라이징 실적 강조
  const marqueeItems = [
    "CONTENT",
    "COMMERCE",
    "GLOBAL",
    "FANDOM IP",
    "STORY TO BUSINESS",
    "1000+ LOCALIZATIONS"
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
