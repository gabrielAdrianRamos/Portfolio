import React, { useState } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
// import imageSource from "./imageSources.js";

function ImageContainer() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="modal-img-conatiner">
      <Swiper
        loop={true}
        spaceBetween={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
      >
        <SwiperSlide>
          {/* {imageSource.map((imageSources, index) => {
            return (
              <>
                <img src={imageSources.imgSource} className="main-image" />
              </>
            );
          })} */}
          <img src="/assets/beachboy2.png" className="main-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/404.png" className="main-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/clown.png" className="main-image" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
      >
        <SwiperSlide>
          <img src="/assets/beachboy2.png" className="thumb-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/404.png" className="thumb-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/clown.png" className="thumb-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageContainer;
