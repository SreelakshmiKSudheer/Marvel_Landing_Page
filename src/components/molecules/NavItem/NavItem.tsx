import type { NavItemProps } from "./NavItem.types";

export const NavItem = ({
  label,
  href,
  active = false,
  onClick,
}: NavItemProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative
        py-2
        text-xs
        font-bold
        uppercase
        tracking-[0.12em]
        transition-colors
        duration-300
        ${
          active
            ? "text-marvel-red"
            : "text-marvel-white hover:text-marvel-red"
        }
        
        after:absolute
        after:bottom-0
        after:left-0
        after:h-px
        after:bg-marvel-red
        after:transition-all
        after:duration-300
        
        ${
          active
            ? "after:w-full"
            : "after:w-0 hover:after:w-full"
        }
      `}
    >
      {label}
    </a>
  );
}