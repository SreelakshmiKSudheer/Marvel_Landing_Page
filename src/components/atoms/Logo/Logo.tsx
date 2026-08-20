import type { LogoProps } from "./Logo.types";

import marvelLogo from "../../../assets/icons/marvel_logo.jpg";

const sizeStyles = {
  sm: "w-16",
  md: "w-20",
  lg: "w-24",
};

export const Logo = ({
  size = "md",
  className = "",
}: LogoProps) => {
  return (
    <a
      href="/"
      aria-label="Marvel home"
      className={`inline-flex shrink-0 ${className}`}
    >
      <img
        src={marvelLogo}
        alt="Marvel"
        className={`h-auto ${sizeStyles[size]}`}
      />
    </a>
  );
}