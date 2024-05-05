import LandingPage from "../pages/LandingPage";
import Projects from "../pages/Projects";
import OurMission from "../pages/OurMission";
import Awards from "../pages/Awards";

const DefaultLayout = () => {
  return (
    <div>
      <LandingPage />
      <Projects />
      {/* <Customer /> */}
      <OurMission />
      <Awards />
    </div>
  );
};

export default DefaultLayout;
