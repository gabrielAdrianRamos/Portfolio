import Card from "../../card/Card";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Projects = () => {
  return (
    <div className="project">
      <div className="project-container">
        <h1 className="project-name">Projects</h1>
        <div className="project-card">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card>
                <div className="card-image-container">
                  <img
                    src="\assets\playground.png"
                    alt="title"
                    className="card-image"
                  />
                </div>
                <div className="card-text-container">
                  <p className="card-title">Toby's Playground</p>
                  <p className="description">
                    Toby's Playground is a fun and interactive web app designed
                    for toddlers.
                  </p>
                  <a href="https://playground-toby.vercel.app/">
                    <button className="card-button">View</button>
                  </a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="card-image-container">
                  <img
                    src="\assets\cloudAdventures.png"
                    alt="title"
                    className="card-image"
                  />
                </div>
                <div className="card-text-container">
                  <p className="card-title">Cloud Adventures</p>
                  <p className="description">
                    Cloud Adventures is a simple 3D dodging game with an
                    orthographic camera.
                  </p>
                  <a href="https://cloud-adventures.vercel.app/">
                    <button className="card-button">View</button>
                  </a>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <div className="card-image-container">
                  <img
                    src="\assets\housetop.png"
                    alt="title"
                    className="card-image"
                  />
                </div>
                <div className="card-text-container">
                  <p className="card-title">Housetop Samgyupsal</p>
                  <p className="description">
                    A Simple website I created for a client.
                  </p>
                  <a href="https://housetop-samgyupsal.vercel.app/">
                    <button className="card-button">View</button>
                  </a>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
