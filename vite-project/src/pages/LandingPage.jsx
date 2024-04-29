import Banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import Logo2x from "../assets/logoem.png";
import { useState } from "react";

const LandingPage = () => {
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
          <img src={Logo2x} alt="logo" className="w-20 xl:w-24 2xl:w-40" />
          <nav className="hidden lg:block">
            <div className="flex gap-20 items-center">
              <Link to={""} className="text-white no-underline">
                About Us
              </Link>
              <Link to={""} className="text-white no-underline">
                Projects
              </Link>
              <Link to={""} className="text-white no-underline">
                contact Us
              </Link>
              <button className="bg-[#325131] text-white px-4 py-3 border-none rounded-lg">
                Register Now
              </button>
            </div>
          </nav>
          <div className="lg:hidden flex items-center gap-5">
            <button className="bg-[#325131] text-white px-4 py-3 border-none rounded-xl">
              Register Now
            </button>
            <div className="relative">
              {menuOpen ? (
                <svg
                  onClick={() => setmenuOpen(!menuOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  <Link to={""} className="text-white no-underline">
                    About Us
                  </Link>
                  <Link to={""} className="text-white no-underline">
                    Projects
                  </Link>
                  <Link to={""} className="text-white no-underline">
                    contact Us
                  </Link>
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
            <div className="flex justify-between max-w-[350px] items-center shadow-xl px-2 xl:px-3 py-[1px] bg-white rounded-lg xl:max-w-[800px] xl:w-full absolute">
              <div className="flex">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_469)">
                    <path
                      d="M32.0588 11C23.1905 11 16 18.0522 16 26.75C16 33.1 18.2558 34.8736 30.4111 52.1551C31.2083 53.2846 32.9128 53.2846 33.7099 52.1551C45.8594 34.8711 48.1176 33.0992 48.1176 26.75C48.1176 18.0522 40.9246 11 32.0588 11ZM32.0588 33.2387C28.3678 33.2387 25.3676 30.2954 25.3676 26.6762C25.3676 23.057 28.3703 20.1137 32.0588 20.1137C35.7473 20.1137 38.75 23.057 38.75 26.6762C38.75 30.2954 35.7473 33.2387 32.0588 33.2387Z"
                      fill="#325131"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_469">
                      <rect
                        width="32.1176"
                        height="42"
                        fill="white"
                        transform="translate(16 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  type="text"
                  placeholder="Search Location"
                  className="bg-transparent pl-2 max-w-[120px] outline-none border-none text-black placeholder-zinc-400"
                />
              </div>
              <button className="bg-[#325131] text-white px-4 py-3 border-none rounded-lg">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
