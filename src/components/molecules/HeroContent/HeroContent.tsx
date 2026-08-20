import { Button } from "../../atoms/Button/Button";
import { Typography } from "../../atoms/Typography/Typography";
import { HeroMeta } from "../HeroMeta/HeroMeta";
import type { HeroContentProps } from "./HeroContent.types";

export const HeroContent = ({
  title,
  description,
  year,
  genre,
  duration,
  rating,
}: HeroContentProps) => {
  return (
    <div className="relative z-10 max-w-2xl">
      <Typography variant="heading" ashtml="h1" className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
        {title}
      </Typography>

      <div className="mt-4">
        <HeroMeta year={year} genre={genre} duration={duration} rating={rating} />
      </div>

      <Typography variant="body" ashtml="p" className="mt-5 max-w-xl text-sm leading-6 text-marvel-white/80 sm:text-base sm:leading-7">
        {description}
      </Typography>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button variant="primary">
          Watch Trailer
        </Button>

        <Button variant="secondary">
          More Info
        </Button>
      </div>
    </div>
  );
};