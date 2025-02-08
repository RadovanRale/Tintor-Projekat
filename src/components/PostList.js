import React, { useEffect, useState } from "react";
import Post from "./Post";
import postsData from "../data/post.json";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData);
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;
