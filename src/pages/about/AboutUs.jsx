import Banner from "../../assets/evermarkbg.jpg";
import { Link, useNavigate } from "react-router-dom";
import Logo2x from "../../assets/logoem.png";
import aboutImage from "../../assets/abimg1.png";
import { useState } from "react";

const AboutUs = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="relative bg-white text-white">
      {/* <img
        src={Banner}
        alt="Background image of skyscrapers"
        className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%] w-full"
      /> */}
      <div className="relative mx-auto px-6 py-1 xl:ml-10">
        <header className="flex justify-between items-center">
          <img
            src={Logo2x}
            alt="logo"
            className="w-20 xl:w-24 2xl:w-40 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <nav className="hidden lg:block">
            <div className="flex gap-20 items-center">
              <Link
                to={"/about-us"}
                className="text-black font-semibold no-underline"
              >
                About Us
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
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  stroke="currentColor"
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
                <div className="flex flex-col absolute w-[150px] gap-1 right-0 top-10">
                  <Link
                    to={"/about-us"}
                    className="text-black no-underline text-center text-[15px]"
                  >
                    About Us
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
              )}
            </div>
          </div>
        </header>
        <div className="text-black mb-10">
          <h1 className=" text-center">About Us</h1>
          <p className="text-center">
            A Legacy Of Timeless Elegance Shivalik developers are on a quest to
            build a legacy of timeless elegance. Pioneering the skyline of the
            city already, they are steadily conquering the state of Gujarat on
            the front of luxurious Residential & Commercial Spaces.
          </p>
          <div className="flex justify-center w-full my-10">
            <img src={aboutImage} alt="Banner" className="w-full max-w-[90%]" />
          </div>
          <h1 className="text-center">Evermark Group Team</h1>
          <p className="text-center">
            Rightfully the people who make Shivalik! A closely knit family of
            technical engineers and quality auditors backed up by administrative
            staff personnel and marketing filet alongside our legal cadre,
            architects and structural consultants who give strength and
            confidence to the structure and the brand. The Shivalik team
            believes in 'labour love' and commits oneself to aim above the mark
            and hit it each time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
