import type { HeroMetaProps } from "./HeroMeta.types";

export const HeroMeta = ({
  year,
  genre,
  duration,
  rating,
}: HeroMetaProps) => {
  const metadata = [year, genre, duration, rating].filter(Boolean);

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-marvel-silver">
      {metadata.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-2">
          {index > 0 && <span className="text-marvel-red">•</span>}
          {item}
        </span>
      ))}
    </div>
  );
};