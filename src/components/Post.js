import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default Post;
