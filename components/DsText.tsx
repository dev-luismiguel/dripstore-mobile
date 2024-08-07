import { FC } from "react";
import { StyleProp, Text, TextProps } from "react-native";

import { I18nKeyType } from "@/i18n";
import { useTranslate } from "@/i18n/useTranslate";

type DsTextPropsType = {
  i18nKey?: I18nKeyType;
  text?: string | number;
  children?: React.ReactNode;
  style?: StyleProp<TextProps>;
} & TextProps;

export const DsText: FC<DsTextPropsType> = ({
  i18nKey,
  text,
  children,
  style,
  ...props
}) => {
  const label = i18nKey ? useTranslate(i18nKey) : text ?? children;

  return (
    <Text style={style} {...props}>
      {label}
    </Text>
  );
};
