import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Projects from "../pages/Projects";
import Customer from "../pages/Customer";
import OurMission from "../pages/OurMission";
import Awards from "../pages/Awards";
import LandingPage from "../pages/LandingPage";

const Layout = () => {
  return (
    <>
      <LandingPage />
      <div className="">
        <Projects />
      </div>
      <Customer />
      <OurMission />
      <Awards />
      <Footer />
    </>
  );
};

export default Layout;
