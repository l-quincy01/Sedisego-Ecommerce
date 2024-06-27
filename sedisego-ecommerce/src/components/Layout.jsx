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
          <HeaderBackground />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
