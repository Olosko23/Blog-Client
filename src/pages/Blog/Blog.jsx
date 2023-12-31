import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../constants/Blogs";
import Comments from "./Comments";

const Blog = () => {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Mock data for comments (you can replace it with actual data)
  const initialComments = [
    { id: 1, author: "User1", text: "Great post!" },
    { id: 2, author: "User2", text: "Awesome content!" },
  ];

  const [comments, setComments] = React.useState(initialComments);

  const handleCommentSubmit = (commentText) => {
    const newComment = {
      id: comments.length + 1,
      author: "Current User", // You may replace this with the actual user information
      text: commentText,
    };

    setComments([...comments, newComment]);
  };

  // Create a function to safely render HTML content
  const createMarkup = (html) => ({ __html: html });

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 mt-24">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">{blog.title}</h1>
      </section>

      <section className="mt-8">
        <article className="bg-white p-6 rounded-md shadow-md">
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
          <div className="mb-4">
            <p className="text-gray-600 mb-2">{blog.overview}</p>
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

          {/* Display the blog content within the card */}
          <div className="mt-8">
            <div
              className="text-gray-800"
              dangerouslySetInnerHTML={createMarkup(blog.content)}
            />
          </div>
        </article>
      </section>
      <div className="p-2">
        <Comments comments={comments} onCommentSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default Blog;
