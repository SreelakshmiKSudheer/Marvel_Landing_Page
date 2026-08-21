import { Shield, Zap, Rocket, Infinity as InfinityIcon, Building2, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface UniverseNode {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
  /** position as a percentage of the container, desktop layout only */
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
}

export const universeNodes: UniverseNode[] = [
  {
    id: "avengers",
    title: "Avengers",
    href: "/characters/avengers",
    icon: Shield,
    x: 27,
    y: 18,
    size: "md",
  },
  {
    id: "xmen",
    title: "X-Men",
    href: "/characters/xmen",
    icon: Zap,
    x: 58,
    y: 16,
    size: "md",
  },
  {
    id: "guardians",
    title: "Guardians",
    href: "/characters/guardians",
    icon: Rocket,
    x: 10,
    y: 56,
    size: "sm",
  },
  {
    id: "multiverse",
    title: "Multiverse",
    href: "/universe/multiverse",
    icon: InfinityIcon,
    x: 42,
    y: 55,
    size: "md",
  },
  {
    id: "fantastic-four",
    title: "Fantastic Four",
    href: "/characters/fantastic-four",
    icon: Building2,
    x: 24,
    y: 90,
    size: "sm",
  },
  {
    id: "spider-verse",
    title: "Spider-Verse",
    href: "/universe/spider-verse",
    icon: Globe2,
    x: 79,
    y: 52,
    size: "lg",
  },
];

export const universeConnections: [string, string][] = [
  ["avengers", "xmen"],
  ["avengers", "multiverse"],
  ["xmen", "multiverse"],
  ["guardians", "multiverse"],
  ["multiverse", "fantastic-four"],
  ["multiverse", "spider-verse"],
  ["xmen", "spider-verse"],
];
