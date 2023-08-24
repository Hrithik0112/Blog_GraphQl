import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";

const PostCard = ({ allposts }) => {
  return (
    <div>
      {allposts.map((post, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-30 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8"
        >
          <div className="relative overflow-hidden shadow-md pb-80 mb-6">
            <img
              src={post.node.featuredImage.url}
              alt=""
              className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
            />
          </div>

          <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
            <Link href={`/post/${post.node.slug}`}>{post.node.title}</Link>
          </h1>
          <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
              <Image
                unoptimized
                // loader={grpahCMSImageLoader}
                alt={post.node.author.name}
                height={30}
                width={30}
                className="align-middle rounded-full"
                src={post.node.author.avatar.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg bg-white rounded-lg p-1">
                {post.node.author.name}
              </p>
            </div>
            <div className="font-medium text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle">
                {moment(post.node.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <p className="text-center text-lg text-white font-semibold  px-4 lg:px-20 mb-8">
            {post.node.excerpt}
          </p>
          <div className="text-center">
            <Link href={`/post/${post.node.slug}`}>
              <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Continue Reading
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
