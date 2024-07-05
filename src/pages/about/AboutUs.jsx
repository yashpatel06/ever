/* eslint-disable react/no-unescaped-entities */
import aboutImage from "../../assets/abimg1.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../hook/ScrollTop";

const AboutUs = () => {
  return (
    <>
      <div className="relative bg-white text-white">
        {/* <img
        src={Banner}
        alt="Background image of skyscrapers"
        className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%] w-full"
      /> */}
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header color={"black"} />
          <div className="text-black mb-10">
            <h1 className=" text-center text-[#325131] text-[28px] md:text-[36px]">
              About Us
            </h1>
            <p className="text-left mt-5 mx-5 md:mx-16 md:text-[18px]">
              A Legacy Of Timeless Elegance Evermark developers are on a quest
              to build a legacy of timeless elegance. Pioneering the skyline of
              the city already, they are steadily conquering the state of
              Gujarat on the front of luxurious Residential & Commercial Spaces.
            </p>
            <div className="flex justify-center w-full my-10">
              <img
                src={aboutImage}
                alt="Banner"
                className="w-full max-w-[90%] rounded-md"
              />
            </div>
            <h1 className="text-center text-[#325131] text-[28px] md:text-[30px]">
              Evermark Group Team
            </h1>
            <p className="text-left mt-5 mx-5 md:mx-16 md:text-[18px]">
              Rightfully the people who make Evermark! A closely knit family of
              technical engineers and quality auditors backed up by
              administrative staff personnel and marketing filet alongside our
              legal cadre, architects and structural consultants who give
              strength and confidence to the structure and the brand. The
              Evermark team believes in 'labour love' and commits oneself to aim
              above the mark and hit it each time!
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
