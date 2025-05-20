import React, { useState } from "react";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  // Handle Add Coffee
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask);

    // Create Coffees Collection in DB
    fetch("https://skilnado-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding coffee to db", data);

        if (data.insertedId) {
          // alert('added successfully')
          newTask._id = data.insertedId;
          const newCoffees = [...tasks, newTask];
          setTasks(newCoffees);
          form.reset();
        }
      });
  };

  return (
    <div className="p-28">
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
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Enter Task Category"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Deadline</label>
            <input
              type="text"
              name="deadLine"
              className="input w-full"
              placeholder="Enter Task Deadline"
            />
          </fieldset>
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
