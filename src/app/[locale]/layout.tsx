import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-canvas text-ink-50">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-glow-gradient" />
        <Header locale={locale} dict={dict} />
        <main className="relative">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
