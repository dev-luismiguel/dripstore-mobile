import { StyleSheet, View } from "react-native";

import { DsFooter } from "@/components";
import { DsText } from "@/components/DsText";

export default function HomeScreen() {
  return (
    <View>
      <DsText>HomeScreen</DsText>
      <DsFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
