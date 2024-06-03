import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contact/ContactsUs";
import AboutUs from "./pages/about/AboutUs";
import DefaultLayout from "./layout/DefaultLayout";
import AboutEverMark from "./pages/aboutEverMark/AboutEverMark";
import MissionVission from "./pages/missionVission/MissionVission";
import OurTeam from "./pages/ourTeam/OurTeam";
import FounderDesk from "./pages/founderDesk/FounderDesk";
import OfferLand from "./pages/offerLand/OfferLand";
import ChannelPartner from "./pages/become Partner/ChannelPartner";
import ShareFeedback from "./pages/share Feedback/ShareFeedback";
import ContactUsConnect from "./pages/contactUs/ContactUsConnect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-evermark" element={<AboutEverMark />} />
        <Route path="/mission-vision" element={<MissionVission />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/founder-desk" element={<FounderDesk />} />
        <Route path="/offer-land" element={<OfferLand />} />
        <Route path="/channel-partner" element={<ChannelPartner />} />
        <Route path="/feedback" element={<ShareFeedback />} />
        <Route path="/contact" element={<ContactUsConnect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
