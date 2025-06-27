import React from "react";
import { Outlet } from "react-router";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        {/* Header */}
        <Navbar></Navbar>
      </header>

      {/* Main */}
      <main className="max-w-[1500px] px-4 mx-auto min-h-[calc(100vh-288px)] md:mt-0">
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <footer className="text-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
