/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hook/ScrollTop";
import Header from "../../components/Header";
import Library from "../../assets/Library.jpg";
import SideView from "../../assets/SideView.jpg";
import BirdView from "../../assets/BirdView.jpg";
import Toddler from "../../assets/Toddler.jpg";
import C from "../../assets/C1.jpg";
import Indoor from "../../assets/Indoor.jpg";
import Terrace from "../../assets/Terrace.jpg";
import playarea from "../../assets/playarea.jpg";
import topview from "../../assets/topview.jpg";
import nightView from "../../assets/nightView.jpg";
import WalkThrough from "../../assets/walkthrough.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import EverPDF445 from "../../assets/everpdf.pdf";
import EpicPdf from "../../assets/EverMarkEpic.pdf";
import { useLocation, useNavigate } from "react-router-dom";

const details = [
  {
    title: "Evermark 445",
    desc: "4bhk luxurious Living",
    location: "https://maps.app.goo.gl/oEq76QYG96uBUKEW7",
    pdf: EverPDF445,
    address:
      "EVERMARK 445, Opp Shahjanand S+, nr. Siddharth's School, Vavol, Gandhinagar, Gujarat 382016",
    mapLink:
      "https://maps.google.com/maps?q=EVERMARK+445%2C+Opp+Shahjanand+S%2B%2C+nr.+Siddharth%27s+School%2C+Vavol%2C+Gandhinagar%2C+Gujarat+382016&t=&z=13&ie=UTF8&iwloc=&output=embed",
    virtualTour: "https://portfolio.virtueaze.com/evermark_4_bhk/",
  },
  {
    title: "Evermark Epic",
    desc: "3bhk luxurious Living",
    location: "https://maps.app.goo.gl/U8Qc5LLRbDkezYDx6",
    pdf: EpicPdf,
    address: "6JP9+FMG, Gandhinagar, Gujarat 382016",
    mapLink:
      "https://maps.google.com/maps?q=6JP9%2BFMG%2C+Gandhinagar%2C+Gujarat+382016&t=&z=13&ie=UTF8&iwloc=&output=embed",
    virtualTour: "https://portfolio.virtueaze.com/evermark3bhk/",
  },
];

