export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Universe",
    links: [
      { label: "Explore", href: "/universe" },
      { label: "Timeline", href: "/universe/timeline" },
      { label: "Locations", href: "/universe/locations" },
      { label: "Multiverse", href: "/universe/multiverse" },
    ],
  },
  {
    title: "Movies",
    links: [
      { label: "All Movies", href: "/movies" },
      { label: "Trailers", href: "/movies/trailers" },
      { label: "Releases", href: "/movies/releases" },
      { label: "Collections", href: "/movies/collections" },
    ],
  },
  {
    title: "Series",
    links: [
      { label: "All Series", href: "/series" },
      { label: "Disney+", href: "/series/disney-plus" },
      { label: "Upcoming", href: "/series/upcoming" },
      { label: "Collections", href: "/series/collections" },
    ],
  },
  {
    title: "Comics",
    links: [
      { label: "New Comics", href: "/comics/new" },
      { label: "Digital Comics", href: "/comics/digital" },
      { label: "Collections", href: "/comics/collections" },
      { label: "Creators", href: "/comics/creators" },
    ],
  },
  {
    title: "Characters",
    links: [
      { label: "All Characters", href: "/characters" },
      { label: "Teams", href: "/characters/teams" },
      { label: "Villains", href: "/characters/villains" },
      { label: "Avengers", href: "/characters/avengers" },
    ],
  },
  {
    title: "Games",
    links: [
      { label: "All Games", href: "/games" },
      { label: "News", href: "/games/news" },
      { label: "Download", href: "/games/download" },
      { label: "Support", href: "/games/support" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Latest News", href: "/news" },
      { label: "Videos", href: "/news/videos" },
      { label: "Podcasts", href: "/news/podcasts" },
      { label: "Events", href: "/news/events" },
    ],
  },
  {
    title: "Marvel Unlimited",
    links: [
      { label: "Subscribe", href: "/unlimited/subscribe" },
      { label: "Benefits", href: "/unlimited/benefits" },
      { label: "FAQ", href: "/unlimited/faq" },
    ],
  },
];

export const legalLinks: FooterLink[] = [
  { label: "Terms of Use", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Do Not Sell My Personal Information", href: "/legal/do-not-sell" },
];
