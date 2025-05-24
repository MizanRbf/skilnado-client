// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  // data fetch
  useEffect(() => {
    fetch("/Testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(testimonials);

  return (
    <div className="w-full pt-4 text-black">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.id}
            className="w-[300px] swiper-slide-custom mb-20 md:mb-16"
          >
            <div className="testimonial-box p-6 border border-slate-200 shadow-lg text-center relative mb-30 bg-secondary rounded-br-[50px]">
              <p className="text-left text-white ml-10">Client</p>
              <h2 className="text-white mb-3">Testimonial</h2>
              {/* Comment */}
              <div className="bg-white relative p-2 rounded-lg shadow-2xl">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <FaQuoteLeft />
                </div>

                {/* Comment Text */}
                <p className="text-sm">"{testimonial.comment}"</p>
                {/* Tail Div */}
                <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[20px] border-r-transparent border-t-[12px] border-t-white"></div>
              </div>
              {/* Image */}
              <div className="flex gap-5 mt-10 justify-center">
                <div className=" ring-white ring-1 rounded-full max-w-[70px] ring-offset-1 z-9">
                  <img
                    className="rounded-full p-1"
                    src={testimonial.photo}
                    alt=""
                  />
                </div>
                <div className="text-white">
                  <p className="font-semibold text-lg mt-2">
                    {testimonial.name}
                  </p>
                  <p className="text-xs">{testimonial.position}</p>
                  <div className="flex text-white justify-center *:text-xs space-x-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
}
