import type { ButtonProps } from "./Button.types";

const variantStyles = {
  primary:
    "bg-marvel-red text-marvel-white hover:bg-marvel-red-hover",

  secondary:
    "bg-marvel-white text-marvel-black hover:bg-marvel-silver",

  ghost:
    "border border-marvel-white/20 bg-transparent text-marvel-white hover:border-marvel-red hover:text-marvel-red",
};

const sizeStyles = {
  sm: "min-h-8 p-4 text-xs",
  md: "min-h-10 p-6 text-sm",
  lg: "min-h-13 p-8 text-base",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        border
        border-transparent
        font-bold
        uppercase
        tracking-wider
        transition-all
        duration-300
        hover:-translate-y-0.5
        disabled:pointer-events-none
        disabled:opacity-50
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}