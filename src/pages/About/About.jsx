import React from "react";
import Con2 from "../../assets/con2.jpg";

const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-center mt-24">
      <div className="w-full max-w-4xl p-8">
        {/* <h2 className="text-3xl font-bold mb-6">About Phreddy</h2>*/}

        {/* Image */}
        <div className="mb-8">
          <img
            src={Con2}
            alt="About Us"
            className="w-[50%] h-auto max-h-[40vh] rounded-md"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          Welcome to our blog, a platform that celebrates the diversity of
          thoughts and ideas from individuals across different domains. Our
          mission is to provide a space where people can share their unique
          perspectives, experiences, and insights with readers from all around
          the world.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          In a world where connections matter, we believe that everyone has a
          story to tell, and each story has the power to inspire, educate, and
          bring people together. Whether you're an expert in your field, a
          passionate hobbyist, or someone with a personal journey to share, our
          blog is open to all voices.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          We invite contributors from various backgrounds, including but not
          limited to technology, science, art, lifestyle, travel, and more. If
          you have a passion, expertise, or a unique perspective you want to
          share, we encourage you to become a part of our community.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">How to contribute:</p>

        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Sign up for an account on our platform.</li>
          <li>Create and submit your articles or stories.</li>
          <li>Engage with the community through comments and discussions.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          Join us in building a global community of thinkers, creators, and
          storytellers. Together, let's create a space where diverse voices are
          heard, and where ideas can thrive and inspire. Thank you for being a
          part of our journey!
        </p>
      </div>
    </div>
  );
};

export default About;
