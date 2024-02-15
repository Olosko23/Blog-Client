import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const articlesPerPage = 6;

  const user = useSelector((state) => state.user.user);
  const username = user ? user.username : null;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://phreddy-blog.onrender.com/api/articles"
        );
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const sortedArticles = filteredArticles.slice().reverse();

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    setCurrentPage(1);
    setSelectedCategory(category);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 mt-24">
      <section className="text-center">
        {username ? (
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            <span>Hello {username}, </span>Explore Our Articles
          </h1>
        ) : (
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            <span>Hello, </span>Explore Our Articles
          </h1>
        )}

        <p className="text-gray-600">
          Discover a variety of articles on different topics
        </p>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {[
            "All",
            "Technology",
            "Healthcare & Medicine",
            "Science",
            "Sports",
            "Finance",
            "Business & Commerce",
            "Politics",
            "Agriculture",
          ].map((category) => (
            <span
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer text-blue-500 hover:underline ${
                selectedCategory === category && "font-semibold"
              }`}
            >
              {category}
            </span>
          ))}
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
            {currentArticles.map((article) => (
              <Link
                to={`/article/${article._id}`}
                key={article._id}
                className="bg-white p-6 rounded-md shadow-md hover:scale-105 duration-300"
              >
                <div>
                  {article.thumbnail && article.thumbnail.imageUrl && (
                    <img
                      src={article.thumbnail.imageUrl}
                      className="h-40 w-full object-cover rounded-md mb-4"
                      alt="Article_Image"
                    />
                  )}
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
                      )}

                    <div className="text-sm text-gray-500 flex items-center">
                      <p>
                        {new Date(article.updatedAt).toLocaleString(undefined, {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </p>{" "}
                      <span className="mx-1">•</span>
                      <p>{article.readTime} mins read</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-8">
          <ul className="flex justify-center space-x-2">
            {[
              ...Array(
                Math.ceil(filteredArticles.length / articlesPerPage)
              ).keys(),
            ].map((number) => (
              <li
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`cursor-pointer px-3 py-2 ${
                  currentPage === number + 1
                    ? "bg-blue-500 text-white"
                    : "text-blue-500 hover:bg-blue-200"
                }`}
              >
                {number + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Articles;
