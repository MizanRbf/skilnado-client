import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

import { IoReturnDownBack } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import TaskCard from "./TaskCard";
import CustomDropdown from "../../shared/CustomDropdown";

const BrowseTasks = () => {
  const initialTasks = useLoaderData();
  const [tasks, setTasks] = useState(initialTasks);
  const [sortType, setSortType] = useState("");

  // handle sort
  const handleSort = (type) => {
    let sorted = [...tasks];
    if (type === "deadline-asc") {
      sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (type === "deadline-desc") {
      sorted.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    } else if (type === "budget-asc") {
      sorted.sort((a, b) => parseFloat(a.budget) - parseFloat(b.budget));
    } else if (type === "budget-desc") {
      sorted.sort((a, b) => parseFloat(b.budget) - parseFloat(a.budget));
    }
    setSortType(type);
    setTasks(sorted);
  };

  return (
    <div className="pt-30">
      <div className="max-w-[1500px] mx-auto px- text-black mb-10">
        <Helmet>
          <title>Skilnado || BrowseTasks</title>
        </Helmet>
        <div className="">
          <div className="flex justify-between">
            <p className="text-xl md:text-4xl font-bold mb-4 px-4 md:px-20 rounded-r-full py-1 text-white text-center inline-block bg-secondary">
              All Tasks
            </p>
            <CustomDropdown onSelect={handleSort} selected={sortType} />
          </div>

          {/* Task Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
