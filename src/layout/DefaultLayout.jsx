import LandingPage from "../pages/LandingPage";
import Projects from "../pages/Projects";
import OurMission from "../pages/OurMission";
import Awards from "../pages/Awards";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <LandingPage />
      <Projects />
      {/* <Customer /> */}
      <OurMission />
      <Awards />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
