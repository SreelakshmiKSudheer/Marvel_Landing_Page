import { Icon } from "../../atoms/Icon/Icon";
import type { OrbitNodeProps } from "./OrbitNode.types";

const sizeStyles = {
  sm: "h-20 w-20 lg:h-24 lg:w-24",
  md: "h-24 w-24 lg:h-32 lg:w-32",
  lg: "h-28 w-28 lg:h-40 lg:w-40",
};

const iconSizes = {
  sm: 20,
  md: 26,
  lg: 32,
};

export const OrbitNode = ({
  title,
  href,
  icon,
  size = "md",
  style,
}: OrbitNodeProps) => {
  return (
    <a
      href={href}
      style={style}
      className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 lg:gap-4"
    >
      <span
        className={`
          relative flex items-center justify-center rounded-full
          border border-marvel-white/15
          bg-[radial-gradient(circle_at_35%_30%,rgba(237,29,36,0.35),rgba(0,0,0,0.9)_70%)]
          shadow-[0_0_40px_-8px_rgba(237,29,36,0.55)]
          transition-all duration-500 ease-out
          group-hover:scale-110
          group-hover:shadow-[0_0_55px_-4px_rgba(237,29,36,0.85)]
          group-hover:border-marvel-red
          ${sizeStyles[size]}
        `}
      >
        <span className="absolute inset-0 rounded-full border border-marvel-white/10 animate-pulse" />
        <Icon
          icon={icon}
          size={iconSizes[size]}
          className="text-marvel-white transition-colors duration-300 group-hover:text-marvel-red"
        />
      </span>

      <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.15em] text-marvel-silver transition-colors duration-300 group-hover:text-marvel-white lg:text-sm">
        {title}
      </span>
    </a>
  );
};
