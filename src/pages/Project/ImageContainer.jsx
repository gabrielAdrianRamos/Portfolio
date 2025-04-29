import React, { useState } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function ImageContainer() {
  const adjustMainImage = () => {
    let slidePerView;
    let betweenSpace;

    if (window.innerWidth < 768) {
      slidePerView = 4;
      betweenSpace = 10;
    } else {
      slidePerView = 9;
      betweenSpace = 1;
    }

    return [slidePerView, betweenSpace];
  };

  const [space] = adjustMainImage();

  return (
    <div className="modal-img-conatiner">
      <div className="main-img-modal">
        <Swiper
          loop={true}
          spaceBetween={space}
          centeredSlides={true}
          lazy={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/assets/beachboy2.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/404.png" className="main-image" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clown.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/dragon.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/dragon6.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/gorilla.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/lazyday.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/logo3.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/space.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/turtle1.png"
              className="main-image"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ImageContainer;
