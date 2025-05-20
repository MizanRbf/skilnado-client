import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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
    <div className="navbar bg-base-100 px-4 max-w-[1200px] mx-auto py-4 md:static fixed top-0 right-0 left-0 z-9">
      {!isHome && (
        <div className="absolute border-b border-slate-200 w-full top-[72px] left-0 right-0"></div>
      )}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          {/* Responsive Menubar */}
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-primary text-white rounded-lg z-1 mt-3 w-52 p-2 shadow *:hover:text-black *:hover:bg-white *:rounded-sm *:duration-300"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Add Task</Link>
            </li>
            <li>
              <Link to="/">Browse Tasks</Link>
            </li>
            <li>
              <Link to="/">My Posted Tasks</Link>
            </li>
            <li>
              <Link to="/myProfile">My Profile</Link>
            </li>
          </ul>
        </div>
        {/* <img className="w-30 md:w-50" src="/assets/logo.png" alt="" /> */}
        <h2 className="text-left mb-4 text-primary">Skilnado</h2>
      </div>

      {/* Menubar for Large Device */}
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-6 *:hover:text-primary *:hover:underline menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="navbar-end gap-3">
        {/* User Info */}
        {user && (
          <div className="relative group cursor-pointer ring-primary ring-2 ring-offset-2 rounded-full">
            <img
              className=" rounded-full min-w-[30px] md:min-w-[35px] h-[30px] md:h-[35px]"
              src={user.photoURL}
              alt="User"
            />

            <div className="absolute bottom-[10px] lg:bottom-[10px] text-primary -left-[60px] -translate-x-1/2 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
              {user.displayName || "User"}
            </div>
          </div>
        )}

        {user ? (
          <button
            onClick={handleSignOut}
            to=""
            className="btn btn-primary px-8 text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="text-white btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
