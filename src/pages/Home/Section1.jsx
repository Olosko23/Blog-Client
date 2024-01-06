import { Link } from "react-router-dom";
import { blogs } from "../../constants/Blogs";

const Section1 = () => {
  const limitedBlogs = blogs.slice(0, 6);

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Latest on our Blog
        </h1>
        <p className="text-gray-600">Discover the latest posts in our blog</p>
      </section>

      <section className="mt-8">
        <div className="flex flex-col items-center mb-4 space-y-2 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
          <span className="cursor-pointer text-blue-500 hover:underline">
            All
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Technology
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Healthcare
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Science
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Sports
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Finance, Business and Economics
          </span>
          <span className="cursor-pointer text-blue-500 hover:underline">
            Agriculture
          </span>
        </div>

        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
          {limitedBlogs.map((blog) => (
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
        <div className="mt-4 md:mt-6 lg:mt-8">
          <div className="grid place-items-center">
            <div className="px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              <Link to="/blogs">Discover more articles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
