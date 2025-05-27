import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile Card", path: "/profile" },
    { name: "Product List", path: "/products" },
    { name: "Carousel", path: "/carousel" },
    { name: "Counter App", path: "/counter" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src="https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
              alt="Starbucks Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-green-800 select-none">Starbucks</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-green-900 font-medium">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-green-600 transition duration-200"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-green-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-green-900 font-medium text-2xl md:hidden">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="hover:text-green-600 transition duration-200"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
