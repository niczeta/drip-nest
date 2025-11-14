import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { MobileMenu } from "./MobileMenu";

// Main navigation sections
const sections = ["Home", "Shop", "Community", "Drops", "Hit Me Up"];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("Home");

  // Updates active section based on current route
  const updateActiveSection = useCallback(() => {
    const path = location.pathname;
    if (path === "/shop") setActiveSection("Shop");
    else if (path === "/community") setActiveSection("Community");
    else if (path === "/drops") setActiveSection("Drops");
    else if (path === "/cart") setActiveSection("Cart");
    else if (path === "/checkout") setActiveSection("");
    else if (path === "/auth") setActiveSection("Auth");
    else if (path === "/" && location.state?.scrollToContact)
      setActiveSection("Hit Me Up");
    else setActiveSection("Home");
  }, [location]);

  // Run active section update on route change
  useEffect(() => {
    updateActiveSection();
  }, [location, updateActiveSection]);

  // Scrolls smoothly to a page element by ID
  const scrollToElement = (id: string): void => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Handles navigation and scrolling for each section
  const handleClick = (section: string): void => {
    setActiveSection(section);

    switch (section) {
      case "Home":
        // Home navigation & scroll to top
        if (location.pathname !== "/") {
          navigate("/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "Hit Me Up":
        // Handle contact scroll from root or navigate first
        if (location.pathname !== "/") {
          navigate("/", { state: { scrollToContact: true } });
        } else {
          scrollToElement("contact");
        }
        break;
      case "Shop":
        navigate("/shop");
        break;
      case "Community":
        navigate("/community");
        break;
      case "Drops":
        navigate("/drops");
        break;
      default:
        // Fallback scroll for other sections
        scrollToElement(section.toLowerCase());
    }
  };

  // Handle user account icon click - navigate to auth page
  const handleUserClick = (): void => {
    navigate("/auth");
  };

  // Handle cart click
  const handleCartClick = (): void => {
    navigate("/cart");
  };

  return (
    <nav
      className="w-full px-6 py-4 flex justify-around items-center bg-neutral-950 text-white fixed top-0 left-0 z-50"
      role="navigation"
      aria-label="Primary"
    >
      {/* Logo */}
      <img src="/logo.png" className="w-28" alt="logo" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-16 text-sm uppercase" role="menubar">
        {sections.map((item) => (
          <li
            key={item}
            role="menuitem"
            tabIndex={0}
            onClick={() => handleClick(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleClick(item);
            }}
            className={`
              text-lg cursor-pointer relative 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
              ${
                activeSection === item
                  ? "text-white after:w-full after:bg-gradient-to-r after:from-red-400 after:to-red-600"
                  : "text-white hover:text-red-500 after:w-0 after:bg-gradient-to-r after:from-red-400 after:to-red-600 hover:after:w-full"
              }
            `}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <MobileMenu onNavigate={handleClick} />

      {/* User and Cart Icons with Text */}
      <div className="gap-x-16 hidden md:flex items-center">
        {/* Cart */}
        <div
          onClick={handleCartClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCartClick();
          }}
          aria-label="Cart"
          className={`
            flex items-center gap-2 text-lg cursor-pointer relative 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
            ${
              activeSection === "Cart"
                ? "text-white after:w-full after:bg-gradient-to-r after:from-red-400 after:to-red-600"
                : "text-white hover:text-red-500 after:w-0 after:bg-gradient-to-r after:from-red-400 after:to-red-600 hover:after:w-full"
            }
          `}
        >
          <ShoppingBag size={20} />
          <span>Cart</span>
        </div>

        {/* Account */}
        <div
          onClick={handleUserClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleUserClick();
          }}
          aria-label="User account"
          className={`
            flex items-center gap-2 text-lg cursor-pointer relative 
            after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300
            ${
              activeSection === "Auth"
                ? "text-white after:w-full after:bg-gradient-to-r after:from-red-400 after:to-red-600"
                : "text-white hover:text-red-500 after:w-0 after:bg-gradient-to-r after:from-red-400 after:to-red-600 hover:after:w-full"
            }
          `}
        >
          <User size={20} />
          <span>Account</span>
        </div>
      </div>
    </nav>
  );
};
