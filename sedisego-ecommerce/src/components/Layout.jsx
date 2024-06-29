import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
  const showOpaque =
    location.pathname === "/product" || location.pathname === "/Contact"; // Adjust based on your routes

  return (
    <>
      <div className="">
        <header>
          <Header showOpaque={showOpaque} />
        </header>
        <main className="mt-10">
          <Outlet />
        </main>
        <footer className="mt-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
