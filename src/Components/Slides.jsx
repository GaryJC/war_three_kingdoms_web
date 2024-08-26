import { useMediaQuery } from "@mui/material";

// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slides() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const mobileSlides = [
    {
      id: 1,
      image: "/img/bg_home_mobile_1.jpg",
    },
    {
      id: 2,
      image: "/img/bg_home_mobile_2.jpg",
    },
    {
      id: 3,
      image: "/img/bg_home_mobile_3.jpg",
    },
    {
      id: 4,
      image: "/img/bg_home_mobile_4.jpg",
    },
  ];

  const deskSlides = [
    {
      id: 1,
      image: "/img/bg_home_desk_1.jpg",
    },
    {
      id: 2,
      image: "/img/bg_home_desk_2.jpg",
    },
    {
      id: 3,
      image: "/img/bg_home_desk_3.jpg",
    },
    {
      id: 4,
      image: "/img/bg_home_desk_4.jpg",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // navigation={true}q
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {isMobile
          ? mobileSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img src={slide.image} alt="" />
              </SwiperSlide>
            ))
          : deskSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.image}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
