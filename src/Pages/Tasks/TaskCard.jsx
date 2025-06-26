import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Deadline from "../../shared/Deadline";

const TaskCard = ({ task }) => {
  const { _id, taskTitle, category, budget, email, name } = task;

  return (
    <div className="bg-secondary text-white rounded-bl-4xl rounded-br-4xl border border-primary">
      <div className="bg-black text-center py-2">
        <h2>{taskTitle}</h2>
      </div>
      <div className="p-6 space-y-2">
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
        <div className="bg-white text-black rounded-xl text-center mt-4 font-bold">
          <Deadline deadline={task?.deadline}></Deadline>
        </div>
      </div>
      {/* Details Button */}
      <Link to={`/browseTasks/${_id}`}>
        <button className="bg-primary p-2  text-white mt-3 w-full rounded-bl-4xl rounded-br-4xl font-bold text-xl cursor-pointer">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default TaskCard;
