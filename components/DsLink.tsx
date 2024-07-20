import { FC } from "react";
import { StyleProp, TextProps } from "react-native";
import { Link } from "expo-router";

import { I18nKeyType } from "@/i18n";
import { useTranslate } from "@/i18n/useTranslate";

type DsLinkType = {
  to: string;
  text?: string;
  children?: React.ReactNode;
  i18nKey?: I18nKeyType;
  style?: StyleProp<TextProps>;
  onPress?: () => void;
} & TextProps;

export const DsLink: FC<DsLinkType> = ({
  to,
  text,
  children,
  i18nKey,
  style,
  onPress,
  ...props
}) => {
  const label = i18nKey ? useTranslate(i18nKey) : text ?? children;

  return (
    <Link href={to} style={style} onPress={() => onPress} {...props}>
      {label}
    </Link>
  );
};
