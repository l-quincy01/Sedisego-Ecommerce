import { useEffect } from "react";
import { useState } from "react"; // import state
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {/* <div   className={`fixed w-full z-10 transition-transform duration-300 transform ${
        show ? "translate-y-0" : "-translate-y-full  "
      }`}>

      FOR HEADER SCROLL ANIMATION

    </div> */}

      <div className=" bg-cover bg-center  flex items-center justify-between  py-16 px-10 text-white ">
        <div className=" border border-r-0 border-l-0  border-t-1 border-b-1 border-white p-7 flex flex-row items-center">
          {/* Logo */}
          <a href="/">
            <img
              className="w-1/5"
              src="https://res.cloudinary.com/ddbbsotsg/image/upload/v1625303038/sedisego/sedisego-logo-nav-light_uk8bhj.png"
              alt=""
            />
          </a>

          <nav>
            {/* Hamburger menu */}
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                {" "}
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-white">
                  <li className="border-b border-gray-400 my-8 uppercase text-white">
                    <a href="/about">About</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase text-white">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase text-white">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Navbar */}
            <ul className="DESKTOP-MENU bg-transparent  hidden space-x-8 lg:flex  ">
              <li>
                <a href="/about">SALE</a>
              </li>
              <li>
                <a href="/portfolio">PROJECTS</a>
              </li>
              <li>
                <a href="/contact">SERVICES</a>
              </li>
            </ul>
          </nav>
        </div>

        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  );
}
