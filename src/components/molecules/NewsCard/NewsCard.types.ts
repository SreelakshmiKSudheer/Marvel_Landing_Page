export interface NewsCardProps {
  category: string;
  title: string;
  description?: string;
  image: string;
  href: string;
  variant?: "default" | "featured";
  className?: string;
}
