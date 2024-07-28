/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo2x from "../../assets/logoem.png";
import Logo2x from "../assets/logoem.png";

const Header = ({ color }) => {
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <header className="flex justify-between items-center">
        <img
          src={Logo2x}
          alt="logo"
          className="w-20 xl:w-24 2xl:w-40 cursor-pointer rounded-lg"
          onClick={() => navigate("/")}
        />
        <nav className="hidden lg:block">
          <div className="flex gap-20 items-center">
            <Link
              to={"/about-us"}
              className={`${
                color == "black"
                  ? "text-black font-medium text-[18px]"
                  : "text-white font-medium text-[18px]"
              } no-underline`}
            >
              <span className="flex relative group ">
                <span className="">About Us</span>
                {!(pathname == "/about-us") && (
                  <span
                    className={`absolute -bottom-1 duration-500  left-0 w-0 h-[2px] ${
                      color == "black" ? "bg-black" : "bg-white"
                    } transition-all group-hover:w-full`}
                  ></span>
                )}
                {pathname == "/about-us" && (
                  <span className="absolute -bottom-1 h-[2px] bg-black w-full"></span>
                )}
                {/* <span className="block mt-[2px] w-full h-[1px] border border-[#6386AD] opacity-80"></span> */}
                {/* {location.pathname == "/about-us" ? (
                  ""
                ) : (
                )}
                {location.pathname === "about-us" && (
                )} */}
              </span>
            </Link>
            {/* <Link to={""} className="text-white no-underline">
                Projects
              </Link> */}
            {/* <Link to={"/contact-us"} className="text-white no-underline">
                contact Us
              </Link> */}
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-[#325131] text-white px-4 py-3 border-none rounded-lg"
            >
              contact Us
            </button>
          </div>
        </nav>
        <div className="lg:hidden flex items-center gap-5">
          {/* <button className="bg-[#325131] text-white px-4 py-3 border-none rounded-xl">
              Register Now
            </button> */}
          <div className="relative">
            {menuOpen ? (
              <svg
                onClick={() => setmenuOpen(!menuOpen)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={color == "black" ? "black" : "currentColor"}
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setmenuOpen(!menuOpen)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={color == "black" ? "black" : "currentColor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            )}
            {menuOpen && (
              <div className="flex flex-col absolute w-[150px] gap-1 right-0 top-10 z-20">
                <Link
                  to={"/about-us"}
                  className={`${
                    color == "black"
                      ? "text-[#325131] font-medium text-[18px]"
                      : "text-white font-medium text-[18px]"
                  } no-underline text-center text-[15px]`}
                >
                  About Us
                </Link>
                {/* <Link to={""} className="text-white no-underline">
                    Projects
                  </Link> */}
                <button
                  onClick={() => navigate("/contact-us")}
                  className="bg-[#325131] text-white px-4 py-3 border-none rounded-lg"
                >
                  contact Us
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
