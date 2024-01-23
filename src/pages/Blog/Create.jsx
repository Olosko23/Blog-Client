import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UnverifiedUser from "./UnverifiedUser";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Create = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  //const user = useSelector((state) => state.user.user);

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const author_id = user ? user._id : null;
  const isVerified = user ? user.isVerified : false;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (!isVerified) {
      navigate("/unverified");
    }
  }, [user, navigate, isVerified]);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update the state with the data URL
        setThumbnailPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOverviewChange = (e) => {
    setOverview(e.target.value);
  };

  const handleTagsChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const articleResponse = await axios.post(
        "https://phreddy-blog.onrender.com/api/articles",
        {
          author_id,
          title,
          content,
          category: selectedCategory,
          overview,
        }
      );

      if (articleResponse.status === 201) {
        const articleId = articleResponse.data._id;

        await handleThumbnail(articleId);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleThumbnail = async (articleId) => {
    try {
      const formData = new FormData();
      formData.append("thumbnail", thumbnail);

      const response = await axios.patch(
        `https://phreddy-blog.onrender.com/api/articles/thumbnail/${articleId}`,
        formData
      );

      if (response.status === 200) {
        setSuccess(true);
        setLoading(false);
      } else {
        setSuccess(false);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
      setSuccess(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "align",
    "paragraph",
    "color",
  ];

  return (
    <>
      {isVerified ? (
        <div className="container mx-auto px-4 max-w-4xl py-12 mt-24">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Create a New Article
          </h1>

          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="thumbnail"
                className="block text-gray-600 font-semibold mb-2"
              >
                Thumbnail Image:
              </label>
              <div className="flex flex-col">
                <div>
                  <input
                    type="file"
                    id="thumbnail"
                    onChange={handleThumbnailChange}
                    className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Upload a thumbnail image for your article. Accepted formats:
                  png, webp, avif, jpeg, or svg.
                </p>
                <div className="py-1 mx-4">
                  {thumbnailPreview && (
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      className="mt-2 w-16 h-16 object-cover rounded"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-600 font-semibold mb-2 "
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
              />
              <p className="text-gray-500 text-sm">
                Enter the title of your article.
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="overview"
                className="block text-gray-600 font-semibold mb-2"
              >
                Overview:
              </label>
              <textarea
                id="overview"
                value={overview}
                onChange={handleOverviewChange}
                className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
              />
              <p className="text-gray-500 text-sm">
                Provide a brief overview or summary of your article.
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="tags"
                className="block text-gray-600 font-semibold mb-2"
              >
                Category:
              </label>
              <select
                value={selectedCategory}
                onChange={handleTagsChange}
                className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option value="Technology">Technology</option>
                <option value="Healthcare & Medicine">
                  {" "}
                  Healthcare & Medicine
                </option>
                <option value="Science">Science</option>
                <option value="Sports">Sports</option>
                <option value="Finance">Finance</option>
                <option value="Business & Commerce">Business & Commerce</option>
                <option value="Politics">Politics</option>
                <option value="Agriculture">Agriculture</option>
              </select>
              <p className="text-gray-500 text-sm">
                Which category does the article belong to (science, technology,
                politics, business)?
              </p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-gray-600 font-semibold mb-2"
              >
                Content:
              </label>
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                style={{ height: "75vh" }}
                className=""
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 mt-12 px-4 rounded hover:bg-blue-600"
              >
                {loading ? "Please Wait" : "Create Blog"}
              </button>
            </div>

            <div className="my-2">
              {error && <div className="text-red-500">{error}</div>}
            </div>
            <div className="my-2">
              {success && (
                <div className="text-green-500">
                  Article Posted Successfully!
                </div>
              )}
            </div>
          </form>
        </div>
      ) : (
        <UnverifiedUser />
      )}
    </>
  );
};

export default Create;
