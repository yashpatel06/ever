// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/logoem.png";

const Header = () => {
  return (
    <div className="flex justify-between w-full ">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center h-full gap-5 ">
          <li>About Us</li>
          <li>Projects</li>
          <li>Contacts Us</li>
          <button className="bg-[#325131] text-white px-4 py-2 rounded-md">
            Register Now
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
