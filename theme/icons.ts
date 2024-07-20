import CartIcon from "@/assets/icons/cart.svg";
import LogoIcon from "@/assets/icons/logo.svg";

export const iconRegistry = {
  Cart: CartIcon,
  Logo: LogoIcon,
};

export type IconType = keyof typeof iconRegistry;
