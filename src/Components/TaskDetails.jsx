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
    <div className="max-w-[1200px] mx-auto mt-30 md:mt-20 mb-10">
      <div className="bg-secondary py-4 rounded-sm mb-10">
        <p className="text-center text-white text-xl md:text-4xl font-bold">
          You bid for{" "}
          <span className="bg-white text-secondary p-1 rounded-full mx-2 md:mx-4 ">
            {bids.length}
          </span>{" "}
          opportunities.
        </p>
      </div>

      <div className="bg-secondary text-white rounded-sm">
        <div className="flex items-center justify-between p-6">
          <div>
            <h2> {taskTitle}</h2>
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
      <Link className="font text-xl" to="/browseTasks">
        <button className="border rounded-sm px-3 mb-4 bg-secondary text-white flex gap-2 items-center mt-6 cursor-pointer">
          <IoReturnDownBack className="text-4xl font-bold" />
          <span className="font-bold">Browse Tasks</span>
        </button>
      </Link>
    </div>
  );
};

export default TaskDetails;
