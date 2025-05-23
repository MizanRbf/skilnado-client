import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { IoReturnDownBack } from "react-icons/io5";

const TaskDetails = () => {
  const { bids, setBids } = useContext(AuthContext);
  const task = useLoaderData();
  const { _id, taskTitle, category, deadline, budget, email, name } = task;

  useEffect(() => {
    fetch("https://skilnado-server.vercel.app/bids")
      .then((res) => res.json())
      .then((data) => setBids(data));
    // setBids([...bids, bidsData]);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto my-20 px-10">
      <h1 className="text-center text-primary">
        You bid for {bids.length} opportunities.
      </h1>
      <Link className="font text-xl" to="/browseTasks">
        <button className="border rounded-sm px-3 mb-4 bg-primary text-white flex gap-2 items-center mt-6 cursor-pointer">
          <IoReturnDownBack className="text-4xl font-bold" />
          <span className="font-bold">Browse Tasks</span>
        </button>
      </Link>
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
        <Link to={`/bids/${_id}`}>
          <button className="w-full bg-primary rounded-br-sm rounded-bl-sm text-white py-2">
            Bid Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TaskDetails;
