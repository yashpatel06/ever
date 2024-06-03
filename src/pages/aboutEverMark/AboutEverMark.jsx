/* eslint-disable react/no-unescaped-entities */
import TopView from "../../assets/topview.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hook/ScrollTop";

const AboutEverMark = () => {
  return (
    <>
      <div>
        {" "}
        <div className="relative bg-white text-white">
          <div className="relative mx-auto px-6 py-1 xl:ml-10">
            <Header color={"black"} />
            <div className="text-black mb-10">
              <h1 className=" text-center text-[#325131]">About EVER MARK</h1>
              <div className="flex justify-center w-full my-10">
                <img
                  src={TopView}
                  alt="Banner"
                  className="w-full max-w-[90%] rounded-md"
                />
              </div>
              <div className=" flex justify-center">
                <p className="text-center font-medium max-w-[90%]">
                  Ever Mark has made a successful foray in residential,
                  commercial and retail spaces with a strong foundation in
                  Gandhinagar. Work of Ever Mark well informed and the
                  properties are designed in tandem to complement the
                  Environment of the place. With the collaboration of unique
                  design and the latest technology Ever Mark has created a
                  strong foothold in the Gandhinagar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
};

export default AboutEverMark;
