import { useTranslation } from "react-i18next";

import { i18n, I18nKeyType } from ".";

/**
 * To change the language, import i18next directly into the file, and call changeLanguage
 */
export const useTranslate = (key?: I18nKeyType, options = {}) => {
  const { t } = useTranslation();

  return key ? t(key, { i18n, ...options }) : undefined;
};
