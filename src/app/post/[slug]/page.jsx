"use client";

// import AdjacentPosts from "@/components/AdjacentPosts";
import Author from "@/components/Author";
import Categories from "@/components/Categories";
import Loader from "@/components/Loader";
import PostDetail from "@/components/PostDetail";
import PostWidget from "@/components/PostWidget";
import { getPostDetails } from "@/services";
import { useParams } from "next/navigation";

import React, { useState } from "react";
import { useEffect } from "react";

const PostDetails = () => {
  const [postContent, setPostContent] = useState("");

  const { slug } = useParams();
  // console.log(slug);

  useEffect(() => {
    getPostDetails(slug).then((result) => {
      // console.log(result);
      setPostContent(result);
    });
  }, [slug]);

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={postContent} />
            <Author author={postContent.author} />
            {/* <AdjacentPosts /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={postContent.slug}
                categories={postContent?.categories?.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;
