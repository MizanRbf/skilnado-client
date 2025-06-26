import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../../public/assets/Banner/banner1.png";
import bannerImg2 from "../../../../public/assets/Banner/banner2.png";
import bannerImg3 from "../../../../public/assets/Banner/banner3.png";

const Slider = () => {
  return (
    <div className="pt-24 md:pt-30">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
