import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Deadline from "./Deadline";

const TaskCard = ({ task }) => {
  const { _id, taskTitle, category, deadLine, budget, email, name } = task;

  return (
    <div className="bg-base-300 flex items-center justify-between p-6 rounded-sm">
      <Helmet>
        <title>Skilnado || Task Details</title>
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
        <div>
          <Deadline deadline={task?.deadline}></Deadline>
        </div>
        {/* Details Button */}
        <Link to={`/browseTasks/${_id}`}>
          <button className="bg-primary p-2 rounded-sm text-white mt-3">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
