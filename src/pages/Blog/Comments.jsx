import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const Comment = ({ content, username, avatar }) => {
  return (
    <div className="flex items-start py-4 px-4">
      <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <p className="font-semibold mr-2">{username}</p>
        </div>
        <p className="text-gray-600 text-md">{content}</p>
      </div>
    </div>
  );
};

const Comments = ({ comments, articleId }) => {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.user);
  const author_id = user ? user._id : null;
  const author_Image = user ? user.avatar.imageUrl : null;
  const author_username = user ? user.username : null;
  const content = newComment;

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `https://phreddy-blog.onrender.com/api/articles/${articleId}/comment`,
        { author_id, author_Image, author_username, content }
      );
      setNewComment("");
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 w-full max-w-4xl mx-auto px-3 sm:px-6 py-2">
      <h2 className="text-xl mb-4 flex space-x-2 text-blue-600 font-bold">
        <span className="grid place-items-center">
          <FaCommentDots size={20} />
        </span>
        <span className="grid place-items-center">Comments</span>
      </h2>
      {comments.length === 0 ? (
        <p className="text-gray-600 italic my-2 p-1">
          No comments here. Be the first to comment.
        </p>
      ) : (
        comments.map((comment, index) => (
          <Comment
            key={index}
            username={comment.author_username}
            avatar={comment.author_Image}
            content={comment.content}
            author_id={comment.author_id}
          />
        ))
      )}
      {user && (
        <>
          <textarea
            className="border border-gray-200 rounded-md p-2 mb-4 mt-2 w-full"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleCommentSubmit}
          >
            {loading ? "Please Wait" : "Add Comment"}
          </button>{" "}
          {error && <span className="text-red-600 my-2">{error}</span>}
        </>
      )}
      {!user && (
        <div className="text-center my-3 font-semibold text-blue-600">
          <Link to="/login">Login or signup to add comments</Link>
        </div>
      )}
    </div>
  );
};

export default Comments;
