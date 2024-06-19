/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import ScrollToTop from "../../hook/ScrollTop";
import Header from "../../components/Header";
import Library from "../../assets/Library.jpg";
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
import GoogleMapReact from "google-map-react";

const ProjectDetails = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const timeoutRef = useRef(null);

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
            <div className="flex justify-center w-full my-10">
              <img
                src={Library}
                alt="Banner"
                className="w-full max-w-[90%] rounded-md"
              />
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
            <div className="mx-4 md:mx-16 ">
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
                className="mySwiper flex justify-center"
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
                    src="https://maps.google.com/maps?q=EVERMARK+445%2C+Opp+Shahjanand+S%2B%2C+nr.+Siddharth%27s+School%2C+Vavol%2C+Gandhinagar%2C+Gujarat+382016&t=&z=8&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
                <div className="flex-1 text-left text-[18px] mt-5 lg:mt-0">
                  <h1 className="font-thin">Location</h1>
                  <p className="text-[20px] lg:text-[30px] max-w-[400px] mt-3 lg:mt-0">
                    EVERMARK 445, Opp Shahjanand S+, nr. Siddharth's School,
                    Vavol, Gandhinagar, Gujarat 382016
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
