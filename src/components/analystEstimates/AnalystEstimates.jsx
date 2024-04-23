import React from "react";
import MainTitle from "../../common/MainTitle";
import EstimateItem from "./EstimateItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const AnalystEstimates = () => {
  return (
    <div className="wrapper mt-16">
      <MainTitle title="Analyst Estimates" />

      <div className="mt-10">
        <Swiper
          spaceBetween={10}
          navigation={true}
          // centeredSlides={true}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper space-x-0"
        >
          {[1, 2, 3, 4].map((item, index) => (
            <SwiperSlide key={index} className="w-full !bg-inherit">
              <EstimateItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AnalystEstimates;
