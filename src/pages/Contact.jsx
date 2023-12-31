import React from "react";
//import Con from "../assets/con1.jpg";
//import {FaGithub,FaFacebook,FaTwitter,FaInstagram,FaLinkedin,} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex min-h-screen max-w-2xl mx-auto items-center justify-center mt-16 md:mt-32 px-3">
      <div className="flex w-full">
        {/* Left Side - Contact Form and Social Links */}
        <div className="w-full py-10">
          <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">
            Contact Admin
          </h2>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500"
            >
              Submit
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-900">
              Contact Information:
            </p>
            <p className="text-gray-700">Phone: +254742285229</p>
            <p className="text-gray-700">Email: admin@phreddy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
