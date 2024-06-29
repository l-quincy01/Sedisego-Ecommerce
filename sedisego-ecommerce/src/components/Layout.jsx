//import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="">
        <header>
          <Header />
        </header>
        <main className=" mt-10">
          <Outlet />
        </main>
        <footer className="mt-10 ">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
