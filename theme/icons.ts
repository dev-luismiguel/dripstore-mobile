import CartIcon from "@/assets/icons/cart.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramLogo from "@/assets/icons/instagram.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import WhiteLogoIcon from "@/assets/icons/white-logo.svg";
import XLogo from "@/assets/icons/x.svg";

export const iconRegistry = {
  Cart: CartIcon,
  Logo: LogoIcon,
  WhiteLogo: WhiteLogoIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramLogo,
  X: XLogo,
};

export type IconType = keyof typeof iconRegistry;
