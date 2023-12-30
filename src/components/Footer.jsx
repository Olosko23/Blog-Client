import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
          &copy; {currentYear} Phreddy. All rights reserved. |{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
