import { FC } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { SPACING } from "@/theme/spacing";

export const DsNavbar: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.logo, styles.blue]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING.NORMAL,
  },
  logo: {
    height: 40,
    width: 40,
    borderWidth: 1,
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
