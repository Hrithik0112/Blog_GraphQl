import React from "react";

const PostCard = ({ props: post }) => {
  return (
    <div className="text-white text-3xl">
      <div className="text-white">
        {post.title}
        {post.excerpt}
      </div>
      ;
    </div>
  );
};

export default PostCard;
