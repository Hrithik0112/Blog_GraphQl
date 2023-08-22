import React from "react";
import { getPosts } from "@/services";

// const contents = [
//   { title: "Learning React", excerpt: "Learning with react" },
//   { title: "Learning Web Development", excerpt: "Learning with web-dev" },
// ];

const PostCard = ({ contents }) => {
  return (
    <div className="text-white text-3xl">
      {/* {contents.map((content) => (
        <div key={content.title}>
          <h2>{content.title}</h2>
          <p>{content.excerpt}</p>
        </div>
      ))} */}
      {contents}
    </div>
  );
};

export default PostCard;

export async function getStaticProps() {
  const contents = (await getPosts()) || [];

  return {
    props: { contents },
  };
}
