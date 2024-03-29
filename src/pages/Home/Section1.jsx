import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Section1 = () => {
  const [randomArticles, setRandomArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://phreddy-blog.onrender.com/api/articles/random"
      );

      setRandomArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
            Healthcare & Medicine
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Science
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Sports
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Finance
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Business & Commerce
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Politics
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Agriculture
          </span>
        </div>

        <hr />
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
            <Link className="bg-white p-6 rounded-md shadow-md animate-pulse">
              <div className="h-40 w-full object-cover rounded-md mb-4 bg-gray-300"></div>
              <p className="text-blue-500 text-sm cursor-pointer bg-gray-200 h-4 w-16 rounded-md mb-2"></p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600 bg-gray-200 h-6 w-3/4 rounded-md"></h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full rounded-md"></p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold bg-gray-200 h-4 w-20 rounded-md"></h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p className="bg-gray-200 h-4 w-16 rounded-md"></p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p className="bg-gray-200 h-4 w-12 rounded-md"></p>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bg-white p-6 rounded-md shadow-md animate-pulse">
              <div className="h-40 w-full object-cover rounded-md mb-4 bg-gray-300"></div>
              <p className="text-blue-500 text-sm cursor-pointer bg-gray-200 h-4 w-16 rounded-md mb-2"></p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600 bg-gray-200 h-6 w-3/4 rounded-md"></h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full rounded-md"></p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold bg-gray-200 h-4 w-20 rounded-md"></h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p className="bg-gray-200 h-4 w-16 rounded-md"></p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p className="bg-gray-200 h-4 w-12 rounded-md"></p>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bg-white p-6 rounded-md shadow-md animate-pulse">
              <div className="h-40 w-full object-cover rounded-md mb-4 bg-gray-300"></div>
              <p className="text-blue-500 text-sm cursor-pointer bg-gray-200 h-4 w-16 rounded-md mb-2"></p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600 bg-gray-200 h-6 w-3/4 rounded-md"></h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full rounded-md"></p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold bg-gray-200 h-4 w-20 rounded-md"></h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p className="bg-gray-200 h-4 w-16 rounded-md"></p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p className="bg-gray-200 h-4 w-12 rounded-md"></p>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bg-white p-6 rounded-md shadow-md animate-pulse">
              <div className="h-40 w-full object-cover rounded-md mb-4 bg-gray-300"></div>
              <p className="text-blue-500 text-sm cursor-pointer bg-gray-200 h-4 w-16 rounded-md mb-2"></p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600 bg-gray-200 h-6 w-3/4 rounded-md"></h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full rounded-md"></p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold bg-gray-200 h-4 w-20 rounded-md"></h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p className="bg-gray-200 h-4 w-16 rounded-md"></p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p className="bg-gray-200 h-4 w-12 rounded-md"></p>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bg-white p-6 rounded-md shadow-md animate-pulse">
              <div className="h-40 w-full object-cover rounded-md mb-4 bg-gray-300"></div>
              <p className="text-blue-500 text-sm cursor-pointer bg-gray-200 h-4 w-16 rounded-md mb-2"></p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600 bg-gray-200 h-6 w-3/4 rounded-md"></h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full rounded-md"></p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold bg-gray-200 h-4 w-20 rounded-md"></h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p className="bg-gray-200 h-4 w-16 rounded-md"></p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p className="bg-gray-200 h-4 w-12 rounded-md"></p>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="bg-white p-6 rounded-md shadow-md animate-pulse">
              <div className="h-40 w-full object-cover rounded-md mb-4 bg-gray-300"></div>
              <p className="text-blue-500 text-sm cursor-pointer bg-gray-200 h-4 w-16 rounded-md mb-2"></p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600 bg-gray-200 h-6 w-3/4 rounded-md"></h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full rounded-md"></p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold bg-gray-200 h-4 w-20 rounded-md"></h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p className="bg-gray-200 h-4 w-16 rounded-md"></p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p className="bg-gray-200 h-4 w-12 rounded-md"></p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
            {randomArticles.map((article) => (
              <Link
                to={`/article/${article._id}`}
                key={article._id}
                className="bg-white p-6 rounded-md shadow-md hover:scale-105 duration-300 flex flex-col justify-between"
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
                  {article.author_details &&
                    article.author_details.avatar &&
                    article.author_details.avatar.imageUrl && (
                      <img
                        src={article.author_details.avatar.imageUrl}
                        className="h-9 w-9 rounded-full"
                        alt="Author_Image"
                      />
                    )}
                  <div>
                    {article.author_details &&
                      article.author_details.username && (
                        <h3 className="font-semibold">
                          {article.author_details.username}
                        </h3>
                      )}{" "}
                    <div className="text-sm text-gray-500 flex items-center">
                      <p>
                        {new Date(article.createdAt).toLocaleDateString(
                          undefined,
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <span className="mx-1">•</span> {/* Divider */}
                      <p>{article.readTime} mins read</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

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
