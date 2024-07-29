import { StyleSheet, Text, View } from "react-native";

import { DsButton } from "@/components/DsButton";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>AAAAAAAAAAAAAAA</Text>
      <Text>BBBBBBBBBBBBBBB</Text>
      <DsButton i18nKey="app_name" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
