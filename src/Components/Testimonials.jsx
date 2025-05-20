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
    <div className="w-full py-10">
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
            className="w-[300px] swiper-slide-custom mb-10"
          >
            <div className="testimonial-box bg-white p-6 rounded-tl-2xl rounded-tr-2xl rounded-bl-[60px] rounded-br-[60px] border border-slate-200 shadow-lg text-center relative mb-30">
              {/* Absolute div */}
              <div className="absolute top-0 right-0 left-0 bottom-[190px] bg-primary rounded-tl-2xl rounded-tr-2xl z-0"></div>

              {/* Image */}
              <div className="flex justify-center">
                <div className="mb-1 ring-primary ring-2 rounded-full max-w-[70px] ring-offset-2 z-9">
                  <img
                    className="rounded-full"
                    src={testimonial.photo}
                    alt=""
                  />
                </div>
              </div>

              <p className="font-semibold text-sm mt-2">{testimonial.name}</p>
              <p className="text-[8px] mb-4">{testimonial.position}</p>

              <div className="flex text-amber-500 justify-center mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex justify-center">
                <FaQuoteLeft />
              </div>
              <p className="text-sm">"{testimonial.comment}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
}
