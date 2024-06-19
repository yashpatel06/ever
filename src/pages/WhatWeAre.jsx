/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const WhatWeAre = () => {
  return (
    <>
      <div className="text-black flex flex-col md:flex-row gap-10 justify-center md:justify-evenly my-10 mx-4 sm:mx-10">
        <div>
          <h2 className="text-center sm:text-left text-[28px] md:text-[30px] font-semibold">
            What We Do
          </h2>
          <ul className="flex flex-col mt-4 items-start text-[18px] font-medium">
            <li>Apartments</li>
            <li>Retail</li>
            <li>Offices</li>
            <li>Leasing</li>
            <li>Plotting</li>
            <li>Industrial Park</li>
          </ul>
        </div>
        <div>
          <h1 className="text-center sm:text-left text-[28px] md:text-[30px] font-semibold">
            What We Are
          </h1>
          <ul className="text-[18px] mt-4 font-medium">
            {" "}
            <li className="min-w-[200px]">
              <Link to="/about-evermark" className="text-black no-underline">
                <div className="flex w-full justify-between">
                  <span className="flex relative group w-fit ">
                    <span>About Ever Mark</span>
                    <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                      className="w-4"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/mission-vision" className="text-black no-underline">
                <div className="flex w-full justify-between">
                  <span className="flex relative group w-fit ">
                    <span>Mission & Vision</span>
                    <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                      className="w-4"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/our-team" className="text-black no-underline">
                <div className="flex w-full justify-between">
                  <span className="flex relative group w-fit ">
                    <span>Our Team</span>
                    <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                      className="w-4"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/founder-desk" className="text-black no-underline">
                <div className="flex justify-between w-full">
                  <span className="flex relative group w-fit ">
                    <span>Message From Founder's Desk</span>
                    <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="black"
                      className="w-4"
                    >
                      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-black text-center  my-10 mx-4 sm:mx-10">
        <h1 className="text-center sm:text-left md:text-center text-[28px] md:text-[30px] font-semibold">
          Connect With Us
        </h1>
        <ul className="flex flex-col mt-4 md:flex-row md:flex-wrap w-full md:justify-evenly text-[18px] font-medium">
          <li>
            <Link to="/offer-land" className="text-black no-underline">
              <span className="flex relative group w-fit ">
                <span className="cursor-pointer">Offer a land</span>
                <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </span>
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/channel-partner"} className="text-black no-underline">
              <span className="flex relative text-left group w-fit ">
                <span className="cursor-pointer">Become a Channel Partner</span>
                <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/feedback"} className="text-black no-underline">
              <span className="flex relative group w-fit ">
                <span className="cursor-pointer">Share Feedback</span>
                <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"} className="text-black no-underline">
              <span className="flex relative group w-fit ">
                <span className="cursor-pointer">Contact us</span>
                <span className="absolute -bottom-0 duration-500  left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhatWeAre;
