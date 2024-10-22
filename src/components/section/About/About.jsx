import "./About.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <motion.img
          className="avatar"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut",
            delay: 0.9,
            duration: 0.5,
          }}
          src="/assets/id.jpg"
        />
        <div className="statement">
          <div className="paragraph">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeOut",
                delay: 0.3,
                duration: 0.5,
              }}
            >
              Hi! I recently shifted careers and completed certificates in{" "}
              <a
                className="certificate"
                href="https://www.udemy.com/certificate/UC-4bd1e65f-1ebb-4061-b4da-2e9139d1fad9/"
              >
                <b>Web Development</b>
              </a>{" "}
              and{" "}
              <a
                className="certificate"
                href="https://www.coursera.org/account/accomplishments/specialization/N8083VFOBJ13"
              >
                <b>UI Design</b>
              </a>
              . I am passionate about creating user-friendly websites and
              digital experiences, combining both design and technical skills to
              make things that look great and work well.
            </motion.p>
            <div className="tech">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Tech Stacks:
              </motion.p>
              <div className="image-container">
                <motion.img
                  className="tech-image"
                  src="/assets/html.png"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    delay: 0.6,
                    duration: 0.5,
                  }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/js.png"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    delay: 0.62,
                    duration: 0.5,
                  }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/nodeJs.png"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    delay: 0.64,
                    duration: 0.5,
                  }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/react.png"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    delay: 0.66,
                    duration: 0.5,
                  }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/github.png"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    delay: 0.68,
                    duration: 0.5,
                  }}
                />
                <motion.img
                  className="tech-image"
                  src="/assets/blender.png"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    delay: 0.7,
                    duration: 0.5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
