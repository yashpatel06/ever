import mission from "../assets/mission.png";

const OurMission = () => {
  return (
    <div className=" flex flex-col items-center lg:flex-row gap-5 justify-evenly w-full my-20">
      <div className="">
        <img
          src={mission}
          alt="mission"
          className="w-full max-w-[90%] rounded-md flex justify-center mx-auto"
          // className="w-[500px] md:w-[350px] xl:w-[500px]"
        />
      </div>
      <div className="2xl:px-4 lg:max-w-[550px] flex flex-col items-start mx-4 lg:mx-7">
        <h2 className="md:mt-3 text-[28px] md:ext-[30px] font-semibold text-center lg:text-left w-full ">
          Our Mission
        </h2>
        <p className="md:text-[18px] xl:text-[18px] md:mt-3 ">
          {" "}
          We have come up as trendsetters, paradigm changers, and enablers of
          innovation in the field of infrastructure development. More than
          anything else, we have become synonymous with trust, transparency, and
          integrity. When townships were far from commonplace in India, we built
          our first landscaped township in Ahmedabad. This township offers high
          quality, well-designed affordable housing with numerous amenities and
          conveniences for budget home buyers.
        </p>
        <button className="bg-[#325131] text-[14px] text-white px-4 py-3 rounded-md border-none cursor-pointer max-h-[35px] flex items-center mt-3">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OurMission;
