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
        className="mySwiper mt-25 "
      >
        {/* Slide - 1 */}
        <SwiperSlide className="rounded-xl">
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/LdJSg51r/652fabcb38cda6eaa8181d86-Freelancer-Space-Game-Imgur-NMa-Se-Afuv-transformed.jpg')",
            }}
          >
            <div className="bg-black/90 p-5 rounded-xl">
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
        <SwiperSlide className="rounded-xl">
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/TMb8X5nV/lancer-outer-space-wallpaper-preview.jpg')",
            }}
          >
            <div className="bg-primary/30 p-5 rounded-xl">
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
        <SwiperSlide className="rounded-xl">
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/hxYrp9P0/cover16-1d8caa92.webp')",
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
        <SwiperSlide className="rounded-xl">
          <div
            className="h-full bg-cover bg-center text-white p-10 flex flex-col justify-center items-center text-center rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/pr0cK1qL/images.jpg')",
            }}
          >
            <div className="bg-black/80 p-5 rounded-xl">
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
