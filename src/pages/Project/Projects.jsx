import Card from "../../components/card/Card";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import ImageContainer from "./ImageContainer";

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const adjustCard = () => {
    let slidePerView;
    let betweenSpace;

    if (window.innerWidth < 768) {
      slidePerView = 1;
      betweenSpace = 50;
    } else {
      slidePerView = 3;
      betweenSpace = 5;
    }

    return [slidePerView, betweenSpace];
  };

  const [perView, space] = adjustCard();
  return (
    <div className="project">
      <div className="project-container">
        <h1 className="project-name">Projects</h1>
        <div className="project-card">
          <Swiper
            slidesPerView={perView}
            spaceBetween={space}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[Pagination]}
            className="swipe-container"
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
                    Cloud Adventures is a simple 3D dodging game for Desktop
                    with an orthographic camera.
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
            <SwiperSlide>
              <Card>
                <div className="card-image-container">
                  <img
                    src="\assets\logo3.png"
                    alt="title"
                    className="card-image-illustration"
                  />
                </div>
                <div className="card-text-container">
                  <p className="card-title">Illustrations</p>
                  <p className="description">
                    My collections of 2d illustrations.
                  </p>
                  <a href="">
                    <button
                      className="card-button"
                      onClick={(e) => {
                        e.preventDefault();
                        setModalOpen(true);
                      }}
                    >
                      View
                    </button>
                  </a>
                </div>
              </Card>
            </SwiperSlide>

            <div className="pagination-container">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
          {modalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <ImageContainer />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};
