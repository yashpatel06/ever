import mission from "../assets/mission.png";

const OurMission = () => {
  return (
    <div className="container flex flex-col items-center md:flex-row gap-5 justify-evenly w-full ">
      <div className="px-10">
        <img
          src={mission}
          alt="mission"
          className="w-full max-w-[90%] rounded-md"
          // className="w-[500px] md:w-[350px] xl:w-[500px]"
        />
      </div>
      <div className="px-10 2xl:px-4 md:max-w-[550px] flex flex-col items-start md:mr-10">
        <h1 className="md:-mt-3  md:text-[45px]">Our Mission</h1>
        <p className="md:text-[14px] xl:text-[18px] md:-mt-3">
          {" "}
          We have come up as trendsetters, paradigm changers, and enablers of
          innovation in the field of infrastructure development. More than
          anything else, we have become synonymous with trust, transparency, and
          integrity. When townships were far from commonplace in India, we built
          our first landscaped township in Ahmedabad. This township offers high
          quality, well-designed affordable housing with numerous amenities and
          conveniences for budget home buyers.
        </p>
        <button className="bg-[#325131] text-[14px] text-white px-4 py-3 rounded-md border-none cursor-pointer max-h-[35px] flex items-center">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OurMission;
