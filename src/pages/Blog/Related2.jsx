import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

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
        setRelatedArticles(filteredArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [articleId, currentCategory]);

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
            <div className="">
              {relatedArticles.map((article) => (
                <Link to={`/article/${article._id}`} key={article._id}>
                  <div className="bg-white flex max-w-6xl mx-auto">
                    <div className="basis-1/5 w-full h-full p-2">
                      <img
                        src={article.thumbnail?.imageUrl || ""}
                        className="h-20 w-full object-cover rounded-md"
                        alt="Article_Image"
                      />
                    </div>
                    <div className="basis-4/5 p-2">
                      <h3 className="text-lg font-semibold mb-2 text-start hover:underline">
                        {article.title}
                      </h3>
                      <p className="text-sm text-start flex">
                        <p className="flex gap-2">
                          <span className="grid place-items-center">
                            <BsPersonCircle />
                          </span>
                          {article.author_details.username}
                        </p>
                        <span className="mx-1">•</span>
                        <p className="italic">
                          {new Date(article.createdAt).toLocaleDateString(
                            undefined,
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              <hr />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Related;
