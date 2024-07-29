import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { useTranslator } from "@/i18n/useTranslator";
import { colors } from "@/theme/colors";
import { SPACING } from "@/theme/spacing";

import { DsIcon } from "./DsIcon";

export const DsSearchInput: FC = () => {
  const { t } = useTranslator();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={t("search_bar.placeholder")}
        placeholderTextColor={colors.darkGray3_60}
      />
      <DsIcon icon="Search" style={styles.searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.darkGray2_04,
    flex: 1,
    borderRadius: 8,
    gap: SPACING.TINY,
    padding: SPACING.TINY,
  },
  input: {
    padding: SPACING.SMALLER,
    flex: 1,
  },
  searchIcon: {
    alignSelf: "center",
    width: 24,
    height: 24,
    marginRight: SPACING.SMALLER,
  },
});
