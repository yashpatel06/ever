import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="">
        {<Outlet />}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
