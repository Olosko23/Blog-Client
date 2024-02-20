import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const user = useSelector((state) => state.user.user);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          {/* Social Links */}
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="flex justify-center text-center mt-4 px-4">
        {/* Copyright Disclaimer */}
        <p className="text-sm">
          &copy; {currentYear} Phreddy. All rights reserved.{" "}
          <span className="mx-1">•</span>
          <Link to="/privacy_policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>{" "}
          <span className="mx-1">•</span>
          <Link
            to="/terms_of_service"
            className="text-blue-500 hover:underline"
          >
            Terms of Service
          </Link>{" "}
         
          {user && (
            <>
             <span className="mx-1">•</span>
              <Link to="/blogs" className="text-blue-500 hover:underline">
                Blogs
              </Link>{" "}
              <span className="mx-1">•</span>
              <Link to="/about" className="text-blue-500 hover:underline">
                About Us
              </Link>{" "}
              <span className="mx-1">•</span>
              <Link to="/contact" className="text-blue-500 hover:underline">
                Contact Us
              </Link>
            </>
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
