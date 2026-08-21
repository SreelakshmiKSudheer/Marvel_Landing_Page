import { Play, Plus } from "lucide-react";

import { Button } from "../../atoms/Button/Button";
import { Typography } from "../../atoms/Typography/Typography";
import { HeroBackground } from "../../molecules/HeroBackground/HeroBackground";
import { HeroMeta } from "../../molecules/HeroMeta/HeroMeta";

import type { HeroProps } from "./Hero.types";

export const Hero = ({
  backgroundImage,
  backgroundVideo,
  title,
  description,
  year,
  genre,
  duration,
  rating,
}: HeroProps) => {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-marvel-black lg:items-center">
      {/* Background */}

      <HeroBackground image={backgroundImage} video={backgroundVideo} alt={title} />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full px-4 md:px-12 pb-20 sm:pb-24 lg:pb-0">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Featured Label */}

          <Typography variant="caption" ashtml="span" className="mb-4 inline-block text-marvel-red">
            Featured
          </Typography>

          {/* Title */}

          <Typography variant="display" ashtml="h1" className="text-4xl font-extrabold text-marvel-white uppercase leading-[0.95] tracking-[0.1rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </Typography>

          {/* Metadata */}

          <div className="mt-5">
            <HeroMeta year={year} genre={genre} duration={duration} rating={rating} />
          </div>

          {/* Description */}

          <Typography variant="body" ashtml="p" className="mt-5 max-w-xl text-sm leading-6 text-marvel-white/80 sm:text-base sm:leading-7">
            {description}
          </Typography>

          {/* Actions */}

          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="primary">
              <Play size={17} fill="currentColor" />
              Watch Trailer
            </Button>

            <Button variant="secondary">
              <Plus size={18} />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-marvel-black to-transparent" />
    </section>
  );
};