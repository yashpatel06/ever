/* eslint-disable react/no-unescaped-entities */
import Banner from "../assets/nightView2.jpg";
import EverPDF from "../assets/everpdf.pdf";
import Header from "../components/Header";

const LandingPage = () => {
  return (
    <div className="relative bg-white text-white h-screen">
      <img
        src={Banner}
        alt="Background image of skyscrapers"
        className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%] w-full object-cover"
        // className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%]"
        // style={{
        //   left: "50%",
        // }}
      />
      <div className="relative mx-auto px-6 py-1 xl:ml-10">
        <Header color={"white"} />
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
