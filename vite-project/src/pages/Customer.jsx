import Rectangle from "../assets/rect.png";
import overlay from "../assets/overlay.png";

const Customer = () => {
  return (
    <div className="relative mb-20  w-full aspect-[3/1]">
      <img src={Rectangle} alt="Rectangle" className="w-full h-full" />
      <img
        src={overlay}
        alt="Overlay"
        className="absolute top-0 left-0 w-full aspect-[3/1]"
      />
      <div className="absolute top-[40%]  left-0 w-full">
        <div className="flex  w-full">
          <div className="flex flex-col text-[12px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[60px] text-white font-bold justify-center text-center w-full">
            250+{" "}
            <span className="text-[#D7DE96]  xl:text-[30px]">
              Sites Completed
            </span>
          </div>
          <div className="flex flex-col text-[12px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[60px] text-white font-bold justify-center text-center w-full">
            50+{" "}
            <span className="text-[#D7DE96] xl:text-[30px]">Staff Members</span>
          </div>
          <div className="flex flex-col text-[12px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[60px] text-white font-bold justify-center text-center w-full">
            1000+{" "}
            <span className="text-[#D7DE96] xl:text-[30px]">
              Happy Customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
