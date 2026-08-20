interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const variantStyles = {
  primary: "bg-marvel-red text-marvel-white",
  secondary: "bg-marvel-silver text-marvel-black",
  outline:
    "border border-marvel-silver/40 text-marvel-silver",
};

export const Badge = ({
  children,
  variant = "outline",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        px-2.5
        py-1
        text-[10px]
        font-bold
        uppercase
        tracking-[0.15em]
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}