import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import TaskCard from "../Components/TaskCard";

const BrowseTasks = () => {
  const initialTasks = useLoaderData();

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="max-w-[1200px] mx-auto px-4 text-black">
      <div className="my-10">
        <div className="text-center">
          <h1 className=" text-4xl mb-4">All Tasks</h1>

          <button className="border rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
            <Link className="font text-xl" to="/addTask">
              Add Task
            </Link>
          </button>
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
      </div>
    </div>
  );
};

export default BrowseTasks;
