import { useState } from "react";
import "./Navbar.css";
import {
  Link,
} from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white md:text-4xl text-2xl">
              Ariful <span className=" text-[#f8024d]">Islam.</span>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              className="bg-[#f8024d] text-white rounded md:py-3 md:px-4 py-2 px-2"
              href="https://github.com/hellomrariful"
            >
              {" "}
              See Github
            </a>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className=""
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <Link
                  className="hover:text-white hover:bg-[#f8024d] py-3 px-3 rounded"
                  href="#home"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1500}
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  className="hover:text-white hover:bg-[#f8024d] py-3 px-3 rounded"
                  href="#about"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1500}
                >
                  About
                </Link>
              </li>
              <li>
              <Link
                  className="hover:text-white hover:bg-[#f8024d] py-3 px-3 rounded"
                  href="#Projects"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1500}
                >
                  Projects
                </Link>
              </li>
              <li>
              <Link
                  className="hover:text-white hover:bg-[#f8024d] py-3 px-3 rounded"
                  href="#skills"
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1500}
                >
                  Skills
                </Link>
               
              </li>
              <li>
                <Link
                  className="hover:text-white hover:bg-[#f8024d] py-3 px-3 rounded"
                  href="#contact"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
