import CartIcon from "@/assets/icons/cart.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramLogo from "@/assets/icons/instagram.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import SearchIcon from "@/assets/icons/search.svg";
import WhiteLogoIcon from "@/assets/icons/white-logo.svg";
import XLogo from "@/assets/icons/x.svg";

export const iconRegistry = {
  Cart: CartIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramLogo,
  Logo: LogoIcon,
  Search: SearchIcon,
  WhiteLogo: WhiteLogoIcon,
  X: XLogo,
};

export type IconType = keyof typeof iconRegistry;
