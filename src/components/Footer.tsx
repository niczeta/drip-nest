import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => (
  <footer className="bg-neutral-900 text-white px-6 py-16 text-base">
    <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12">

      {/* Logo Section (added at the beginning) */}
      <div className="flex ml-6 justify-center sm:justify-start mb-6 sm:mb-0">
        <img
          src="/logo-footer2.png"
          className="h-24"
        />
      </div>

      {/* Company Section */}
      <div className="flex flex-col mx-4">
        <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">Company</h3>
        <ul className="space-y-3">
          {["About Us", "Careers", "Sustainability"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative w-fit 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:bg-red-600 after:transition-all after:duration-300 
              after:w-0 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Help Section */}
      <div className="flex flex-col ml-10">
        <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">Help</h3>
        <ul className="space-y-3">
          {["Shipping", "Returns", "FAQ"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative w-fit 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:bg-red-600 after:transition-all after:duration-300 
              after:w-0 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Shop Section */}
      <div className="flex flex-col mx-4">
        <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">Shop</h3>
        <ul className="space-y-3">
          {["Men", "Women", "Sneakers"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative w-fit 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
              after:bg-red-600 after:transition-all after:duration-300 
              after:w-0 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="ml-10">
        <h3 className="uppercase font-semibold mb-6 tracking-wide text-neutral-400 text-sm">Follow Us</h3>
        <div className="grid grid-cols-2 gap-x-0 gap-y-8 mt-4 sm:flex sm:gap-6 sm:mt-0">
          {/* Social media links */}
          <a href="#" className="hover:text-red-500"><Facebook size={22} /></a>
          <a href="#" className="hover:text-red-500"><Instagram size={22} /></a>
          <a href="#" className="hover:text-red-500"><Twitter size={22} /></a>
          <a href="#" className="hover:text-red-500"><Youtube size={22} /></a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="text-neutral-500 text-xs text-center mt-16">
      © {new Date().getFullYear()} Drip-Nest. All rights reserved.
    </div>
  </footer>
);
