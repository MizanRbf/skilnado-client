import React from "react";

import { Link, useLoaderData } from "react-router";
import BlogCard from "./BlogCard";
import { IoReturnDownBack } from "react-icons/io5";
const Blogs = () => {
  const blogData = useLoaderData();
  return (
    <div className="px-4 max-w-[1400px] mx-auto">
      <div className="text-center mb-6 md:mt-10 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">📚 Blogs</h1>
        <p className="border border-primary text-black bg-gray-100 shadow-lg rounded-sm text-xs md:text-sm inline-block px-4">
          Read expert tips and guides to boost your freelancing career and hire
          smarter. <br className="hidden md:block" /> Stay updated with our
          latest blog posts.
        </p>
      </div>
      <div className="mb-20">
        {blogData.map((post) => (
          <BlogCard key={post.id} post={post}></BlogCard>
        ))}
        <Link to="/">
          <button className="bg-secondary text-white px-4 rounded-sm flex items-center gap-2 cursor-pointer">
            <IoReturnDownBack size={20} />
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
