import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Related = ({ articleId, currentCategory }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  //Fetching all artciles and filtering for now
  // WIll create a backend function for that
  //Loading time is the main issue here

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://phreddy-blog.onrender.com/api/articles`
        );
        const filteredArticles = response.data.filter(
          (article) =>
            article.category === currentCategory && article._id !== articleId
        );
        setRelatedArticles(filteredArticles);
        setLoading(false);
        console.log(relatedArticles);
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [articleId, currentCategory]);

  // Settings for the React Slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 mt-8">
      <h2 className="text-2xl font-bold mb-4">You may also like</h2>
      {loading ? (
        <p>Loading related articles...</p>
      ) : (
        <Slider {...settings}>
          {relatedArticles.map((article) => (
            <Link to={`/article/${article._id}`} key={article._id}>
              <div className="bg-white p-4 rounded-md shadow-md">
                <img
                  src={article.thumbnail?.imageUrl || "fallback_image_url"}
                  className="h-20 w-full object-cover rounded-md mb-2"
                  alt="Article_Image"
                />
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              </div>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Related;
