import React from "react";
import "./modal.css";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-close">
          <button onClick={props.onClose} className="button">
            &times;
          </button>
        </div>
        <div className="modal-body"></div>
      </div>
    </div>
  );
}
