import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthContext";
import { Link, useLoaderData } from "react-router";
import { IoHome } from "react-icons/io5";
import { SiGoogletasks, SiTask } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import Stats from "./Stats";
import Chart from "./Chart";

const Dashboard = () => {
  const allTasks = useLoaderData();
  const { updateUser, user, setUser } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [bids, setBids] = useState([]);

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
  }, [user, setMyTasks]);
  // Handle Update Profile
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // Update User
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        form.reset();
      })
      .catch();
  };

  return (
    <div className="px-10 pt-10 lg:pt-0">
      <div className="max-w-[1800px] mx-auto md:mt-10 mb-20 border border-gray-200 rounded-lg shadow-xl flex flex-col lg:flex-row gap-6">
        <Helmet>
          <title>Skilnado || Dashboard</title>
        </Helmet>

        <div className="flex justify-center lg:hidden pt-8">
          <h1 className="text-center border inline-block px-4 bg-secondary text-white rounded-sm">
            User Dashboard
          </h1>
        </div>
        {/* Left Section*/}
        <div className="w-full max-w-sm shrink-0 text-white bg-secondary lg:rounded-l-lg mx-auto lg:mx-0">
          <div className="">
            {/* Profile Image */}
            <div className="text-center mt-4 py-4 mb-4 rounded-sm">
              <div className="avatar mb-6">
                <div className="ring-primary ring-offset-base-100 w-30 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h4>{user?.displayName}</h4>
              <p>{user?.email}</p>
            </div>
            <hr className="w-full mb-8" />

            {/* NavLink */}

            <div className="mx-4 mb-10">
              <ul className="space-y-4">
                <li className="flex gap-1 items-center">
                  <IoHome />
                  <Link to="/">Home</Link>
                </li>

                <li className="flex gap-1 items-center">
                  <SiTask />
                  <Link to="/browseTasks">All Tasks</Link>
                </li>
                <li className="flex gap-1 items-center">
                  <MdAssignmentAdd />
                  <Link to="/addTask">Add Task</Link>
                </li>
                <li className="flex gap-1 items-center">
                  <SiGoogletasks />
                  <Link to="/myPostedTasks">My Posted Tasks</Link>
                </li>
              </ul>
            </div>

            {/* Profile Name and Photo Update form */}

            <form
              onSubmit={handleUpdateProfile}
              className="fieldset mx-4 border p-4 border-primary mb-4"
            >
              <h4>Update Your Profile</h4>
              {/* Name */}
              <label className="label">Update Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter new name"
                required
              />
              {/* Photo */}
              <label className="label">Update Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter new photo url"
                required
              />
              <button type="submit" className="btn btn-primary mt-4 text-white">
                Save Changes
              </button>
            </form>
          </div>
        </div>
        {/* Right Section */}
        <div>
          <div className="lg:block justify-center hidden pt-4">
            <h1 className="text-center border inline-block px-4 bg-secondary text-white rounded-sm">
              User Dashboard
            </h1>
          </div>

          <div className="">
            {/* Stats */}
            <Stats myTasks={myTasks} bids={bids} allTasks={allTasks}></Stats>
            <Chart myTasks={myTasks}></Chart>
            <div
              className={`bg-slate-100 rounded-lg m-4 mb-20 py-30 ${
                myTasks.length > 0 ? "hidden" : "block"
              }`}
            >
              <h1 className="text-center text-black">Chart is not shown!</h1>
              <h4 className="text-center mt-8 text-black">
                You have not added any task yet.Go to Add Task for posting your
                task.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
