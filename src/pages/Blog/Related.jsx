import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Related = ({ articleId, currentCategory }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const response = await axios.get(
          `https://phreddy-blog.onrender.com/api/articles`
        );
        const filteredArticles = response.data.filter(
          (article) =>
            article.category === currentCategory && article._id !== articleId
        );
        const limitedArticles = filteredArticles.slice(0, 4);
        setRelatedArticles(limitedArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [currentCategory, articleId]);

  function formatDate(date) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }

  return (
    <>
      {relatedArticles.length > 0 && (
        <div className="mx-auto max-w-4xl py-8 mt-2 md:mt-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            You may also like
          </h2>

          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-300 h-20 w-full rounded-md mb-2"></div>
                <div className="bg-gray-300 h-8 w-full mb-2"></div>
                <div className="bg-gray-300 h-8 w-full mb-2"></div>
              </div>
            ))
          ) : (
            <div className="related-articles">
              {relatedArticles.map((article) => (
                <Link to={`/article/${article._id}`} key={article._id}>
                  <div className="bg-white p-4 sm:shadow-none sm:rounded-none rounded-md shadow-md mb-4">
                    <img
                      src={article.thumbnail?.imageUrl || ""}
                      className="h-20 w-full object-contain rounded-md mb-2"
                      alt="Article_Image"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {article.title}
                    </h3>
                    <p className="text-sm text-center">
                      {article.author_details.username}{" "}
                      <span className="mx-1">•</span>
                      {formatDate(new Date(article.createdAt))}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Related;
