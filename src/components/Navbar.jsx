import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Large Screen */}
      <div
        className={`md:flex flex justify-between items-center fixed top-0 left-0 w-full z-10 text-gray-700 px-5 sm:px-6 md:px-8 lg:px-10 py-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-blue-500"
        }`}
      >
        <div className="cursor-pointer font-bold text-2xl hover:scale-105">
          Phreddy
        </div>
        <div className="md:flex justify-between space-x-4 hidden">
          <div className="cursor-pointer hover:text-blue-300 font-semibold text-xl">
            Blog
          </div>
          <div className="cursor-pointer hover:text-blue-300 font-semibold text-xl">
            About Us
          </div>
          <div className="cursor-pointer hover:text-blue-300 font-semibold text-xl">
            Contact
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold text-xl rounded-md py-2 px-4">
            Login
          </button>
        </div>
        <div onClick={toggleMobileMenu} className="flex md:hidden">
          {isMobileMenuOpen ? (
            <IoMdClose size={20} style={{ strokeWidth: 2 }} className="" />
          ) : (
            <CiMenuFries size={20} style={{ strokeWidth: 2 }} className="" />
          )}
        </div>
      </div>

      {/* Mobile Screen */}
      {isMobileMenuOpen && (
        <div className="px-6 py-4 transition-all duration-300">
          <div
            className="fixed top-0 left-0 w-full h-[40vh] bg-blue-500 text-white px-6 py-4"
            onClick={closeMobileMenu}
          >
            <div className="text-xl font-bold mb-4">Mobile Menu</div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">
              About Us
            </div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">Blog</div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">
              Contact
            </div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">Login</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
