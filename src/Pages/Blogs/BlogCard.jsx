import React from "react";

const BlogCard = ({ ques }) => {
  const { id, question, answer } = ques;
  return (
    <div className="border border-secondary mb-4 p-4 rounded-lg">
      <h3>
        {id}. {question}
      </h3>
      <hr className="text-slate-400 border-dashed my-4" />
      <p>
        <span className="text-black font-semibold">Answer:</span> {answer}
      </p>
    </div>
  );
};

export default BlogCard;

{
  /* <span className="loading loading-dots loading-xl"></span> */
}
