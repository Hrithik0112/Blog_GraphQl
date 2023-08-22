import React from "react";

const contents = [
  { title: "Learning React", excerpt: "Learning with react" },
  { title: "Learning Web Development", excerpt: "Learning with web-dev" },
];

const PostCard = () => {
  return (
    <div className="text-white text-3xl">
      {contents.map((content) => (
        <div key={content.title}>
          <h2>{content.title}</h2>
          <p>{content.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
