import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide - 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/jGm4KvJ/freelance1.jpg')",
            }}
          >
            <div className="bg-black/60 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Welcome to Skilnado
              </h1>
              <p className="text-sm md:text-lg mb-6">
                Find the perfect freelancer for your needs.
              </p>
              <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide - 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/Dk9wrcv/post-task-bg.jpg')",
            }}
          >
            <div className="bg-black/60 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Post Your Task Easily
              </h1>
              <p className="text-sm md:text-lg mb-6">
                Quick and simple way to get work done.
              </p>
              <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
                Post Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide - 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/RGK8V52H/1627105299.jpg')",
            }}
          >
            <div className="bg-black/60 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Build Your Career
              </h1>
              <p className="text-sm md:text-lg mb-6">
                Join our platform and grow your skills with real projects.
              </p>
              <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide - 4 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/Y4J6tJr8/download.png')",
            }}
          >
            <div className="bg-black/60 p-5 rounded-xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Connect with Top Freelancers
              </h1>
              <p className="text-sm md:text-lg mb-6">
                Get your work done fast and professionally.
              </p>
              <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
                Hire Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
