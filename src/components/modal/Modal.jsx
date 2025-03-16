import React from "react";
import "./modal.css";

export default function Modal({ children, onClose }) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-close">{children}</div>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
