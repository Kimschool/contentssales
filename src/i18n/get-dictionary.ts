import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  ko: () => import("./dictionaries/ko.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  ja: () => import("./dictionaries/ja.json").then((m) => m.default)
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["ko"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.ko;
  return loader();
}
