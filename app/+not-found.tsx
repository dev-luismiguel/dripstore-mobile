import { StyleSheet } from "react-native";

import { DsText } from "@/components/DsText";

export default function NotFoundScreen() {
  return <DsText text="Not found" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
