import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
const UserSlider = () => {
  let sliderImgs = [
    "/imgs/login/banner1.png",
    "/imgs/login/banner3.jpeg",
    "/imgs/login/banner4.png",
  ];

  const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  const handleCustomPaginationClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index); // Move to the clicked slide
    }
  };
  return (
    <div className="w-full xs:h-screen lg:h-full">
      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, // Delay between slides (in ms)
          disableOnInteraction: false, // Ensures autoplay continues even after user interaction
        }}
        speed={1500} // Transition speed (in ms)
        loop={true} // Make the slider loop indefinitely
        className="mySwiper w-full h-full"
      >
        {sliderImgs.map((img) => {
          return (
            <SwiperSlide className="w-full h-full">
              <img className="w-full h-full object-cover" src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default UserSlider;
