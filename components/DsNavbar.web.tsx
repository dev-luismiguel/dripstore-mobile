import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "@/theme/colors";
import { SPACING } from "@/theme/spacing";

import { DsButton } from "./DsButton";
import { DsIcon } from "./DsIcon";
import { DsSearchInput } from "./DsSearchInput";
import { DsShoppingCart } from "./DsShoppingCart";
import { DsText } from "./DsText";

export const DsNavbar: FC = () => {
  return (
    <View style={styles.innerContainer}>
      <DsIcon icon="Logo" />
      <DsText text="Digital Store" style={styles.title} />
      <DsSearchInput />
      <DsButton text="Cadastre-se hahaha" />
      <DsButton text="Entrar" />
      <DsShoppingCart />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    padding: SPACING.LARGE,
    gap: SPACING.NORMAL,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.primary,
    fontWeight: "semibold",
    fontSize: 36,
  },
  red: {
    backgroundColor: "red",
  },
  orange: {
    backgroundColor: "orange",
  },
  blue: {
    backgroundColor: "blue",
  },

  item: {},
});
