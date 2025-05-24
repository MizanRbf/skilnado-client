import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  // Handle Add Tasks
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    // Create Task Collection in DB
    fetch("https://skilnado-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding tasks to db", data);

        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          newTask._id = data.insertedId;
          const newTasks = [...tasks, newTask];
          setTasks(newTasks);
          form.reset();
          navigate("/myPostedTasks");
        }
      });
  };

  return (
    <div className="pt-30">
      <div className="mb-10 text-black">
        <Helmet>
          <title>Skilnado || Add Task</title>
        </Helmet>
        {/* Content */}
        <div className="text-center mb-10">
          <h1 className="mb-4 py-1 text-white text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm bg-secondary">
            Add Task
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleAddTask} className="bg-secondary p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
              <label className="label text-white">Task Title</label>
              <input
                type="text"
                name="taskTitle"
                className="input w-full"
                placeholder="Enter Task Name"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-white">Category</label>
              <select
                defaultValue="Category"
                name="category"
                className="select w-full"
              >
                <option disabled={true}>Category</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Writing</option>
                <option>Marketing</option>
              </select>
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-white">Deadline</label>
              <input type="date" name="deadline" className="input w-full" />
            </fieldset>
            {/* Budget */}
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-white">Budget</label>
              <input
                type="text"
                name="budget"
                className="input w-full"
                placeholder="Enter Task Budget"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-white">User Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter Your Email"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-white">User Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter Your Name"
              />
            </fieldset>
          </div>
          {/* Description */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="label text-white">Description</label>
            <textarea
              type="text"
              name="description"
              className="input w-full"
              placeholder="Text Details"
            />
          </fieldset>

          {/* Button */}
          <fieldset className="fieldset  rounded-box w-full p-4 ">
            <input
              type="submit"
              className="input w-full font text-white bg-primary text-xl cursor-pointer"
              value="Add Task"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
