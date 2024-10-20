import "./Contact.css";
import { images } from "./images";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <motion.h1
          className="text-connect"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut",
            delay: 0.3,
            duration: 0.5,
          }}
        >
          Shoot Me a Message
        </motion.h1>
        <div className="box-container">
          {images.map((image) => (
            <div className="item-container" key={image.key}>
              <motion.img
                className="icon-contact"
                src={image.imageSource}
                alt="icon"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  delay: 0.5,
                  duration: 0.5,
                }}
              />
              <motion.div
                className="text-container"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  delay: 0.6,
                  duration: 0.5,
                }}
              >
                <p className="placeholder">{image.placeholder}</p>
                <p className="details">{image.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
