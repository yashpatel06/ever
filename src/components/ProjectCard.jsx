/* eslint-disable react/prop-types */
import Bath from "../assets/Bath.svg";
import Bed from "../assets/Bed.svg";
import Balcony from "../assets/Balcony.svg";
import Location from "../assets/loca.svg";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  ProjectImage,
  navi,
  title,
  desc,
  flatLocation,
  address,
}) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-lg w-fit px-2 py-2 rounded-md cursor-pointer">
      <div
        onClick={() => {
          navigate(navi, {
            state: title,
          });
        }}
      >
        <img
          src={ProjectImage}
          alt="Project Image"
          className="max-w-[300px] rounded-md"
        />
      </div>
      <div className="flex items-center">
        <img src={Balcony} alt="Balcony" />
        <img src={Bed} alt="Bed" />
        <img src={Bath} alt="Bath" />
      </div>
      <p className="text-[20px] font-semibold -mt-1">{title}</p>
      <p className="-mt-1 text-[#37474F]">
        <span className="text-[#325131] font-semibold ">{desc}</span>
      </p>
      <p className="flex items-center gap-3 text-[#325131] -mt-1">
        <img src={Location} alt="Location" />
        <a
          href={flatLocation}
          target="_blank"
          rel="noopener noreferrer"
          className="text-current no-underline"
        >
          {address}
        </a>
      </p>
      <div className="flex items-center justify-between mt-1">
        <button
          onClick={() => navigate("/contact-us")}
          className="bg-[#325131] text-white px-4 py-3 rounded-md border-none cursor-pointer max-h-[35px] flex items-center"
        >
          Book Now
        </button>
        {/* <div className="flex gap-1">
          <img src={Star} alt="Star" />
          <p className="text-[#37474F] font-medium">4.5</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
