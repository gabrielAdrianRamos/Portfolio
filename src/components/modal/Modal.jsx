import React from "react";
import "./modal.css";
import { motion } from "framer-motion";

export default function Modal({ children, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="modal-close">{children}</div>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </motion.div>
    </div>
  );
}
