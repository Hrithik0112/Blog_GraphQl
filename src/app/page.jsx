"use client";

import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";
import { getPosts } from "@/services";
import { useEffect, useState } from "react";
import React from "react";

export default function Home() {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    getPostsHere();
  }, []);
  const getPostsHere = async () => {
    const result = await getPosts();
    const posts = await result.postsConnection.edges;
    console.log(posts);
    setAllPost(posts);
  };
  return (
    <main className="container mx-auto px-10 mb-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostCard allposts={allPost} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative gap-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
