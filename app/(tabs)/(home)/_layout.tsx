import { Slot } from "expo-router";

import { DsNavbar } from "@/components";

export default function HomeLayout() {
  return (
    <>
      <DsNavbar />
      <Slot />
    </>
  );
}
