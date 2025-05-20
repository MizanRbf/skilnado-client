import React from "react";
import { Helmet } from "react-helmet-async";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTaskCard = ({ myTask, myTasks, setMyTasks }) => {
  const { _id, taskTitle, category, deadLine, budget, email, name } = myTask;

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
        fetch(`http://localhost:3000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              // alert('') module dekhe alert daw
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
    <div className="bg-base-300 flex items-center justify-between p-6 rounded-sm">
      <Helmet>
        <title>Skilnado || MyTask</title>
      </Helmet>
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
          <span className="font-bold">DeadLine: </span> {deadLine}
        </p>
        {/* Update Button */}
        <Link to={`/updateMyTask/${_id}`}>
          <button className="bg-black p-2 rounded-sm text-white">
            <MdEdit />
          </button>
        </Link>
        {/* Delete Button */}
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-black ml-3 p-2 rounded-sm text-white"
          >
            <MdDelete />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyTaskCard;
