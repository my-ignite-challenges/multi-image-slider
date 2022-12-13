import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const image = "http://github.com/georgewfsantos.png";

const slides = [
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
];

export function Slider() {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        autoplay
        modules={[Pagination, Autoplay, Navigation]}
      >
        <div style={{ height: 25 }}></div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide}
              alt="Slide"
              width="100%"
              style={{ borderRadius: 12 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
