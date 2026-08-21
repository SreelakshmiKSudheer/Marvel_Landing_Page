export interface Character {
  id: string;
  name: string;
  alias?: string;
  image: string;
  href?: string;
  description: string;
  detail: string;
}

export const characterData: Character[] = [
  {
    id: "spiderman",
    name: "Spider-Man",
    alias: "Peter Parker",
    image: "/images/characters/spiderman.jpg",
    href: "/characters/spiderman",
    description: "Your Friendly Neighborhood Hero",
    detail: "Bitten by a radioactive spider, Peter Parker gained abilities to crawl walls and sense danger, fighting for justice in New York City.",
  },
  {
    id: "ironman",
    name: "Iron Man",
    alias: "Tony Stark",
    image: "/images/characters/ironman.jpg",
    href: "/characters/ironman",
    description: "Genius. Billionaire. Philanthropist.",
    detail: "Genius engineer Tony Stark crafted an arc-reactor powered suit of high-tech armor to protect the world as Iron Man.",
  },
  {
    id: "captainamerica",
    name: "Captain America",
    alias: "Steve Rogers",
    image: "/images/characters/captainamerica.jpg",
    href: "/characters/captainamerica",
    description: "The First Avenger",
    detail: "Armed with an indestructible Vibranium shield, Super-Soldier Steve Rogers leads the Avengers with unmatched honor and leadership.",
  },
  {
    id: "thor",
    name: "Thor",
    alias: "God of Thunder",
    image: "/images/characters/thor.jpg",
    href: "/characters/thor",
    description: "Mighty God of Thunder",
    detail: "Wielding the mystic hammer Mjolnir, Asgardian prince Thor controls thunder and lightning to shield Earth and the Nine Realms.",
  },
  {
    id: "wolverine",
    name: "Wolverine",
    alias: "Logan",
    image: "/images/characters/wolverine.jpg",
    href: "/characters/wolverine",
    description: "The Mutant Weapon X",
    detail: "With razor-sharp Adamantium claws and superhuman regeneration, Logan fights ferociously for mutant rights and justice.",
  },
  {
    id: "loki",
    name: "Loki",
    alias: "God of Mischief",
    image: "/images/characters/loki.jpg",
    href: "/characters/loki",
    description: "Master of Illusion",
    detail: "The cunning Asgardian master of magic and deception navigates timelines and destiny, morphing from villain to cosmic savior.",
  },
  {
    id: "deadpool",
    name: "Deadpool",
    alias: "Wade Wilson",
    image: "/images/characters/deadpool.jpg",
    href: "/characters/deadpool",
    description: "The Merc with a Mouth",
    detail: "With accelerated healing and a sharp wit, Deadpool fights for justice while embracing his chaotic nature.",
  },
];
