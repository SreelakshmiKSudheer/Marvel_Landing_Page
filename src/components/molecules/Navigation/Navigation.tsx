import { NavItem } from "../NavItem/NavItem";
import type { NavigationProps } from "./Navigation.types";

export const Navigation = ({
  items,
  activePath = "/",
}: NavigationProps) => {
  return (
    <nav aria-label="Main navigation">
      <ul
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:gap-8
        "
      >
        {items.map((item) => (
          <li key={item.href}>
            <NavItem
              label={item.label}
              href={item.href}
              active={item.href === activePath}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};