import Banner from "../assets/evermarkbg.jpg";
import EverPDF from "../assets/everpdf.pdf";
import { Link, useNavigate } from "react-router-dom";
import Logo2x from "../assets/logoem.png";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="relative bg-white text-white h-screen">
      <img
        src={Banner}
        alt="Background image of skyscrapers"
        className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%] w-full"
        // className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%]"
        // style={{
        //   left: "50%",
        // }}
      />
      <div className="relative mx-auto px-6 py-1 xl:ml-10">
        <header className="flex justify-between items-center">
          <img
            src={Logo2x}
            alt="logo"
            className="w-20 xl:w-24 2xl:w-40 cursor-pointer"
          />
          <nav className="hidden lg:block">
            <div className="flex gap-20 items-center">
              <Link to={"/about-us"} className="text-white no-underline">
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
                    className="text-white no-underline text-center text-[15px]"
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
        <div className="">
          <h2 className="text-3xl xl:text-5xl font-semibold max-w-[500px] mt-36 mb-4 xl:leading-[70px] xl:text-black">
            Find your Dream Property Now
          </h2>
          <p className=" mb-8 xl:text-black max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <div className="flex">
            <div className="flex justify-center  gap-3 items-center absolute">
              <button className="bg-[#325131] cursor-pointer text-white px-4 py-3 border-none rounded-lg">
                <a
                  href="https://maps.app.goo.gl/njSkT9zFM5LsV7Vw9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-current no-underline"
                >
                  Get Location
                </a>
              </button>
              <button
                // onClick={handleDownload}
                className="bg-[#325131] cursor-pointer text-white px-4 py-3 border-none rounded-lg"
              >
                <a
                  className="text-current no-underline"
                  href={EverPDF}
                  download={EverPDF}
                >
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
