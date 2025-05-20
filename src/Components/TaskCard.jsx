import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";

const TaskCard = ({ task }) => {
  const { taskTitle, category, deadLine, budget, email, name } = task;

  // Handle Delete
  // const handleDelete = (id) => {
  //   // alert('') swal alert dekhate hobe
  //   fetch(`http://localhost:3000/coffees/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount) {
  //         // alert('') module dekhe alert daw
  //         const remainingCoffees = coffees.filter(
  //           (coffee) => coffee._id !== id
  //         );
  //         setCoffees(remainingCoffees);
  //         console.log("after delete ", data);
  //       }
  //     });
  // };

  return (
    <div className="bg-base-300 flex items-center justify-between p-6 rounded-sm">
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
      </div>
      <div className="flex flex-col gap-2">
        {/* Details Button */}
        {/* <Link to={`/tasks/${_id}`}>
          <button className="bg-primary p-2 rounded-sm text-white">
            <FaEye />
          </button>
        </Link> */}

        {/* Edit Button */}
        {/* <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-black p-2 rounded-sm text-white">
            <MdEdit />
          </button>
        </Link> */}
        {/* Delete Button */}
        {/* <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-base-200 p-2 rounded-sm text-white"
          >
            <MdDelete />
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default TaskCard;
