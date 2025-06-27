import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../../public/assets/Banner/banner1.jpg";
import bannerImg2 from "../../../../public/assets/Banner/banner2.jpg";
import bannerImg3 from "../../../../public/assets/Banner/banner3.jpg";

const Slider = () => {
  return (
    <div className="pt-24 md:pt-30">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="relative">
          <img className="h-[450px] " src={bannerImg1} />
          <div className=" p-5 absolute top-[130px] left-[30px] text-white md:text-left">
            <h1 className="  md:mb-4 ">Welcome to Skilnado</h1>
            <p className=" mb-6">Find the perfect freelancer for your needs.</p>
            <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </div>
        {/* Slider-2 */}
        <div className="relative">
          <img className="h-[450px] " src={bannerImg2} />
          <div className=" p-5 absolute top-[130px] left-[30px] text-white md:text-left">
            <h1 className="  md:mb-4">Post Your Task Easily</h1>
            <p className=" mb-6">Quick and simple way to get work done.</p>
            <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
              Post Now
            </button>
          </div>
        </div>
        {/* Slider-3 */}
        <div className="relative">
          <div className=" p-5 pl-10 absolute top-[130px] left-[00px] text-white bg-[#4b6d1485] text-left">
            <h1 className="  mb-4">Build Your Career</h1>
            <p className=" mb-6">
              Join our platform and grow your skills with real projects.
            </p>
            <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200">
              Explore Now
            </button>
          </div>
          <img className="h-[450px]" src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
