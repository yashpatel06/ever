import CustomTab from "../components/CustomTab";
import ProjectCard from "../components/ProjectCard";
import Pro1 from "../assets/pro1.jpg";
import Pro2 from "../assets/pro2.png";

const tabs = [
  {
    title: "Residential",
    content: (
      <div className="flex flex-col items-center md:flex-row flex-wrap w-full justify-center gap-10">
        <ProjectCard ProjectImage={Pro1} />
        <ProjectCard ProjectImage={Pro1} />
        <ProjectCard ProjectImage={Pro1} />
      </div>
    ),
  },
  // {
  //   title: "Commercial",
  //   content: (
  //     <div className="flex flex-col items-center md:flex-row flex-wrap w-full justify-center gap-10">
  //       <ProjectCard ProjectImage={Pro2} />
  //       <ProjectCard ProjectImage={Pro2} />
  //       <ProjectCard ProjectImage={Pro2} />
  //     </div>
  //   ),
  // },
  // { title: "Tab 3", content: <div>Content for Tab 3</div> },
];

const Projects = () => {
  return (
    <div className="">
      <h1 className=" text-center text-[45px] font-semibold">Projects</h1>
      <div>
        <CustomTab tabs={tabs} />
      </div>
      {/* <div className="flex justify-center w-full my-10">
        <button className="bg-[#325131] text-[14px] text-white px-4 py-3 rounded-md border-none cursor-pointer max-h-[35px] flex items-center">
          Learn More
        </button>
      </div> */}
    </div>
  );
};

export default Projects;
