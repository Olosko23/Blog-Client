import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(
          `https://phreddy-blog.onrender.com/api/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    fetchArticleDetails();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const createMarkup = (html) => ({ __html: html });

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 mt-24">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {article.title}
        </h1>
      </section>

      <section className="mt-8">
        <article className="bg-white p-6 rounded-md shadow-md">
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
  );
};

export default Blog;
