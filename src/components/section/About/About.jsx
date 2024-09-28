import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <img className="avatar" src="/assets/id.jpg" />
        <div className="statement">
          <div className="paragraph">
            <p>
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
            </p>
            <div className="tech">
              <p>Tech Stacks:</p>
              <div className="image-container">
                <img className="tech-image" src="/assets/html.png" />
                <img className="tech-image" src="/assets/js.png" />
                <img className="tech-image" src="/assets/nodeJs.png" />
                <img className="tech-image" src="/assets/react.png" />
                <img className="tech-image" src="/assets/github.png" />
                <img className="tech-image" src="/assets/blender.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
