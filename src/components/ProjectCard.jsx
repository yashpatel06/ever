/* eslint-disable react/prop-types */
import Bath from "../assets/Bath.svg";
import Bed from "../assets/Bed.svg";
import Balcony from "../assets/Balcony.svg";
import Location from "../assets/loca.svg";
import Star from "../assets/Star.svg";

const ProjectCard = ({ ProjectImage }) => {
  return (
    <div className="shadow-lg w-fit px-2 py-2 rounded-md">
      <div>
        <img src={ProjectImage} alt="Project Image" className="max-w-[300px]" />
      </div>
      <div className="flex items-center">
        <img src={Bath} alt="Bath" />
        <img src={Bed} alt="Bed" />
        <img src={Balcony} alt="Balcony" />
      </div>
      <p className="text-[20px] font-semibold -mt-2">Evermark</p>
      <p className="-mt-3 text-[#37474F]">
        <span className="text-[#325131] font-semibold ">Rs.75 Lakh</span> 1800
        Sqft.
      </p>
      <p className="flex items-center gap-3 text-[#325131] -mt-3">
        <img src={Location} alt="Location" />
        Ahmedabad, Gujarat
      </p>
      <div className="flex items-center justify-between -mt-3">
        <button className="bg-[#325131] text-white px-4 py-3 rounded-md border-none cursor-pointer max-h-[35px] flex items-center">
          Book Now
        </button>
        <div className="flex gap-1">
          <img src={Star} alt="Star" />
          <p className="text-[#37474F] font-medium">4.5</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;