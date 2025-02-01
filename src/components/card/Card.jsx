import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src="\assets\blender.png" alt="title" className="card-image" />
      </div>
      <div className="card-text-container">
        <p className="card-title">title</p>
        <p className="description">description</p>
        <button className="card-button">aaslsjsj</button>
      </div>
    </div>
  );
};

export default Card;
