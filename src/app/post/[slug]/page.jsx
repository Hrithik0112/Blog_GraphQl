"use client";
import AdjacentPosts from "@/components/AdjacentPosts";
import Author from "@/components/Author";
import Categories from "@/components/Categories";
import Loader from "@/components/Loader";
import PostDetail from "@/components/PostDetail";
import PostWidget from "@/components/PostWidget";
import { getPostDetails } from "@/services";

import React, { useEffect, useState } from "react";

const PostDetails = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    getPostContent();
  }, []);
  const getPostContent = async (params) => {
    const result = await getPostDetails(params);
    const content = await result;
    // console.log(posts); Console Logging to check the result
    console.log(content);
    //  setPostContent(content);
  };

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail />
            <Author />
            <AdjacentPosts />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
// export async function getStaticProps({ params }) {
//   const data = await getPostDetails(params.slug);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const posts = await getPosts();
//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }
