import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { Tooltip } from "react-tooltip";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
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
      <div className="flex justify-between items-center max-w-[1800px] mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo></Logo>
          {/* Menubar for Small Device */}
          <nav
            className={`top-18 lg:hidden right-0 left-0 absolute py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
              open
                ? "opacity-100 translate-y-2 visible"
                : "opacity-0 -translate-y-5 invisible"
            }`}
          >
            <div>
              <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
                <li>
                  <Link to="/">
                    <button
                      className="w-full text-left cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/browseAllTasks">
                    <button
                      className="w-full text-left cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      Browse All Tasks
                    </button>
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link to="/dashboard">
                      <button
                        className="w-full text-left cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        Dashboard
                      </button>
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/blogs">
                    <button
                      className="w-full text-left cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      Blogs
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Login Button */}

            <div className="px-10">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="cursor-pointer py-2 mt-2 bg-white rounded-sm text-primary shadow-2xl w-full hover:bg-[rgb(248,237,208)]"
                >
                  Logout
                </button>
              ) : (
                <Link to="/auth/login">
                  <button
                    className="cursor-pointer py-2 mt-2 bg-white rounded-sm
                    text-primary shadow-2xl w-full"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>

        {/* Menubar for Large Device */}
        <ul className="lg:flex text-white gap-4 md:gap-10 hidden">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/browseTasks">Browse All Tasks</NavLink>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">
                <button
                  className="w-full text-left cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </button>
              </Link>
            </li>
          )}
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
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

          {/* Responsive Icon */}
          <div className="py-1 px-3 rounded-sm lg:hidden bg-slate-200 shadow-2xl">
            <span onClick={() => setOpen(!open)}>
              {open ? (
                <RxCross2 className="cursor-pointer   text-2xl" />
              ) : (
                <MdMenu className="cursor-pointer text-2xl" />
              )}
            </span>
          </div>

          {/* Log Button */}
          <div className="hidden lg:block">
            {user ? (
              <button
                onClick={handleSignOut}
                className="cursor-pointer bg-primary rounded-sm text-sm md:text-lg py-1 md:py-2 px-2 md:px-6 font-bold text-white"
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

export default Navbar;
