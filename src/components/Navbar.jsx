import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold cursor-pointer hover:text-gray-300">
          Phreddy
        </div>

        {/* Hidden on small screens */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Login
          </a>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              // Multiply sign when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 p-4 space-y-2">
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 block"
              >
                About
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 block"
              >
                Contact
              </a>
              <a
                href="#"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 block"
              >
                Login
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
