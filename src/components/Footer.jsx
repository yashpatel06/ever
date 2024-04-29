import Logo2x from "../assets/logo2x.png";
import Email from "../assets/email.png";
import Location from "../assets/Black.png";
import Call from "../assets/Vector.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="mx-2 lg:w-full -top-28 bottom-0 right-0 left-0 p-6 bg-white rounded-md shadow-2xl lg:max-w-[800px] flex flex-col justify-center absolute lg:mx-auto items-center h-[200px]">
          <h2 className="text-[30px] lg:text-[40px] font-semibold text-center text-zinc-800 mb-6">
            Subscribe Our Newsletter
          </h2>
          <div className="flex justify-between bg-[#325131] max-w-[300px] lg:max-w-[450px] items-center shadow-xl px-2 xl:px-3 py-3  rounded-lg  xl:w-full ">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="bg-transparent pl-2  outline-none border-none text-black placeholder-white"
              />
            </div>
            <button className="bg-white text-black px-4 py-3 border-none rounded-lg">
              Search Now
            </button>
          </div>
        </div>

        <div className="bg-[#325131] h-full pt-32 ">
          <div className="flex flex-wrap items-center">
            <div className="container flex flex-col xl:flex-row items-center xl:flex justify-between">
              <div className="mt-14">
                <img src={Logo2x} alt="Logo2x" />
              </div>
              <div className="flex flex-col md:flex-row justify-center lg:gap-20 w-full items-center xl:flex gap-8 text-white lg:mt-10">
                <div className="flex mt-10 lg:gap-20 lg:mt-0">
                  <div className="w-full">
                    <h3 className="font-semibold w-full text-xl mb-4 text-center text-[#D7DE96]">
                      Quick Links
                    </h3>
                    <ul className="space-y-2 list-none ">
                      <li className="">
                        <Link to={"#"} className="text-white no-underline  ">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Our Mission
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Awards
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold text-xl mb-4 text-center text-[#D7DE96]">
                      Main Links
                    </h3>
                    <ul className="space-y-2 list-none">
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Residential
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Commercial
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to={""} className="text-white no-underline">
                          Terms & Condition
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col max-w-[300px] w-full lg:max-w-[350px] text-left justify-center md:mt-[110px] lg:mt-[70px]">
                  <h3 className="font-semibold text-xl mb-4 text-[#D7DE96]">
                    Contact Us
                  </h3>
                  <p className=" flex items-start gap-5">
                    <img src={Location} alt="Location" />
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </p>
                  <p className="mt-4 flex items-start gap-5">
                    <img src={Call} alt="call" />
                    <span>
                      <span className="font-bold">Phone:</span> 079-4000-1300,
                      +91-9898577877
                    </span>
                  </p>
                  <p className="mt-4 flex items-start gap-5 w-full">
                    <img src={Email} alt="Email" className="" />
                    <span className="font-bold">info@evermark.com</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#D7DE96] h-[1px] mx-10 mt-10"></div>
          <div className="flex flex-col md:flex-row pb-10 justify-between mx-10 mt-3">
            <p className="text-white text-[12px] text-center w-full md:text-left">
              Copyrights © 2024 Evermark Group All Rights Reserved.
            </p>
            <div className="flex gap-2 w-full justify-center md:justify-end">
              <img src={facebook} alt="facebook" className="w-6" />
              <img src={instagram} alt="instagram" className="w-6" />
              <img src={twitter} alt="twitter" className="w-6" />
              <img src={youtube} alt="youtube" className="w-6" />
              <img src={linkedin} alt="linkedin" className="w-6" />
              <img src={whatsapp} alt="whatsapp" className="w-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
