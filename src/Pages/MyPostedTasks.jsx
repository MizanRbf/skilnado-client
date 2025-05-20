import React, { use, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthContext";
import TaskCard from "../Components/TaskCard";
import MyTaskCard from "../Components/MyTaskCard";
import { Link } from "react-router";

const MyPostedTasks = () => {
  const { user } = use(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  console.log(myTasks);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://skilnado-server.vercel.app/tasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTasks(data))
        .catch((error) => console.log(error.message));
    }
  }, [user]);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="my-10">
        <div className="text-center">
          <h1 className=" text-4xl mb-4">My Posted Tasks</h1>

          <button className="border rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
            <Link className="font text-xl" to="/addTask">
              Add Task
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myTasks.map((myTask) => (
            <MyTaskCard
              myTasks={myTasks}
              setMyTasks={setMyTasks}
              myTask={myTask}
            ></MyTaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPostedTasks;
