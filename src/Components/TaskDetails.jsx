import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();
  console.log(task);
  const { _id, taskTitle, category, deadline, budget, email, name } = task;
  const [bidsCount, setBidsCount] = useState(0);

  const handleBidCount = () => {
    setBidsCount(bidsCount + 1);
  };
  return (
    <div className="max-w-[1200px] mx-auto my-20 px-10">
      <h2 className="text-center">You bid for {bidsCount} opportunities.</h2>
      <button className="rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
        <Link className="font text-xl" to="/">
          Go Home
        </Link>
      </button>
      <div className="bg-base-300 rounded-sm">
        <div className="flex items-center justify-between p-6">
          <div>
            <h2>Task Title: {taskTitle}</h2>
          </div>
          <div>
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Email:</span> {email}
            </p>
            <p>
              <span className="font-bold">Budget:</span> {budget}
            </p>
            <p>
              <span className="font-bold">Deadline: </span> {deadline}
            </p>
          </div>
        </div>
        <button
          onClick={handleBidCount}
          className="w-full bg-primary rounded-br-sm rounded-bl-sm text-white py-2"
        >
          Bid Now
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
