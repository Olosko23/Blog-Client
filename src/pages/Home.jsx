import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg">
          Explore the latest posts and discover interesting content.
        </p>
      </section>

      {/* Tags Section */}
      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
        {/* Add tags or other content here */}
      </section>

      {/* Post Section */}
      <section className="flex flex-col p-8">
        {/* Sample Post */}
        <article className="bg-white p-4 rounded-md shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Post Title 1</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet...</p>
          {/* Add more details or links if needed */}
        </article>

        {/* Sample Post */}
        <article className="bg-white p-4 rounded-md shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Post Title 2</h2>
          <p className="text-gray-600 mb-4">Consectetur adipiscing elit...</p>
          {/* Add more details or links if needed */}
        </article>

        {/* Sample Post */}
        <article className="bg-white p-4 rounded-md shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Post Title 3</h2>
          <p className="text-gray-600 mb-4">
            Sed do eiusmod tempor incididunt...
          </p>
          {/* Add more details or links if needed */}
        </article>
      </section>
    </div>
  );
};

export default Home;
