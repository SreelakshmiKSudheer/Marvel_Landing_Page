import type { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const Icon = ({
  icon: IconComponent,
  size = 20,
  className = "",
  strokeWidth = 1.8,
}: IconProps) => {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  )
}

export default Icon
