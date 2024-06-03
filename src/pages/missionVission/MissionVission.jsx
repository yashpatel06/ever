import Header from "../../components/Header";
import GalleryView from "../../assets/galleryview.jpg";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hook/ScrollTop";

const MissionVission = () => {
  return (
    <div>
      {" "}
      <div className="relative bg-white text-white">
        {/* <img
src={Banner}
alt="Background image of skyscrapers"
className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%] w-full"
/> */}
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header color={"black"} />
          <div className="text-black mb-10">
            <h1 className=" text-center text-[#325131]">Mission & Vision</h1>
            <div className="flex justify-center w-full my-10">
              <img
                src={GalleryView}
                alt="Banner"
                className="w-full max-w-[90%] rounded-md"
              />
            </div>
            {/* <h1 className="text-center">Evermark Group Team</h1> */}
            <div className="flex justify-center w-full">
              <div className="flex flex-col md:flex-row justify-between w-full max-w-[90%]">
                <div className="max-w-[600px]">
                  <h1 className=" text-center text-[#325131]">Mission</h1>
                  <p className="text-left font-medium">
                    Ever Mark takes pride in giving quality buildings to their
                    customers. Ever Mark mission is to convert a customer’s
                    dream and aspirations into reality by innovative, elegant
                    and nature friendly built forms.
                  </p>
                </div>
                <div className="max-w-[600px]">
                  <h1 className=" text-center text-[#325131]">Vision</h1>
                  <p className="text-left font-medium">
                    Ever Mark believes in giving joy to their client through
                    their buildings. Buildings are so designed to make one feel
                    close to the Environment. Ever Mark vision is to make safe
                    clean, efficient and technologically advanced buildings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MissionVission;
