import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://phreddy-blog.onrender.com/api/articles"
        );
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
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
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Explore Our Articles
        </h1>
        <p className="text-gray-600">
          Discover a variety of articles on different topics
        </p>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {[
            "All",
            "Technology",
            "Healthcare",
            "Science",
            "Sports",
            "Business & Commerce",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {currentArticles.map((article) => (
            <Link
              to={`/article/${article._id}`}
              key={article._id}
              className="bg-white p-6 rounded-md shadow-md hover:scale-105 duration-300"
            >
              <div>
                <img
                  src={article.thumbnail.imageUrl}
                  className="h-40 w-full object-cover rounded-md mb-4"
                  alt="Article_Image"
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
                    <span className="mx-1">•</span>
                    <p>{article.readTime} mins read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

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
