import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTeepublic, SiThreadless } from "react-icons/si";

const Experience = () => {
  return (
    <section className="text">
      <div className="container">
        <h1 className="intro">
          Hi I'm
          <br />
          <span className="name">Adrian Gabriel N. Ramos</span>
        </h1>
        <p>A Junior Web Developer</p>
        <div className="icons">
          <a className="links" href="https://github.com/gabrielAdrianRamos">
            <FaGithub size={30} />
          </a>
          <a
            className="links"
            href="https://www.linkedin.com/in/adrian-gabriel-ramos-b42329274"
          >
            <FaLinkedin size={30} />
          </a>
          <a className="links" href="https://www.teepublic.com/user/toby-s">
            <SiTeepublic size={30} />
          </a>
          <a className="links" href="https://tobys.threadless.com/">
            <SiThreadless size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
