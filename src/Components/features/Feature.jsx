// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./feature.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Feature() {
  return (
    <div className="h-[850px] w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": "url('/img/bg_feature.jpg')",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="flex items-center justify-center">
          <div className="bg-slate-950 sm:w-[40%] w-[80%] p-10 sm:mr-[30%] text-slate-200 rounded-xl">
            <div className="text-2xl font-bold" data-swiper-parallax="-300">
              Login Rewards, Endless Benefits
            </div>
            <div className="text-lg" data-swiper-parallax="-200">
              Start your journey with exclusive VIP privileges! Instantly claim
              powerful generals, and enjoy various login events with chances to
              acquire rare weapons and more.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="bg-slate-950 sm:w-[40%] w-[80%] p-10 sm:mr-[30%] text-slate-200 rounded-xl">
            <div className="text-2xl font-bold" data-swiper-parallax="-300">
              Hundreds of Generals, Exquisite Art Style
            </div>
            <div className="text-lg" data-swiper-parallax="-200">
              Choose from over a hundred legendary generals, each with their
              unique Chinese-style artwork. Experience the elegance and charm of
              heroic warriors and graceful beauties, all crafted with meticulous
              detail. Immerse yourself in stunning scenes and dazzling effects,
              delivering a visual feast that will captivate you!
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="bg-slate-950 sm:w-[40%] w-[80%] p-10 sm:mr-[30%] text-slate-200 rounded-xl">
            <div className="text-2xl font-bold" data-swiper-parallax="-300">
              Combined Skills, Strategic Formations
            </div>
            <div className="text-lg" data-swiper-parallax="-200">
              Master a variety of skills and strategically combine different
              factions. Explore numerous gameplay styles and create unbeatable
              formations to dominate the battlefield.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="bg-slate-950 sm:w-[40%] w-[80%] p-10 sm:mr-[30%] text-slate-200 rounded-xl">
            <div className="text-2xl font-bold" data-swiper-parallax="-300">
              Easy Progression, Idle Adventure
            </div>
            <div className="text-lg" data-swiper-parallax="-200">
              Advance through the game effortlessly with idle gameplay.
              Automatically enhance your power and conquer the game world with
              just a tap, enjoying a relaxed yet thrilling adventure!
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
