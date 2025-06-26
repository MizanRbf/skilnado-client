import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      {/* Outlet */}
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
