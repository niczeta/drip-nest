import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export const MobileMenu = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden flex items-center w-full relative">
      {/* Menu Button */}
      <button onClick={toggleMenu} className="text-white ml-auto z-50">
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent the menu from closing when clicking on the background
      >
        <div
          className={`bg-neutral-950 w-full h-full text-center p-6 transition-all duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          <ul className="text-white text-lg uppercase space-y-6 flex flex-col justify-center items-center h-full">
            {['Home', 'Shop', 'Drop', 'Contact'].map((item) => (
              <li
                key={item}
                onClick={() => {
                  onNavigate(item); // Navigate to the section
                  toggleMenu(); // Close the menu when an item is selected
                }}
                className="cursor-pointer hover:text-red-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
