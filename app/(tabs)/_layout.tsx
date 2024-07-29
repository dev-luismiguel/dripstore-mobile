import React from "react";
import { Platform } from "react-native";
import { Slot, Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { colors } from "@/theme/colors";

export default function TabLayout() {
  if (Platform.OS === "web") {
    return <Slot />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
