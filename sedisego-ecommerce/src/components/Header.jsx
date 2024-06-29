import { useEffect, useState } from "react";
import sedisegoLogoLight from "../assets/sedisego-logo-Light.png";
import sedisegoLogoDark from "../assets/sedisego-logo-Dark.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <div
          className={`px-16 flex flex-row items-center justify-between  h-1/2 w-full ${
            isScrolled ? "py-6 shadow-lg" : "py-10 mt-5"
          }`}
        >
          {/* Logo */}
          <a href="/">
            <img
              className="w-1/5"
              src={isScrolled ? sedisegoLogoDark : sedisegoLogoLight}
              alt="Sedisego Logo"
            />
          </a>

          <nav>
            {/* Hamburger menu */}
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-current"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-current"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-current"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
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
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/about">SALE</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/portfolio">PROJECTS</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Navbar */}
            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
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
    </>
  );
}
