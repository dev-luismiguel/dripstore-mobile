import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SPACING } from "@/theme/spacing";

import { DsIcon } from "./DsIcon";
import { DsSearchInput } from "./DsSearchInput";
import { DsShoppingCart } from "./DsShoppingCart";

export const DsNavbar: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <DsIcon icon="Logo" />
        <DsSearchInput />
        <DsShoppingCart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  innerContainer: {
    paddingHorizontal: SPACING.NORMAL,
    gap: SPACING.NORMAL,
    flexDirection: "row",
    alignItems: "center",
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
