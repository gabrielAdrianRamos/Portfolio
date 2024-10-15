import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTeepublic, SiThreadless } from "react-icons/si";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="icons">
          <motion.a
            className="links"
            href="https://github.com/gabrielAdrianRamos"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              delay: 1.4,
              type: "spring",
              bounce: 0.3,
              damping: 10,
              duration: 1,
            }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            className="links"
            href="https://www.linkedin.com/in/adrian-gabriel-ramos-b42329274"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              delay: 1.5,
              type: "spring",
              bounce: 0.3,
              damping: 10,
              duration: 1,
            }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            className="links"
            href="https://www.teepublic.com/user/toby-s"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              delay: 1.6,
              type: "spring",
              bounce: 0.3,
              damping: 10,
              duration: 1,
            }}
          >
            <SiTeepublic size={30} />
          </motion.a>
          <motion.a
            className="links"
            href="https://tobys.threadless.com/"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              delay: 1.7,
              type: "spring",
              bounce: 0.3,
              damping: 10,
              duration: 1,
            }}
          >
            <SiThreadless size={40} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
