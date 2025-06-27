import React from "react";

const BlogCard = ({ post }) => {
  const { image, title, excerpt } = post;
  return (
    <div className="border border-secondary mb-4 p-4 rounded-lg flex items-center gap-6 flex-col lg:flex-row">
      <div className="w-full">
        <img
          className="lg:min-w-[400px] lg:min-h-[300px] w-full"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h2 className="mb-4">{title}</h2>

        <p className="text-sm lg:text-lg">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;

{
  /* <span className="loading loading-dots loading-xl"></span> */
}
