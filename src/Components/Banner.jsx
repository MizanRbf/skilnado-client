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
        className="mySwiper *:min-w-fit"
      >
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co.com/W4fxbhqv/Packaging-Boxes-WEB-Banner-USA.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co.com/Z6PL4JjZ/03-IPu-KZJy-Au-ABRm40-Bo-W3-YU-2.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co.com/cK8FqJ0F/CKSDi4-Gm9-YYDEAE.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co.com/gL6B0mGS/Subscription-Box-Gift-Ideas-for-Moms-Birthday.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co.com/SD185mNb/Subscription-Boxes-Blog-r1v2.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
