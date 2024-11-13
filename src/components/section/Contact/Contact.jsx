import "./Contact.css";
import { images } from "./images";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <motion.h1
          className="text-connect"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut",
            delay: 0.3,
            duration: 0.4,
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  delay: 0.5,
                  duration: 0.4,
                }}
              />
              <motion.a
                className="text-container"
                href={image.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  delay: 0.6,
                  duration: 0.4,
                }}
              >
                <p className="placeholder">{image.placeholder}</p>
                <p className="details">{image.name}</p>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
