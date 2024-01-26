import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        setRelatedArticles(filteredArticles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [articleId, currentCategory]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {relatedArticles.length > 0 && (
        <div className="mx-auto max-w-4xl py-12 mt-2 md:mt-8">
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
            <Slider {...settings} className="slick-carousel px-4">
              {relatedArticles.map((article) => (
                <Link to={`/article/${article._id}`} key={article._id}>
                  <div className="bg-white p-4 rounded-md shadow-md">
                    <img
                      src={article.thumbnail?.imageUrl || "fallback_image_url"}
                      className="h-20 w-full object-contain rounded-md mb-2"
                      alt="Article_Image"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-center">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </Slider>
          )}
        </div>
      )}
    </>
  );
};

export default Related;
