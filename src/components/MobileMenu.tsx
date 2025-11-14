import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, Menu, ShoppingBag, User } from 'lucide-react';

export const MobileMenu = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active section based on current route
  const getActiveSection = (): string => {
    const path = location.pathname;
    if (path === '/shop') return 'Shop';
    if (path === '/community') return 'Community';
    if (path === '/drops') return 'Drops';
    if (path === '/cart') return 'Cart';
    if (path === '/') return 'Home';
    return '';
  };

  const activeSection = getActiveSection();

  // Function to toggle the mobile menu open/closed
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  // Handle navigation and close menu
  const handleMenuItemClick = (section: string): void => {
    onNavigate(section);
    toggleMenu();
  };

  // Handle user account navigation
  const handleUserClick = (): void => {
    navigate('/auth');
    toggleMenu();
  };

  // Handle cart navigation
  const handleCartClick = (): void => {
    navigate('/cart');
    toggleMenu();
  };

  return (
    <div className="md:hidden flex items-center w-full relative">
      {/* Menu Button */}
      <button 
        onClick={toggleMenu} 
        className="text-white ml-auto z-50 p-2 hover:bg-neutral-800 rounded-lg transition-colors"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full flex flex-col bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-center p-6 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="pt-16 pb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            DRIP-NEST
          </h1>
        </div>

        {/* Navigation Items */}
        <ul className="text-white text-lg uppercase space-y-4 flex flex-col justify-center flex-1">
          {['Home', 'Shop', 'Community', 'Drops', 'Hit Me Up'].map((item, index) => {
            const isActive = activeSection === item;
            return (
              <li
                key={item}
                onClick={() => handleMenuItemClick(item)}
                className={`cursor-pointer py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 relative ${
                  isActive
                    ? 'text-red-500 font-semibold'
                    : 'text-neutral-300 hover:text-red-500'
                }`}
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Divider with gradient */}
        <div className="my-8 relative">
          <div className="border-t border-neutral-700"></div>
        </div>

        {/* User and Cart Icons - Styled Buttons */}
        <div className="flex justify-center gap-4 pb-8">
          <button
            onClick={handleCartClick}
            className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-red-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <ShoppingBag size={20} />
            <span className="text-sm font-semibold">CART</span>
          </button>
          <button
            onClick={handleUserClick}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <User size={20} />
            <span className="text-sm font-semibold">ACCOUNT</span>
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};
