import { ChevronRight } from "lucide-react";
import { Icon } from "../../atoms/Icon/Icon";
import type { NewsCardProps } from "./NewsCard.types";

export const NewsCard = ({
  category,
  title,
  description,
  image,
  href,
  variant = "default",
  className = "",
}: NewsCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <a
      href={href}
      className={`
        group relative block h-full w-full overflow-hidden border border-marvel-white/10
        ${className}
      `}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-marvel-black via-marvel-black/50 to-transparent transition-opacity duration-500 group-hover:from-marvel-black/95" />

      <div
        className={`
          relative flex h-full flex-col justify-end gap-2 p-5
          ${isFeatured ? "lg:gap-4 lg:p-10" : ""}
        `}
      >
        <span
          className={`
            inline-flex w-fit items-center text-[10px] font-bold uppercase tracking-[0.15em] text-marvel-red
            ${isFeatured ? "lg:text-xs" : ""}
          `}
        >
          {category}
        </span>

        <h3
          className={`
            font-marvel-display text-xl font-bold uppercase leading-[0.95] tracking-wide text-marvel-white
            ${isFeatured ? "text-3xl lg:text-5xl" : "text-lg"}
          `}
        >
          {title}
        </h3>

        {description && (
          <p
            className={`
              max-w-md text-xs text-marvel-silver
              ${isFeatured ? "text-sm lg:text-base" : ""}
            `}
          >
            {description}
          </p>
        )}

        <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-marvel-white transition-colors duration-300 group-hover:text-marvel-red">
          {isFeatured ? "Watch Trailer" : "Read More"}
          <Icon icon={ChevronRight} size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};
