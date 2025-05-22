import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Deadline from "./Deadline";

const FeaturedCard = ({ featuredTask }) => {
  const { _id, taskTitle, category, budget, email, name } = featuredTask;

  return (
    <div className="bg-base-300 p-6 rounded-sm text-black">
      <Helmet>
        <title>Skilnado || Featured Task</title>
      </Helmet>
      <div>
        <h2>{taskTitle}</h2>
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
          <Deadline deadline={featuredTask?.deadline}></Deadline>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
