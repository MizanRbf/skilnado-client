import React from "react";
import { Helmet } from "react-helmet-async";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const MyTaskCard = ({ myTask, myTasks, setMyTasks }) => {
  const { _id, taskTitle, category, deadLine, budget, email, name } = myTask;

  // Handle Delete
  const handleDelete = (id) => {
    // alert('') swal alert dekhate hobe
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
        <Link to={`/updateCoffee/${_id}`}>
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
