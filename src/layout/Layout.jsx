import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      {<Outlet />}
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
