import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { IoReturnDownBack } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import BidForm from "./BidForm";
import Deadline from "./Deadline";

const TaskDetails = () => {
  const { bids, setBids, user } = useContext(AuthContext);
  const task = useLoaderData();
  const {
    _id,
    taskTitle,
    category,
    deadline,
    budget,
    email,
    name,
    description,
  } = task;

  useEffect(() => {
    fetch("https://skilnado-server.vercel.app/bids")
      .then((res) => res.json())
      .then((data) => {
        const userBids = data.filter((userBid) => userBid.userId == user?.uid);
        setBids(userBids);
      });
  }, [user?.uid]);

  return (
    <div className="max-w-[1200px] mx-auto mt-40 mb-10">
      <Helmet>
        <title>Skilnado || Task Details</title>
      </Helmet>

      {/* Bids Counting */}
      <div className="bg-secondary py-4 rounded-sm mb-10">
        <div className="text-center text-white text-xl md:text-4xl font-bold">
          You bid for{" "}
          <p className="bg-white text-secondary p-1 rounded-full mx-2 md:mx-4 inline-block w-10 md:w-18 h-9 md:h-12">
            {bids.length}
          </p>{" "}
          opportunities.
        </div>
      </div>

      {/* Task Details */}
      <div className="bg-white text-black border-2 border-primary rounded-xl">
        <div className="h-8 rounded-tl-lg rounded-tr-lg  bg-secondary"></div>
        <div className=" p-6">
          {/* Title */}
          <div>
            <h1 className="text-center"> {taskTitle}</h1>
          </div>
          {/* Details */}
          <div className="flex justify-between mx-10">
            {/* Task Related */}
            <div>
              <p>
                <span className="font-bold">Category:</span> {category}
              </p>

              <p>
                <span className="font-bold">Budget:</span> {budget}
              </p>
              <p>
                <span className="font-bold">Deadline: </span> {deadline}
              </p>
              <p>
                <span className="font-bold">Description: </span> {description}
              </p>
            </div>
            {/* User Related */}
            <div>
              <p>
                <span className="font-bold">User Name:</span> {name}
              </p>
              <p>
                <span className="font-bold">Email:</span> {email}
              </p>
            </div>
          </div>
          <div className="bg-black text-white text-center pb-4 rounded-4xl font-bold mt-4 pt-1">
            <Deadline deadline={deadline}></Deadline>
          </div>
        </div>
        {/* Bid Form */}
        <div>
          <BidForm></BidForm>
        </div>
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
