import { getLocales } from "expo-localization";
import i18n, { ParseKeys } from "i18next";

import "intl-pluralrules";

import { initReactI18next } from "react-i18next";

import en from "./en.json";

export const resources = {
  en: {
    translation: en,
  },
} as const;

const locales = getLocales() ?? [];
const lng = locales[0]?.languageCode ?? "en";

void i18n
  .use({
    type: "languageDetector",
    async: true,
    detect: (cb: (lang: string) => void) => cb("en"),
  })
  .use(initReactI18next)
  .init({
    fallbackLng: lng,
    debug: false,
    resources: {
      en: {
        translation: en,
      },
    },
  });

export type I18nKeyType = ParseKeys;

export { i18n };
