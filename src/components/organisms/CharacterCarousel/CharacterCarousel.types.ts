import type { Character } from "../../../data/characters";

export interface CharacterCarouselProps {
  characters?: Character[];
  title?: string;
  description?: string;
}
