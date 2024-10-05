import "./About.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <motion.img
          className="avatar"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "linear", delay: 0.3 }}
          src="/assets/id.jpg"
        />
        <div className="statement">
          <div className="paragraph">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "linear", delay: 0.5 }}
            >
              Hi! I recently shifted careers and completed certificates in{" "}
              <a href="https://www.udemy.com/certificate/UC-4bd1e65f-1ebb-4061-b4da-2e9139d1fad9/">
                <b>Web Development</b>
              </a>{" "}
              and{" "}
              <a href="https://www.coursera.org/account/accomplishments/specialization/N8083VFOBJ13">
                <b>UI Design</b>
              </a>
              . I am passionate about creating user-friendly websites and
              digital experiences, combining both design and technical skills to
              make things that look great and work well.
            </motion.p>
            <div className="tech">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "linear", delay: 0.7 }}
              >
                Tech Stacks:
              </motion.p>
              <div className="image-container">
                <motion.img
                  className="tech-image"
                  src="/assets/html.png"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", delay: 0.9 }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/js.png"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", delay: 1.1 }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/nodeJs.png"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", delay: 1.2 }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/react.png"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", delay: 1.3 }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/github.png"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", delay: 1.4 }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/blender.png"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "linear", delay: 1.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
