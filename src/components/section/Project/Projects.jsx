import Card from "../../card/Card";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="project">
      <div className="project-container">
        <h1 className="project-name">Projects</h1>
        <div className="project-card">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
