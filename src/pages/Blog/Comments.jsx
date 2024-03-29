import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const Comment = ({ content, username, avatar, createdAt }) => {
  const timeAgo = () => {
    const date = new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffSeconds = Math.floor(diffTime / 1000);
    if (diffSeconds === 1) return `${diffSeconds} second ago`;
    if (diffSeconds < 60) return `${diffSeconds} seconds ago`;

    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    if (diffMinutes === 1) return `${diffMinutes} minute ago`;
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;

    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffHours === 1) return `${diffHours} hour ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return `${diffDays} day ago`;
    if (diffDays < 7) return `${diffDays} days ago`;

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) return `${diffWeeks} week ago`;
    if (diffWeeks < 4) return `${diffWeeks} weeks ago`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return `${diffMonths} month ago`;
    if (diffMonths < 12) return `${diffMonths} months ago`;

    const diffYears = Math.floor(diffDays / 365);
    if (diffYears === 1) return `${diffYears} year ago`;
    return `${diffYears} years ago`;
  };

  return (
    <div className="flex items-start py-4 px-4">
      <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <p className="font-semibold mr-2">{username}</p>
          <p className="text-gray-400 text-sm grid place-items-center">
            {timeAgo()}
          </p>
        </div>
        <p className="text-gray-600 text-md">{content}</p>
      </div>
    </div>
  );
};

const Comments = ({ comments: initialComments, articleId }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user.user);

  // link https://phreddy-blog.onrender.com/api/articles/${articleId}/comment

  useEffect(() => {
    setComments(initialComments || []);
  }, [initialComments]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `https://phreddy-blog.onrender.com/api/articles/${articleId}/comment`,
        {
          author_id: user._id,
          author_Image: user.avatar.imageUrl,
          author_username: user.username,
          content: newComment,
        }
      );
      const { article: updatedArticle } = response.data;
      setComments(updatedArticle.comments);
      setNewComment("");
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 w-full max-w-4xl mx-auto px-1 sm:px-6 py-2">
      <h2 className="text-xl mb-4 flex space-x-2 text-blue-600 font-bold ml-5">
        <span className="grid place-items-center">
          <FaCommentDots size={20} />
        </span>
        <span className="grid place-items-center">Comments</span>
      </h2>
      {comments.length === 0 ? (
        <p className="text-gray-600 text-center italic my-2 p-1">
          No comments here. Be the first to comment.
        </p>
      ) : (
        comments.map((comment, index) => (
          <Comment
            key={index}
            username={comment.author_username}
            avatar={comment.author_Image}
            content={comment.content}
            createdAt={new Date(comment.createdAt)}
            author_id={comment.author_id}
          />
        ))
      )}
      {user && (
        <div className="px-4 md:px-2">
          <textarea
            className="border border-gray-200 rounded-md p-2 mb-2 mt-2 w-full"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleCommentSubmit}
            disabled={loading}
          >
            {loading ? "Please Wait" : "Add Comment"}
          </button>{" "}
          {error && <span className="text-red-700 my-2">{error}</span>}
        </div>
      )}
      {!user && (
        <div className="text-center my-3 font-semibold text-blue-600 px-3">
          <Link to="/login">Login or signup to add comments</Link>
        </div>
      )}
    </div>
  );
};

export default Comments;
