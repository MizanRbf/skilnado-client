import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Deadline from "./Deadline";

const FeaturedCard = ({ featuredTask }) => {
  const { _id, taskTitle, category, budget, email, name } = featuredTask;

  return (
    <div className="bg-secondary rounded-tr-sm rounded-tl-sm rounded-bl-4xl rounded-br-4xl text-black border border-primary ">
      <Helmet>
        <title>Skilnado || Featured Task</title>
      </Helmet>
      <div className="bg-black text-white text-center rounded-tr-sm rounded-tl-sm">
        <h2 className="py-2">{taskTitle}</h2>
      </div>
      <div className="p-6 text-base-200">
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
        <div className="bg-white rounded-2xl text-center font-bold">
          <Deadline deadline={featuredTask?.deadline}></Deadline>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
