import { useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';

const sections = ["Home", "Shop", "Drop", "Contact"];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    if (location.pathname === "/shop") {
      setActiveSection("Shop");
    } else if (location.pathname === "/cart") {
      setActiveSection("Cart");
    } else if (location.pathname === "/checkout") {
      setActiveSection(""); // Nessuna sezione attiva in checkout
    } else {
      setActiveSection("Home");
    }
  }, [location]);

  const handleClick = (section: string) => {
    setActiveSection(section);

    if (section === "Shop" || section === "Drop") {
      navigate("/shop");
    } else if (section === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "Contact") {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollToContact: true } });
      } else {
        setTimeout(() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      setTimeout(() => {
        const el = document.getElementById(section.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-around items-center bg-neutral-950 text-white fixed top-0 left-0 z-50">
      <img src="/logo.png" className="w-28" alt="logo" />

      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-16 text-sm uppercase">
        {sections.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`
              text-lg cursor-pointer relative 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 
              ${activeSection === item ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
            `}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <MobileMenu onNavigate={handleClick} />

      {/* User and Cart Icons */}
      <div className="gap-x-8 hidden md:flex">
        <ShoppingBag
          className="cursor-pointer hover:text-neutral-400"
          onClick={() => navigate('/cart')}
        />
        <User className="cursor-pointer hover:text-neutral-400" />
      </div>
    </nav>
  );
};
