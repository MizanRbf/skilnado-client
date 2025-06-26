import React from "react";

import { Link, useLoaderData } from "react-router";
import BlogCard from "./BlogCard";
import { IoReturnDownBack } from "react-icons/io5";
const Blogs = () => {
  const blogData = useLoaderData();
  return (
    <div className="px-4 max-w-[1400px] mx-auto">
      <div className="text-center mb-10 md:mt-10 mt-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Blogs</h1>
        <p className="md:text-lg">
          Let's explore some basic concept that will make you a good developer
        </p>
      </div>
      <div className="mb-20">
        {blogData.map((ques) => (
          <BlogCard key={ques.id} ques={ques}></BlogCard>
        ))}
        <Link to="/">
          <button className="bg-secondary text-white px-4 rounded-sm flex items-center gap-2">
            <IoReturnDownBack size={20} />
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
