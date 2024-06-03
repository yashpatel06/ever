import LandingPage from "../pages/LandingPage";
import Projects from "../pages/Projects";
import OurMission from "../pages/OurMission";
import Awards from "../pages/Awards";
import Footer from "../components/Footer";
import WhatWeAre from "../pages/WhatWeAre";
import ScrollToTop from "../hook/ScrollTop";

const DefaultLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <LandingPage />
      <Projects />
      <WhatWeAre />
      {/* <Customer /> */}
      <OurMission />
      <Awards />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
