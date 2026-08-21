export interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const featuredNews: NewsItem = {
  id: "deadpool-wolverine",
  category: "Featured",
  title: "Deadpool & Wolverine",
  description: "Two legends. One chaotic mission. Watch the epic adventure now.",
  image: "/images/characters/wolverine.jpg",
  href: "/movies/deadpool-and-wolverine",
};

export const newsGrid: NewsItem[] = [
  {
    id: "loki-season-2",
    category: "New Series",
    title: "Loki Season 2",
    description: "Stream now on Disney+.",
    image: "/images/characters/loki.jpg",
    href: "/series/loki",
  },
  {
    id: "venom-36",
    category: "New Comic",
    title: "Venom #36",
    description: "The symbiote saga continues.",
    image: "/images/story/comic.jpeg",
    href: "/comics/venom-36",
  },
  {
    id: "captain-america-brave-new-world",
    category: "Latest Trailer",
    title: "Captain America: Brave New World",
    description: "Official trailer out now.",
    image: "/images/characters/captainamerica.jpg",
    href: "/movies/captain-america-brave-new-world",
  },
  {
    id: "sdcc-2024-highlights",
    category: "Marvel News",
    title: "SDCC 2024 Highlights",
    description: "All the biggest announcements.",
    image: "/images/story/movie.jpeg",
    href: "/news/sdcc-2024-highlights",
  },
];
