//import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeaderBackground from "./headerBackground";

function Layout() {
  return (
    <>
      <div className="">
        <header>
          <Header />
          <HeaderBackground className="mb-5" />
        </header>
        <main className=" mt-10 p-20">
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
