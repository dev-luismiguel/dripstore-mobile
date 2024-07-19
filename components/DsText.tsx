import { FC } from "react";
import { Text } from "react-native";

import { I18nKeyType } from "@/i18n";
import { useTranslate } from "@/i18n/useTranslate";

type DsTextPropsType = {
  i18nKey?: I18nKeyType;
  text?: string | number;
  children?: React.ReactNode;
};

export const DsText: FC<DsTextPropsType> = ({ i18nKey, text, children }) => {
  const label = i18nKey ? useTranslate(i18nKey) : text ?? children;

  return <Text>{label}</Text>;
};
