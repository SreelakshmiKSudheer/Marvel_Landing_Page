import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

import { Icon } from "../../atoms/Icon/Icon";
import { Logo } from "../../atoms/Logo/Logo";
import { Navigation } from "../../molecules/Navigation/Navigation";

import { navigationItems } from "../../../data/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className=" fixed inset-x-0 top-0 z-header border-b border-marvel-white/10 bg-marvel-black/90 backdrop-blur-md
      "
    >
      {/* Header Bar */}

      <div
        className=" mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-12
        "
      >
        {/* Logo */}

        <Logo
          size="md"
          className="shrink-0"
        />

        {/* Desktop Navigation */}

        <div className="hidden lg:block">
          <Navigation
            items={navigationItems}
            activePath="/"
          />
        </div>

        {/* Desktop Search */}

        <div className="hidden lg:flex lg:w-56 xl:w-64">
          <div
            className=" flex w-full items-center border-b border-marvel-white/30 transition-colors duration-300 focus-within:border-marvel-red
            "
          >
            <input
              type="search"
              placeholder="Search Marvel"
              aria-label="Search Marvel"
              className=" min-w-0 flex-1 bg-transparent px-0 py-2 text-sm text-marvel-white outline-none placeholder:text-marvel-silver-dark
              "
            />

            <Icon
              icon={Search}
              size={19}
              className="shrink-0 text-marvel-silver"
            />
          </div>
        </div>

        {/* Mobile Actions */}

        <div className="flex items-center gap-4 lg:hidden">
          {/* Search */}

          <button
            type="button"
            aria-label="Search"
            className=" text-marvel-white transition-colors duration-300 hover:text-marvel-red
            "
          >
            <Icon
              icon={Search}
              size={21}
            />
          </button>

          {/* Mobile Menu */}

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
            className=" text-marvel-white transition-colors duration-300 hover:text-marvel-red
            "
          >
            <Icon
              icon={isMenuOpen ? X : Menu}
              size={23}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}

      <div
        className={` overflow-hidden border-t border-marvel-white/10 bg-marvel-black transition-all duration-300 lg:hidden
          ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className=" px-6 py-8 sm:px-8 "
          onClick={handleMenuClose}
        >
          <Navigation
            items={navigationItems}
            activePath="/"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;