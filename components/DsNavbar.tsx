import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { SPACING } from "@/theme/spacing";

export const DsNavbar: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  item: {},
});
