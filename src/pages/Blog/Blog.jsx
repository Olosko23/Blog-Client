import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";
import Related from "./Related2";

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://phreddy-blog.onrender.com/api/articles/${id}`
        );
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article details:", error);
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [id]);

  const createMarkup = (html) => ({ __html: html });

  return (
    <>
      {loading ? (
        <div className="container mx-auto px-4 max-w-4xl py-12 mt-24 h-[85vh]">
          <div className="animate-pulse space-y-4">
            <div className="bg-gray-300 h-60 w-full object-cover rounded-md mb-4"></div>
            <div className="bg-gray-300 h-4 w-1/4 mb-2"></div>
            <div className="bg-gray-300 h-4 w-1/2 mb-2"></div>
            <div className="bg-gray-300 h-4 w-1/4 mb-2"></div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 h-7 w-9 rounded-full"></div>
              <div className="space-y-2">
                <div className="bg-gray-300 h-2 w-20 mb-1"></div>
                <div className="bg-gray-300 h-2 w-16"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 max-w-4xl py-12 mt-24">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              {article.title}
            </h1>
          </section>

          <section className="mt-8">
            <article className="bg-white p-6 md:rounded-md md:shadow-md">
              <div>
                <img
                  src={article.thumbnail?.imageUrl || "fallback_image_url"}
                  className="h-40 w-full object-cover rounded-md mb-4"
                  alt="Article_Image"
                />
              </div>
              <p className="text-blue-500 text-sm cursor-pointer">
                {article.category}
              </p>
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
                    </p>{" "}
                    <span className="mx-1">•</span> {/* Divider */}
                    <p>{article.readTime} mins read</p>
                  </div>
                </div>
              </div>

              {/* Display the article content within the card */}
              <div className="mt-8">
                <div
                  className="text-gray-800"
                  dangerouslySetInnerHTML={createMarkup(article.content)}
                />
              </div>
            </article>
          </section>
        </div>
      )}
      <div className="flex flex-col">
        <Comments comments={article.comments || []} articleId={article._id} />
        <Related articleId={article._id} currentCategory={article.category} />
      </div>
    </>
  );
};

export default Blog;