const ProjectDetails = () => {
  const swiperRef = useRef();
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [projectDetails, setProjectDetails] = useState(
    state == "Evermark Epic"
      ? details[1]
      : state == "Evermark 445"
      ? details[0]
      : {}
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const timeoutRef = useRef(null);

  console.log(state, "statestatestate");

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        clearTimeout(timeoutRef.current);
        setShowButton(true);
      } else {
        videoRef.current.play();
        timeoutRef.current = setTimeout(() => {
          setShowButton(false);
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const sliderImage = [
    nightView,
    topview,
    C,
    Library,
    Toddler,
    playarea,
    Terrace,
    Indoor,
  ];

  const MapStyle = {
    width: "100%",
    height: 500,
  };

  return (
    <>
      <div className="relative bg-white text-white">
        <div className="relative mx-auto px-6 py-1 xl:ml-10">
          <Header color={"black"} />
          <div className="text-black mb-10">
            <div className=" flex justify-center my-10">
              <div className="w-full max-w-[90%] max-h-[400px] object-cover rounded-md overflow-hidden relative">
                <img
                  src={topview}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[10px] left-0 right-0 flex flex-col sm:flex-row px-5">
                  <div className="flex-1 flex flex-col items-start">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold shadow-md">
                      {projectDetails?.title}
                    </h1>
                    <p className="text-white md:text-2xl lg:text-3xl font-medium shadow-md">
                      {projectDetails?.desc}
                    </p>
                  </div>
                  <div className="flex justify-end sm:justify-between gap-1">
                    <div
                      className="mail bg-[#353331] rounded-lg px-3  md:px-0 lg:px-2  cursor-pointer md: lg:w-full flex items-center justify-center bg-opacity-80"
                      onClick={() => navigate("/contact-us")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#e8eaed"
                        className="w-4 sm:w-8 md:w-20"
                      >
                        <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
                      </svg>
                    </div>
                    <div className="pdf bg-[#353331] rounded-lg px-3  md:px-0 lg:px-2  cursor-pointer flex items-center justify-center bg-opacity-80">
                      <a
                        className="text-current no-underline"
                        href={projectDetails?.pdf}
                        download={projectDetails?.pdf}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="48px"
                          viewBox="0 -960 960 960"
                          width="48px"
                          fill="#e8eaed"
                          className="w-4 sm:w-8 md:w-20"
                        >
                          <path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z" />
                        </svg>
                      </a>
                    </div>
                    <div
                      className="location bg-[#353331] rounded-lg px-3  md:px-0 lg:px-2  cursor-pointer flex items-center justify-center bg-opacity-80"
                      // onClick={() => navigate("/contact-us")}
                    >
                      <a
                        href={projectDetails?.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-current no-underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="48px"
                          viewBox="0 -960 960 960"
                          width="48px"
                          fill="#e8eaed"
                          className="w-4 sm:w-8 md:w-20"
                        >
                          <path d="M480-276q109-83 164.5-169.5T700-600q0-97-61.5-158.5T480-820q-97 0-158.5 61.5T260-600q0 67 55.5 153.5T480-276Zm0 76Q338-303 269-406t-69-194q0-123 78.5-201.5T480-880q123 0 201.5 78.5T760-600q0 91-69 194T480-200Zm-1-320q34 0 57.5-23.5T560-600q0-33-23.5-56.5T479-680q-33 0-56 23.5T400-600q0 33 23 56.5t56 23.5ZM200-80v-60h560v60H200Zm280-520Z" />
                        </svg>
                      </a>
                    </div>
                    <div
                      className="gallery bg-[#353331] rounded-lg px-3 sm:p-0 sm:px-3  md:px-0 lg:px-2 md:py-2 cursor-pointer flex items-center justify-center bg-opacity-80"
                      // onClick={() => navigate("/contact-us")}
                      role="button"
                      onClick={() => {
                        swiperRef.current.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#e8eaed"
                        className="w-4 sm:w-8 md:w-20"
                      >
                        <path d="M100-200q-24.75 0-42.37-17.63Q40-235.25 40-260v-440q0-24.75 17.63-42.38Q75.25-760 100-760h440q24.75 0 42.38 17.62Q600-724.75 600-700v440q0 24.75-17.62 42.37Q564.75-200 540-200H100Zm620-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm20-60h120v-120H740v120ZM100-260h440v-440H100v440Zm60-100h320L375-500l-75 100-55-73-85 113Zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm20-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[20px] mx-4 md:mx-16">
              <p className="text-left max-w-[600px]">
                At Evermark, we believe in creating landmarks that meet the
                needs of the current situation. Keeping in mind the growing
                trend for Work from Home, we introduce Evermark Sharda Harmony,
                a luxurious 3 BHK + WFH space.
              </p>
              <p className="text-left max-w-[600px] mt-5">
                Homes and Shops are designed to enhance productivity, and our
                amenities are designed to provide you with a comfortable and
                luxurious living experience{" "}
              </p>
              <p className="text-left max-w-[600px] mt-5">
                In the heart of the city, experience a healthier lifestyle in
                our Green Building
              </p>
              <p className="text-[26px] md:text-[30px] mt-5 ">
                <span className="font-medium"> 1,114 Sq.Ft</span>
                <span className="font-extralight text-[16px] md:text-[20px]">
                  + RERA Area
                </span>
              </p>
              <p className="text-[26px] md:text-[30px] mt-5">
                <span className="font-medium">Green</span>
                <span className="font-extralight text-[16px] md:text-[20px]">
                  {" "}
                  Building
                </span>
              </p>
              <p className="text-[26px] md:text-[30px] mt-5">
                <span className="font-medium">₹ 1.54 Cr*</span>
                <span className="font-extralight text-[16px] md:text-[20px]">
                  Onwards
                </span>
              </p>
            </div>
            <div className="text-[25px] text-center md:text-left md:text-[36px] md:mx-16 mt-5">
              <h1 className="font-normal">Project Walk-Through</h1>
            </div>
            <div className="mx-4 md:mx-16">
              <div className="relative flex justify-center w-full my-10">
                <video
                  ref={videoRef}
                  src={WalkThrough}
                  className="rounded-md"
                  onClick={handlePlayPause}
                ></video>
                {showButton && (
                  <button
                    className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="70px"
                        viewBox="0 -960 960 960"
                        width="70px"
                        fill="#e8eaed"
                      >
                        <path d="M370-320h60v-320h-60v320Zm160 0h60v-320h-60v320ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="70px"
                        viewBox="0 -960 960 960"
                        width="70px"
                        fill="#e8eaed"
                      >
                        <path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            </div>
            <div className="mx-4 md:mx-16 mb-10" ref={swiperRef}>
              <div className="flex justify-between w-full">
                <h1 className="text-[25px] text-center md:text-left md:text-[36px]">
                  Gallery
                </h1>
                <button className="bg-[#325131] cursor-pointer text-white px-5  border-none rounded-lg">
                  <a
                    href={projectDetails?.virtualTour}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-current no-underline"
                  >
                    360 Virtual Tour
                  </a>
                </button>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Autoplay]}
                className="mySwiper flex justify-center mt-5"
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {sliderImage.map((x, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <img
                        src={x}
                        alt="image"
                        className="max-h-[256px] aspect-video rounded-md"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div
              className="mt-20 mx-4 md:mx-16"
              // style={{ height: "100vh", width: "100%" }}
            >
              <div className="flex flex-col lg:flex-row md:gap-10 xljustify-between">
                <div className="gmap_canvas flex-1 overflow-hidden sm:overscroll-none justify-center w-full">
                  <iframe
                    className="w-full md:h-[400px]"
                    src={projectDetails?.mapLink}
                  />
                </div>
                <div className="flex-1 text-left text-[18px] mt-5 lg:mt-0">
                  <h1 className="font-thin">Location</h1>
                  <p className="text-[20px] lg:text-[30px] max-w-[400px] mt-3 lg:mt-0">
                    {projectDetails?.address}
                  </p>
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

export default ProjectDetails;
