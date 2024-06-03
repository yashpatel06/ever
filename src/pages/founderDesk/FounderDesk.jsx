import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Library from "../../assets/Library.jpg";
import ScrollToTop from "../../hook/ScrollTop";

const FounderDesk = () => {
  return (
    <div>
      {" "}
      <div className="relative bg-white text-white">
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header color={"black"} />
          <div className="text-black mb-10">
            <h1 className=" text-center text-[#325131]">
              Message from Founder’s Desk
            </h1>
            <div className="flex justify-center w-full my-10">
              <img
                src={Library}
                alt="Banner"
                className="w-full max-w-[90%] rounded-md"
              />
            </div>
            <div className=" flex justify-center">
              <div className="max-w-[90%]">
                <p className="text-center font-medium">
                  {" "}
                  “Creativity with quality is my aim.”
                </p>
                <p className="text-center font-medium">
                  While developing any project, I always keep in mind that any
                  project is for my personal use. I strongly believe that “fast
                  is fine but accuracy is everything.” In each and every
                  project, I consider that it is not just to build any project,
                  but it must be maintained also, for a long period of time. I
                  and my team always strive for the best technology by
                  travelling to so many different destinations and find the best
                  for our project. We always develop any project in favour of
                  environment only.
                </p>
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

export default FounderDesk;
