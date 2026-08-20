import type { ReactNode } from "react";

type TypographyVariant =
  | "display"
  | "heading"
  | "body"
  | "caption"
  | "label";

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  className?: string;
  ashtml?: "h1" | "h2" | "h3" | "p" | "span";
}

const variantStyles: Record<TypographyVariant, string> = {
  display:
    "font-marvel-display text-5xl font-black uppercase tracking-tight",

  heading:
    "font-marvel-display text-3xl font-bold uppercase sm:text-4xl lg:text-5xl",

  body:
    "font-marvel-body text-base leading-relaxed",

  caption:
    "font-marvel-body text-sm text-marvel-silver",

  label:
    "font-marvel-body text-xs font-bold uppercase tracking-[0.15em]",
};

export const Typography = ({
  children,
  variant = "body",
  className = "",
  ashtml: Component = "p",
}: TypographyProps) => {
  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}