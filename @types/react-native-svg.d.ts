// Required due to `moduleSuffixes` in `tsconfig.json` clashing with `react-native-svg`'s `SvgProps` type.
// See: https://github.com/software-mansion/react-native-svg/issues/1818

import { StyleProp } from "react-native";

declare module "react-native-svg" {
  export interface SvgProps {
    stroke?: string;
    fill?: string;
    opacity?: number;
    width?: number;
    height?: number;
    color?: string;
    style?: StyleProp;
  }
}
