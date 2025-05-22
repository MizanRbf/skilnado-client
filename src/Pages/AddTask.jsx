import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const AddTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(null);

  // Date Picker
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  // Handle Add Tasks
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    // newTask.deadline = selectedDate?.toISOString().split("T")[0];
    console.log(newTask);

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
          navigate("/browseTasks");
        }
      });
  };

  return (
    <div className="p-28 text-black">
      {/* Content */}
      <div className="text-center p-16">
        <h1 className="text-4xl font-bold">Add New Task</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleAddTask} className="bg-base-300 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
            <label className="label">Task Title</label>
            <input
              type="text"
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
            {/* <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/DD/YYYY"
            /> */}
          </fieldset>

          {/* Budget */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Budget</label>
            <input
              type="text"
              name="budget"
              className="input w-full"
              placeholder="Enter Task Budget"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">User Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter Your Email"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Your Name"
            />
          </fieldset>
        </div>
        {/* Photo */}
        <fieldset className="fieldset  rounded-box w-full p-4 ">
          <input
            type="submit"
            className="input w-full font text-white bg-primary text-xl cursor-pointer"
            value="Add Task"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AddTask;
