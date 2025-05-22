import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateMyTask = () => {
  const navigate = useNavigate();
  const myTask = useLoaderData();
  const { _id, taskTitle, deadline, budget, email, name, description } = myTask;

  // Handle Update MyTask
  const handleUpdateMyTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedMyTasks = Object.fromEntries(formData.entries());

    console.log(updatedMyTasks);

    // Update My Tasks
    fetch(`https://skilnado-server.vercel.app/tasks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMyTasks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            draggable: true,
          });
          console.log("after updated", data);
          navigate("/myPostedTasks");
        }
      });
  };

  return (
    <div className="p-28">
      {/* Content */}
      <div className="text-center p-16">
        <h1 className="text-4xl font-bold">Update Your Data</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdateMyTask} className="bg-base-300 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
            <label className="label">Task Title</label>
            <input
              type="text"
              defaultValue={taskTitle}
              name="taskTitle"
              className="input w-full"
              placeholder="Enter Task Name"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <select defaultValue="Category" name="category" className="select">
              <option disabled={true}>Category</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Deadline</label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              className="input w-full"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Budget</label>
            <input
              type="text"
              defaultValue={budget}
              name="budget"
              className="input w-full"
              placeholder="Enter Task Budget"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">User Email</label>
            <input
              type="email"
              value={email}
              name="email"
              className="input w-full"
              placeholder="Enter Your Email"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              value={name}
              name="name"
              className="input w-full"
              placeholder="Enter Your Name"
            />
          </fieldset>
        </div>
        {/* Description */}
        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
          <label className="label">Description</label>
          <textarea
            type="text"
            defaultValue={description}
            name="description"
            className="input w-full"
            placeholder="Text Details"
          />
        </fieldset>
        {/* Photo */}
        <fieldset className="fieldset  rounded-box w-full p-4 ">
          <input
            type="submit"
            className="input w-full font text-white bg-primary text-xl cursor-pointer"
            value="Update"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateMyTask;
