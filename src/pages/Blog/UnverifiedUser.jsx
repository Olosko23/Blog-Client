import React from "react";
import { Link } from "react-router-dom";

const UnverifiedUser = () => {
  return (
    <div className="container h-[75dvh] mx-auto px-4 max-w-xl py-12 mt-24 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Profile Creation Required
      </h1>
      <p className="text-gray-700 mb-8">
        It seems you haven't created a profile yet. Please create your profile
        before you can start creating articles.
      </p>
      <Link
        to="/update_profile"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 inline-block"
      >
        Create your profile
      </Link>
    </div>
  );
};

export default UnverifiedUser;
