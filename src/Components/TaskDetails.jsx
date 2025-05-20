import React from "react";
import { Link, useLoaderData } from "react-router";

const TaskDetails = () => {
  const task = useLoaderData();
  console.log(task);
  const { _id, taskTitle, category, deadLine, budget, email, name } = task;
  return (
    <div className="max-w-[1200px] mx-auto my-20 px-10">
      <button className="border rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
        <Link className="font text-xl" to="/">
          Go Home
        </Link>
      </button>
      <div className="bg-base-300 flex items-center justify-between p-6 rounded-sm">
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
            <span className="font-bold">DeadLine: </span> {deadLine}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
