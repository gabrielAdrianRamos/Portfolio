import "./Home.css";
import { BiSolidDownload } from "react-icons/bi";
import { motion } from "framer-motion";
import { Html } from "@react-three/drei";

const Experience = () => {
  const adjustText = () => {
    let screenPosition;

    if (window.innerWidth < 768) {
      screenPosition = [-2.5, 2.5, 0];
    } else {
      screenPosition = [-9, 2, 0];
    }

    return [screenPosition];
  };

  const [textPosition] = adjustText();
  return (
    <Html position={textPosition}>
      <motion.h1
        className="intro"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          delay: 1,
          type: "spring",
          bounce: 0.3,
          damping: 18,
          duration: 1,
        }}
      >
        Hi I'm
      </motion.h1>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          delay: 1.3,
          type: "spring",
          bounce: 0.3,
          damping: 18,
          duration: 1,
        }}
        className="name"
      >
        Adrian Gabriel Ramos
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: "easeOut",
          delay: 1.5,
          type: "spring",
          bounce: 0.3,
          damping: 18,
          duration: 1,
        }}
      >
        A Junior Web Developer
      </motion.p>
      <div className="download">
        <a
          href="/assets/ARAMOS Jobstreet Resume.docx"
          download="AdrianGabrielRamos"
        >
          <motion.button
            className="btn"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              delay: 1.7,
              type: "spring",
              bounce: 0.3,
              damping: 18,
              duration: 1,
            }}
          >
            <BiSolidDownload size={20} /> Download CV
          </motion.button>
        </a>
      </div>
    </Html>
  );
};

export default Experience;
