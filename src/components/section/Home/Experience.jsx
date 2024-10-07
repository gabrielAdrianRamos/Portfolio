import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTeepublic, SiThreadless } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="text">
      <div className="container">
        <motion.h1
          className="intro"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            delay: 1,
            type: "spring",
            bounce: 0.3,
            damping: 10,
          }}
        >
          Hi I'm
          <br />
          <span className="name">Adrian Gabriel N. Ramos</span>
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "linear",
            delay: 1.3,
            type: "spring",
            bounce: 0.3,
            damping: 10,
          }}
        >
          A Junior Web Developer
        </motion.p>
        <div className="icons">
          <motion.a
            className="links"
            href="https://github.com/gabrielAdrianRamos"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "linear",
              delay: 1.4,
              type: "spring",
              bounce: 0.3,
              damping: 10,
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
              ease: "linear",
              delay: 1.5,
              type: "spring",
              bounce: 0.3,
              damping: 10,
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
              ease: "linear",
              delay: 1.6,
              type: "spring",
              bounce: 0.3,
              damping: 10,
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
              ease: "linear",
              delay: 1.7,
              type: "spring",
              bounce: 0.3,
              damping: 10,
            }}
          >
            <SiThreadless size={40} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
