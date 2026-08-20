export interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}