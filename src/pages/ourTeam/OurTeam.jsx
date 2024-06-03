import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Multipurpose from "../../assets/multipurpose.jpg";
import ScrollToTop from "../../hook/ScrollTop";

const OurTeam = () => {
  return (
    <div>
      {" "}
      <div className="relative bg-white text-white">
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header color={"black"} />
          <div className="text-black mb-10">
            <h1 className=" text-center text-[#325131]">Our Team</h1>
            <div className="flex justify-center w-full my-10">
              <img
                src={Multipurpose}
                alt="Banner"
                className="w-full max-w-[90%] rounded-md"
              />
            </div>
            <div className=" flex justify-center">
              <p className="text-center font-medium max-w-[90%]">
                Ever Mark Team since its inception has worked to gift some of
                the most prominent addresses of the city. The team immaculately
                works towards developing contemporary design, with a classic
                blend of flawless engineering and accentuating designs. The
                different sections- The Accounts, Marketing, Site, Design,
                purchase are all synchronized through regular interaction and
                meets. All the beautiful results of the conceived work are the
                result of sincere efforts of each section and their consistent
                performance
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default OurTeam;
