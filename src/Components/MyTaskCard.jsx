import React from "react";
import { Helmet } from "react-helmet-async";

const MyTaskCard = ({ myTask }) => {
  const { _id, taskTitle, category, deadLine, budget, email, name } = myTask;
  return (
    <div className="bg-base-300 flex items-center justify-between p-6 rounded-sm">
      <Helmet>
        <title>Skilnado || MyTask</title>
      </Helmet>
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
        {/* Details Button */}
        {/* <Link to={`/browseTasks/${_id}`}>
          <button className="bg-primary p-2 rounded-sm text-white">
            See Details
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default MyTaskCard;
