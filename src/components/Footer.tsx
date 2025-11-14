import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

// Main Footer component for site links, company info and socials
export const Footer = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  // Handle link click
  const handleLinkClick = (item: string): void => {
    setActiveLink(item);
    // Reset active link after navigation
    setTimeout(() => setActiveLink(null), 500);
  };

  // Footer link item component
  const FooterLink = ({ item }: { item: string }) => (
    <li
      onClick={() => handleLinkClick(item)}
      className={`
        cursor-pointer relative w-fit transition-colors
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
        after:bg-gradient-to-r after:from-red-400 after:to-red-600 after:transition-all after:duration-300
        ${
          activeLink === item
            ? "text-white after:w-full"
            : "text-white hover:text-red-500 after:w-0 hover:after:w-full"
        }
      `}
    >
      {item}
    </li>
  );

  return (
    <footer className="bg-neutral-900 text-white px-6 py-16 text-base">
      {/* Grid layout for footer content, responsive based on screen size */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">
        {/* Logo section, optional for branding */}
        <div className="flex ml-6 justify-center sm:justify-start mb-6 sm:mb-0">
          <img
            src="/logo-footer.png"
            className="h-24"
            alt="Drip-Nest logo"
          />
        </div>

        {/* Company info links section */}
        <div className="flex flex-col mx-4">
          <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">
            Company
          </h3>
          <ul className="space-y-3">
            {["About Us", "Careers", "Sustainability"].map((item) => (
              <FooterLink key={item} item={item} />
            ))}
          </ul>
        </div>

        {/* Help section for customer questions */}
        <div className="flex flex-col ml-10">
          <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">
            Help
          </h3>
          <ul className="space-y-3">
            {["Shipping", "Returns", "FAQ"].map((item) => (
              <FooterLink key={item} item={item} />
            ))}
          </ul>
        </div>

        {/* Shop category links */}
        <div className="flex flex-col mx-4">
          <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">
            Shop
          </h3>
          <ul className="space-y-3">
            {["Men", "Women", "Sneakers"].map((item) => (
              <FooterLink key={item} item={item} />
            ))}
          </ul>
        </div>

        {/* Social media icon links */}
        <div className="ml-10">
          <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">
            Follow Us
          </h3>
          <div className="grid grid-cols-2 gap-x-0 gap-y-8 mt-4 sm:flex sm:gap-6 sm:mt-0">
            {/* Social profile icons - original hover effect */}
            <a
              href="#"
              className="hover:text-red-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors"
              aria-label="Youtube"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright info */}
      <div className="text-neutral-500 text-xs text-center mt-16">
        © {new Date().getFullYear()} Drip-Nest. All rights reserved.
      </div>
    </footer>
  );
};
