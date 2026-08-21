import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { Logo } from "../../atoms/Logo/Logo";
import { Divider } from "../../atoms/Divider/Divider";
import { footerColumns, legalLinks } from "../../../data/footer";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/marvel", icon: FaFacebook },
  { label: "X", href: "https://x.com/marvel", icon: FaTwitter },
  { label: "Instagram", href: "https://instagram.com/marvel", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com/marvel", icon: FaYoutube },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-marvel-white/10 bg-marvel-black px-6 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-360">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          <Logo size="md" className="shrink-0 h-10 w-20" />

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-8 lg:gap-x-8"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-marvel-white">
                  {column.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-marvel-silver transition-colors duration-300 hover:text-marvel-red"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <Divider className="mt-14" />

        <div className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;

              return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-marvel-white/15 text-marvel-silver transition-all duration-300 hover:border-marvel-red hover:text-marvel-red"
              >
                <SocialIcon size={16} />
              </a>
              );
            })}
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-marvel-silver">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors duration-300 hover:text-marvel-red">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-[11px] text-marvel-silver-dark">© {year} MARVEL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
