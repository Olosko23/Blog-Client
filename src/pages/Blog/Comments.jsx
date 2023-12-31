import React, { useState } from "react";

const Comments = ({ comments, onCommentSubmit }) => {
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleReplyClick = (commentId) => {
    setReplyTo(commentId);
  };

  const handleSubmit = (e, parentId) => {
    e.preventDefault();
    onCommentSubmit(newComment, parentId);
    setNewComment("");
    setReplyTo(null);
  };

  const renderComments = (comments, parentId = null) => {
    return (
      <ul className="list-disc pl-4 mb-4">
        {comments
          .filter((comment) => comment.parentId === parentId)
          .map((comment) => (
            <li key={comment.id} className="mb-2">
              <strong className="text-blue-500">{comment.author}</strong>:{" "}
              {comment.text}
              <button
                onClick={() => handleReplyClick(comment.id)}
                className="text-blue-500 ml-2"
              >
                Reply
              </button>
              {replyTo === comment.id && (
                <form onSubmit={(e) => handleSubmit(e, comment.id)}>
                  <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Reply to this comment..."
                    className="w-full p-2 border border-gray-300 rounded"
                    rows="3"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    Add Reply
                  </button>
                </form>
              )}
              {renderComments(comments, comment.id)}
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments</h2>

      {renderComments(comments)}

      <form
        onSubmit={(e) => handleSubmit(e, null)}
        className="flex flex-col space-y-4"
      >
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="w-full p-2 border border-gray-300 rounded"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
