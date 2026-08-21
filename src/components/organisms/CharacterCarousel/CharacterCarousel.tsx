import React, { useRef } from "react";
import { ContentCard } from "../../molecules/ContentCard/ContentCard";
import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";
import { characterData } from "../../../data/characters";
import type { CharacterCarouselProps } from "./CharacterCarousel.types";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CharacterCarousel: React.FC<CharacterCarouselProps> = ({
  // Note: Make sure the array you pass here actually contains 10 items!
  characters = characterData,
  title = "Featured Characters",
  description = "Explore the iconic heroes and legendary characters of the Marvel Multiverse.",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.75;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-marvel-black px-6 py-20 md:px-8 md:py-18">
      <div className="mx-auto max-w-360">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="w-30"></div>
          <div className="w-full">
            <SectionHeading
              title={title}
              centered={true}
            />
          </div>
          {/* Navigation Controls */}
          <div className="flex items-start gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous characters"
              className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-marvel-silver-dark/40 bg-marvel-black/80 text-marvel-white transition-all duration-300 hover:border-marvel-red hover:bg-marvel-red hover:text-marvel-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50"
            >
              <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next characters"
              className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-marvel-silver-dark/40 bg-marvel-black/80 text-marvel-white transition-all duration-300 hover:border-marvel-red hover:bg-marvel-red hover:text-marvel-white focus:outline-none focus:ring-2 focus:ring-marvel-red/50"
            >
              <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div
          ref={containerRef}
          className="mt-10 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:mt-14 lg:h-[450px] lg:gap-5"
        >
          {characters.map((character) => (
            <div
              key={character.id}
              className="
                group/wrapper relative shrink-0 
                w-[260px] sm:w-[280px] lg:w-[300px] 
                overflow-hidden p-px 
                transition-[width] duration-700 ease-in-out 
                lg:hover:w-[600px] 
                bg-linear-to-b from-marvel-silver-dark to-marvel-silver 
                shadow-lg shadow-marvel-silver/20 
                h-[400px] lg:h-full
              "
            >
              <ContentCard
                title={character.name}
                image={character.image}
                href={character.href || "#"}
                description={character.description}
                detail={character.detail}
                className="h-full w-full bg-marvel-black"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
