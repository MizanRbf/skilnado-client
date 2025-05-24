import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <header>
        {/* Header */}
        <Header></Header>
      </header>

      {/* Main */}
      <main className="max-w-[1200px] px-4 mx-auto min-h-[calc(100vh-288px)] md:mt-0">
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
