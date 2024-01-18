import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Section1 = () => {
  const [randomArticles, setRandomArticles] = useState([]);

  const fetchRandomArticles = async () => {
    try {
      const response = await axios.get(
        "https://phreddy-blog.onrender.com/api/articles/random"
      );

      setRandomArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomArticles();
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Latest on our Blog
        </h1>
        <p className="text-gray-600">Discover the latest posts in our blog</p>
      </section>

      <section className="mt-8">
        <div className="flex flex-col items-center mb-4 space-y-2 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
          <Link
            to="/blogs"
            className="cursor-pointer text-blue-500 hover:underline"
          >
            All
          </Link>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Technology
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Healthcare
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Science
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Sports
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Finance, Business and Economics
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Agriculture
          </span>
        </div>

        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {randomArticles.map((article) => (
            <Link
              to={`/article/${article._id}`}
              key={article._id}
              className="bg-white p-6 rounded-md shadow-md hover:scale-105 duration-300"
            >
              <div>
                <img
                  src={article.thumbnail.imageUrl}
                  className="h-40 w-full object-cover rounded-md mb-4"
                  alt="Blog_Image"
                />
              </div>
              <p className="text-blue-500 text-sm cursor-pointer">
                {article.category}
              </p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600">
                {article.title}
              </h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2">{article.overview}</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-9 w-9 rounded-full"
                  alt="Author_Image"
                />
                <div>
                  <h3 className="font-semibold">{article.author}</h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p>{article.date}</p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p>{article.readTime} mins read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 md:mt-6 lg:mt-8">
          <div className="grid place-items-center">
            <div className="px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              <Link to="/blogs">Discover more articles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
