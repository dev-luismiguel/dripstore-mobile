import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { DsIcon } from "./DsIcon";

export const DsShoppingCart: FC = () => {
  return (
    <View style={styles.container}>
      <DsIcon icon="Cart" />
      <View style={styles.notificationBadge}>
        <Text style={{ color: "white", fontSize: 10 }}>10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  notificationBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
