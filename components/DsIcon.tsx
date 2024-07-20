import { FC } from "react";
import { SvgProps } from "react-native-svg";

import { iconRegistry, IconType } from "@/theme/icons";

type DsIconPropsType = SvgProps & {
  icon: IconType;
};

export const DsIcon: FC<DsIconPropsType> = ({ icon, ...props }) => {
  const IconComponent = iconRegistry[icon];

  return <IconComponent {...props} />;
};
