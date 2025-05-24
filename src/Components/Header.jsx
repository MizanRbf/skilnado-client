import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { Tooltip } from "react-tooltip";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import DarkMode from "./DarkMode";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("signOut successfully");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-[#131b00] text-black border-2 border-b-[#3bb90565] border-x-0 border-t-0 py-4 fixed top-0 right-0 left-0 z-9">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-3 relative">
          {/* Responsive Menubar */}
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <RxCross2 className="text-primary cursor-pointer  lg:hidden text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-primary cursor-pointer lg:hidden text-2xl" />
            )}
          </span>
          <img className="w-30 md:w-50" src="/assets/logo.png" alt="" />
          <ul
            className={`top-13 left-0 absolute p-1 shadow bg-[#0e2b01] border-2 border-[#3bb90565] *:hover:bg-white *:hover:text-black *:hover:duration-300 rounded-md text-lg font-bold text-white space-y-2 z-9 ${
              !open ? "hidden" : "block"
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addTask">Add Task</Link>
            </li>
            <li>
              <Link to="/browseTasks">Browse Tasks</Link>
            </li>
            <li>
              <Link to="/myPostedTasks">My Posted Tasks</Link>
            </li>
          </ul>
        </div>

        {/* Menubar for Large Device */}
        <ul className="lg:flex text-white gap-4 md:gap-10 hidden">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addTask">Add Task</NavLink>
          </li>
          <li>
            <NavLink to="/browseTasks">Browse Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/myPostedTasks">My Posted Tasks</NavLink>
          </li>
        </ul>

        {/* Login Info */}
        <div className="flex gap-4 items-center">
          <div className="bg-white rounded-4xl p-1 rounded-">
            <DarkMode></DarkMode>
          </div>
          {/* User Info */}
          <div>
            {user && (
              <a className="my-anchor-element">
                <div className="relative group cursor-pointer ring-primary ring-2 ring-offset-2 rounded-full">
                  <img
                    className=" rounded-full min-w-[30px] md:min-w-[35px] h-[30px] md:h-[35px]"
                    src={user.photoURL}
                    alt="User"
                  />
                </div>

                <Tooltip anchorSelect=".my-anchor-element" place="left">
                  <p>{user?.displayName || "User"}</p>
                </Tooltip>
              </a>
            )}
          </div>
          {/* Log Button */}
          <div>
            {user ? (
              <button
                onClick={handleSignOut}
                to=""
                className="bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
