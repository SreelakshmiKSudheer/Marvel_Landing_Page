import type { HeroBackgroundProps } from "./HeroBackground.types";

export const HeroBackground = ({
  image,
  alt = "",
  overlay = true,
}: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={image} alt={alt} className="h-full w-full object-cover object-center" />

      {overlay && (
        <div className="absolute inset-0 bg-linear-to-r from-marvel-black via-marvel-black/60 to-transparent" />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-linear-to-t from-marvel-black via-transparent to-marvel-black/20" />
      )}
    </div>
  );
};