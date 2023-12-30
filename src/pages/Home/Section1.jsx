import React from "react";
import Blog1 from "../../assets/blog2.jpg";
import Pic2 from "../../assets/pic2.jpg";
import Pic3 from "../../assets/pic3.png";
import Pic4 from "../../assets/pic4.jpg";
import Pic5 from "../../assets/pic5.jpg";
import Pic6 from "../../assets/pic6.jpg";
import Pic7 from "../../assets/pic7.jpg";

const Section1 = () => {
  const blogs = [
    {
      id: 0,
      src: Blog1,
      category: "Science",
      title: "Title of the First Blog Post",
      overview:
        "Explore the fascinating world of science and its latest discoveries.",
      author_img_src: Pic4,
      author_name: "Jane Smith",
      date: "11 Jan 2024",
      readtime: "4 mins",
    },
    {
      id: 1,
      src: Pic2,
      category: "Science",
      title: "Title of the First Blog Post",
      overview:
        "Explore the fascinating world of science and its latest discoveries.",
      author_img_src: Pic2,
      author_name: "Jane Smith",
      date: "11 Jan 2024",
      readtime: "4 mins",
    },
    {
      id: 2,
      src: Pic5,
      category: "Technology",
      title: "Title of the First Blog Post",
      overview:
        "Explore the fascinating world of science and its latest discoveries.",
      author_img_src: Blog1,
      author_name: "Jane Smith",
      date: "11 Jan 2024",
      readtime: "4 mins",
    },
    {
      id: 3,
      src: Pic6,
      category: "Business",
      title: "Title of the First Blog Post",
      overview:
        "Explore the fascinating world of science and its latest discoveries.",
      author_img_src: Pic3,
      author_name: "Jane Smith",
      date: "11 Jan 2024",
      readtime: "4 mins",
    },
    {
      id: 4,
      src: Blog1,
      category: "Business",
      title: "Title of the First Blog Post",
      overview:
        "Explore the fascinating world of science and its latest discoveries.",
      author_img_src: Pic4,
      author_name: "Jane Smith",
      date: "11 Jan 2024",
      readtime: "4 mins",
    },
    {
      id: 5,
      src: Pic7,
      category: "Business",
      title: "Title of the First Blog Post",
      overview:
        "Explore the fascinating world of science and its latest discoveries.",
      author_img_src: Pic3,
      author_name: "Jane Smith",
      date: "11 Jan 2024",
      readtime: "4 mins",
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Latest on our Blog
        </h1>
        <p className="text-gray-600">Discover the latest posts in our blog</p>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <span className="cursor-pointer text-blue-500 hover:underline">
            All
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Technology
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline hidden md:inline">
            Healthcare
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline hidden md:inline">
            Science
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline hidden lg:inline">
            Sports
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline hidden lg:inline">
            Business & Commerce
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline hidden xl:inline">
            Agriculture
          </span>
        </div>

        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {blogs.map((blog) => (
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
                  <button className="text-blue-500 hover:underline">
                    Read More
                  </button>
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
        <div className="mt-4 md:mt-6 lg:mt-8">
          <div className="grid place-items-center">
            <button className="px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Discover more articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
