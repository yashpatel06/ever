import Banner from "../../assets/banner.png";
import { Link, useNavigate } from "react-router-dom";
import Logo2x from "../../assets/logoem.png";
import { useState } from "react";

const ContactUs = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative bg-white text-white h-screen">
      <img
        src={Banner}
        alt="Background image of skyscrapers"
        className="absolute inset-0 overflow-clip  w-full h-full "
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
            onClick={() => navigate("/")}
          />
          <nav className="hidden lg:block">
            <div className="flex gap-20 items-center">
              <Link to={""} className="text-white no-underline">
                About Us
              </Link>
              <Link to={""} className="text-white no-underline">
                Projects
              </Link>
              <Link to={"/contact-us"} className="text-white no-underline">
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
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
        <div className="flex flex-col items-center mx-10 mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Contact Us
          </h1>
          <div className="bg-white dark:bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 py-10">
            <form className="space-y-4 mx-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-2 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-2 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full max-w-full border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm  sm:text-sm"
                ></textarea>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                type="submit"
                className="bg-[#325131] text-white px-4 py-3 border-none rounded-lg cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
