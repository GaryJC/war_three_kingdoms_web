// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const screenshots = [
  {
    id: 1,
    image: "/img/screenshot_1.png",
  },
  {
    id: 2,
    image: "/img/screenshot_2.png",
  },
  {
    id: 3,
    image: "/img/screenshot_3.png",
  },
  {
    id: 4,
    image: "/img/screenshot_4.png",
  },
  {
    id: 5,
    image: "/img/screenshot_5.png",
  },
  {
    id: 6,
    image: "/img/screenshot_6.png",
  },
  {
    id: 7,
    image: "/img/screenshot_7.png",
  },
  {
    id: 8,
    image: "/img/screenshot_8.png",
  },
  {
    id: 9,
    image: "/img/screenshot_9.png",
  },
  {
    id: 10,
    image: "/img/screenshot_10.png",
  },
];

export default function Description() {
  return (
    <div className="h-screen w-screen flex flex-wrap justify-evenly items-center bg-slate-950">
      <div className="sm:w-[40%] w-[80%] text-slate-300 text-lg">
        <p>
          80% Beauty and Power! Step into the stunning world of ancient China
          with the all-new Three Kingdoms mobile game, “War Three Kingdoms”!
          Here, you can challenge legendary heroes in duels, meet and romance
          enchanting beauties, and build your very own dynasty! Warriors, unite
          and let’s create a new empire together!
        </p>
      </div>
      <div className="sm:w-[30%] w-[80%]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {screenshots.map((screenshot) => (
            <SwiperSlide key={screenshot.id}>
              <img
                src={screenshot.image}
                alt="screenshot"
                // style={{ width: "500px", height: "auto", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
