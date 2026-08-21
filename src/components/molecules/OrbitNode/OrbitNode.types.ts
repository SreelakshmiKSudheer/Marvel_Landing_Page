import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

export interface OrbitNodeProps {
  title: string;
  href: string;
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  style?: CSSProperties;
}
