import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

import { IoReturnDownBack } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import TaskCard from "./TaskCard";

const BrowseTasks = () => {
  const initialTasks = useLoaderData();

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="pt-40">
      <div className="max-w-[1200px] mx-auto px- text-black mb-10">
        <Helmet>
          <title>Skilnado || BrowseTasks</title>
        </Helmet>
        <div className="">
          <div className="text-center">
            <h1 className="mb-4 py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary">
              All Tasks
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                tasks={tasks}
                setTasks={setTasks}
                task={task}
              ></TaskCard>
            ))}
          </div>
          <Link className="font text-xl" to="/addTask">
            <button className="border rounded-sm px-3 bg-secondary text-white flex gap-2 items-center mt-6 cursor-pointer">
              <IoReturnDownBack className="text-4xl font-bold" />
              <span className="font-bold"> Add Task</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrowseTasks;
