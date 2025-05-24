import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Deadline from "../Components/Deadline";
import { IoReturnDownBack } from "react-icons/io5";

const MyPostedTasks = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const [myTasks, setMyTasks] = useState([]);
  const [bidsOfThis, setBidsOfThis] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://skilnado-server.vercel.app/tasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTasks(data))
        .catch((error) => console.log(error.message));
      // fetch Bids
      fetch("https://skilnado-server.vercel.app/bids")
        .then((res) => res.json())
        .then((data) => setBids(data))
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

  // Modal
  const handleModal = (taskId) => {
    if (!bids || bids.length == 0) {
      Swal.fire("Please wait", "Loading bids...", "info");
      return;
    }

    const filteredBids = bids.filter((bid) => bid?.projectId == taskId);
    setBidsOfThis(filteredBids);
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-30 md:mt-20 mb-6">
      <Helmet>
        <title>Skilnado || MyTasks</title>
      </Helmet>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Total Bids: {bidsOfThis.length}</h3>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Title */}
      <div className="my-10">
        <div className="text-center">
          <h1 className="mb-4 py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary">
            My Posted Tasks
          </h1>
        </div>

        {/* Empty Message */}
        <div
          className={`bg-slate-200 rounded-lg py-30 ${
            myTasks.length > 0 ? "hidden" : "block"
          }`}
        >
          <h1 className="text-center">You have not added any task yet.</h1>
          <h4 className="text-center mt-8">
            Go to Add Task for posting your task.
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="table bg-secondary text-white">
            {/* head */}
            <thead
              className={`text-white text-lg ${myTasks.length < 1 && "hidden"}`}
            >
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
                <tr className="border-2 border-white">
                  <th>{index + 1}</th>
                  <td>{myTask.name}</td>
                  <td>{myTask.category}</td>
                  <td>
                    <div className="bg-white text-black rounded-xl text-center font-bold">
                      <Deadline deadline={myTask.deadline}></Deadline>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      {/* Update Button */}
                      <Link to={`/updateMyTask/${myTask._id}`}>
                        <button className="bg-blue-700 p-2 rounded-sm text-white btn border-0">
                          <MdEdit className="text-xl" />
                        </button>
                      </Link>
                      {/* Delete Button */}
                      <Link>
                        <button
                          onClick={() => handleDelete(myTask._id)}
                          className="bg-red-500 p-2 rounded-sm text-white btn border-0"
                        >
                          <MdDelete className="text-xl" />
                        </button>
                      </Link>
                      {/* Bids Button */}
                      <Link>
                        <button
                          onClick={() => handleModal(myTask._id)}
                          className="  rounded-sm text-white btn bg-primary"
                        >
                          Bids
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link className="font text-xl" to="/addTask">
            <button className="border rounded-sm px-3 bg-primary text-white flex gap-2 items-center mt-6 mb-4 cursor-pointer">
              <IoReturnDownBack className="text-4xl font-bold" />
              <span className="font-bold"> Add Task</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPostedTasks;
