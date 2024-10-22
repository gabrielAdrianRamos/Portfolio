import "./Home.css";
import { BiSolidDownload } from "react-icons/bi";
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
            ease: "easeOut",
            delay: 1,
            type: "spring",
            bounce: 0.3,
            damping: 18,
            duration: 1,
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
            ease: "easeOut",
            delay: 1.3,
            type: "spring",
            bounce: 0.3,
            damping: 18,
            duration: 1,
          }}
        >
          A Junior Web Developer
        </motion.p>
        <a
          href="/assets/ADRIAN GABRIEL N. RAMOS.docx"
          download="AdrianGabrielRamos"
        >
          <motion.button
            className="btn"
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
            <BiSolidDownload size={20} /> Download CV
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Experience;
