/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/Footer";
import Banner from "../../assets/evermarkbg.jpg";
import ScrollToTop from "../../hook/ScrollTop";
import Header from "../../components/Header";

const ContactUsConnect = () => {
  return (
    <>
      <div className="relative bg-white text-white">
        <img
          src={Banner}
          alt="Background image of skyscrapers"
          className="absolute inset-0 overflow-clip  w-full h-full "
          // className="absolute inset-0 overflow-clip xl:w-1/2 h-full xl:left-[50%]"
          // style={{
          //   left: "50%",
          // }}
        />
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header />

          <div className="bg-[#325131] shadow-md rounded-lg overflow-hidden my-10">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

                  <div className="mb-4">
                    <p className="text-[16px]">
                      Have queries or need assistance regarding EverMark's
                      Group's products or services? We're here to help!
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[16px]">
                      Our dedicated support team is ready to address any
                      concerns or issues you may encounter. Count on us for
                      prompt assistance and reliable solutions.
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[16px]">
                      Feel free to get in touch with us for any inquiry, at
                      079-4000-1300,
                    </p>
                  </div>
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-4">Address</h2>
                    <p className="text-[16px]">
                      EVERMARK 445, Opp Shahjanand S+, nr. Siddharth's School,
                      Vavol, Gandhinagar, Gujarat 382016
                    </p>
                    <button className="bg-white cursor-pointer text-black px-4 py-3 border-none rounded-lg">
                      <a
                        href="https://maps.app.goo.gl/njSkT9zFM5LsV7Vw9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-current no-underline"
                      >
                        Get Location
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ContactUsConnect;
