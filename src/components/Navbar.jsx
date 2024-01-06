import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/Slices/userSlice";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Large Screen */}
      <div
        className={`md:flex flex justify-between items-center fixed top-0 left-0 w-full z-10 px-5 sm:px-6 md:px-8 lg:px-10 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md text-gray-700"
            : "bg-blue-600 text-white"
        }`}
      >
        <div className="cursor-pointer font-bold text-2xl hover:scale-105">
          <Link to="/">Phreddy</Link>
        </div>
        <div className="md:flex justify-between space-x-4 hidden">
          <div className="cursor-pointer hover:text-blue-800 font-semibold text-xl">
            <Link to="/blogs">Blog</Link>
          </div>
          <div className="cursor-pointer hover:text-blue-800 font-semibold text-xl">
            <Link to="/about">About Us</Link>
          </div>
          <div className="cursor-pointer hover:text-blue-800 font-semibold text-xl">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="hidden md:flex">
          {user.user ? (
            <div className="flex justify-center space-x-3">
              <div className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold text-md rounded-md py-1 px-2">
                <Link to="/create">Create</Link>
              </div>
              <div className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold text-md rounded-md py-1 px-2">
                <Link to="/details">Profile</Link>
              </div>
              <div
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold text-md rounded-md py-1 px-2"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold text-xl rounded-md py-2 px-4">
              <Link to="/login">Want to write ?</Link>
            </div>
          )}
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
        <div className="fixed top-16 left-0 w-full z-30">
          <div
            className="w-full bg-blue-500 text-white px-6 py-4"
            onClick={closeMobileMenu}
          >
            <div className="cursor-pointer hover:text-gray-300 mb-2">
              <Link to="/about">About Us</Link>
            </div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">
              {" "}
              <Link to="/blogs">Blog</Link>
            </div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="cursor-pointer hover:text-gray-300 mb-2">
              {user.user ? (
                <div>
                  <div className="cursor-pointer  mb-2">
                    <Link to="/create">Create</Link>
                  </div>
                  <div className="cursor-pointer  mb-2">
                    <Link to="/profile">Profile</Link>
                  </div>
                  <div
                    className="cursor-pointer underline  mb-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="/login">Want to write ?</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
