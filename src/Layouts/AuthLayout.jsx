import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Header></Header>
      </header>

      {/* Outlet */}
      <main className="w-11/12 mt-30 mx-auto min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <footer className="text-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
