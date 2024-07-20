import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { SPACING } from "@/theme/spacing";

export const DsSearchInput: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" />
      <View style={styles.clearButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "grey",
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    gap: SPACING.TINY,
  },
  icon: {
    alignSelf: "center",
    width: 24,
    height: 24,
    backgroundColor: "blue",
  },
  input: {
    borderWidth: 1,
    padding: SPACING.SMALLER,
    flex: 1,
  },
  clearButton: {
    alignSelf: "center",
    width: 24,
    height: 24,
    backgroundColor: "green",
  },
});
