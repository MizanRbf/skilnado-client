import React, { use, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Deadline from "../Components/Deadline";

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

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://skilnado-server.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingMyTasks = myTasks.filter(
                (myTask) => myTask._id !== id
              );
              setMyTasks(remainingMyTasks);
              console.log("after delete ", data);
            }
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Helmet>
        <title>Skilnado || MyTask</title>
      </Helmet>
      <div className="my-10">
        <div className="text-center">
          <h1 className=" text-4xl mb-4">My Posted Tasks</h1>

          <button className="border rounded-sm px-3 mb-4 bg-primary text-white border-secondary">
            <Link className="font text-xl" to="/addTask">
              Add Task
            </Link>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTasks.map((myTask, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{myTask.name}</td>
                  <td>{myTask.category}</td>
                  <td>
                    <Deadline deadline={myTask.deadline}></Deadline>
                  </td>
                  <div className="flex items-center gap-3">
                    {/* Update Button */}
                    <Link to={`/updateMyTask/${myTask._id}`}>
                      <button className="bg-blue-700 p-2 rounded-sm text-white">
                        <MdEdit />
                      </button>
                    </Link>
                    {/* Delete Button */}
                    <Link>
                      <button
                        onClick={() => handleDelete(myTask._id)}
                        className="bg-red-500 p-2 rounded-sm text-white"
                      >
                        <MdDelete />
                      </button>
                    </Link>
                    {/* Bids Button */}
                    <Link>
                      <button className="bg-black py-1 px-3 rounded-sm text-white">
                        Bids
                      </button>
                    </Link>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedTasks;
