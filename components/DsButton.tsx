import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { I18nKeyType } from "@/i18n";

import { DsText } from "./DsText";

type DsButtonVariantType = "primary" | "text";

type DsButtonPropsType = {
  i18nKey?: I18nKeyType;
  text?: string;
  variant: DsButtonVariantType;
};

export const DsButton: FC<DsButtonPropsType> = ({ i18nKey, text }) => {
  return (
    <View style={styles.primaryButton}>
      <DsText i18nKey={i18nKey} text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  textButton: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});
