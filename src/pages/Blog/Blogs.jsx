import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../constants/Blogs";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const blogsPerPage = 9;

  // Filtered and paginated blogs
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    setCurrentPage(1); // Reset current page when changing the category
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12 mt-24">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Explore Our Blog
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
          {currentBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white p-6 rounded-md shadow-md"
            >
              <div>
                <img
                  src={blog.src}
                  className="h-40 w-full object-cover rounded-md mb-4"
                  alt="Blog_Image"
                />
              </div>
              <p className="text-blue-500 text-sm cursor-pointer">
                {blog.category}
              </p>
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-gray-600">
                {blog.title}
              </h2>
              <div className="mb-4">
                <p className="text-gray-600 mb-2">{blog.overview}</p>
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={blog.author_img_src}
                  className="h-9 w-9 rounded-full"
                  alt="Author_Image"
                />
                <div>
                  <h3 className="font-semibold">{blog.author_name}</h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <p>{blog.date}</p>
                    <span className="mx-1">•</span> {/* Divider */}
                    <p>{blog.readtime} read</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <ul className="flex justify-center space-x-2">
            {[...Array(Math.ceil(blogs.length / blogsPerPage)).keys()].map(
              (number) => (
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
              )
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
