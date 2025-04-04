import React, { useState } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";

function ImageContainer() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

  const [perView, space] = adjustMainImage();

  return (
    <div className="modal-img-conatiner">
      <div className="main-img-modal">
        <Swiper
          loop={true}
          spaceBetween={space}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          centeredSlides={true}
          lazy={true}
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
      <div className="thumb-img">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={space}
          slidesPerView={perView}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          lazy={true}
        >
          <SwiperSlide>
            <img
              src="/assets/beachboy2.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/404.png" className="thumb-image" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/clown.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/dragon.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/dragon6.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/gorilla.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/lazyday.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/logo3.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/space.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/turtle1.png"
              className="thumb-image"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ImageContainer;
