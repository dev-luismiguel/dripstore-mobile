import { FC } from "react";
import { View } from "react-native";

import { I18nKeyType } from "@/i18n";

import { DsText } from "./DsText";

type DsButtonPropsType = {
  i18nKey?: I18nKeyType;
};

export const DsButton: FC<DsButtonPropsType> = ({ i18nKey }) => {
  return (
    <View>
      <DsText i18nKey={i18nKey} />
    </View>
  );
};
