import { projects } from "../data/projects.data";
import ProjectItem from "./ProjectItem";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="proyects container">
      <h2>Proyectos</h2>
      <p>
        Lista de proyectos más destacados que me han ayudado a mejorar con mis habilidades como desarrolladora frontend.
      </p>
      {/* Lista de proyectos realizados */}
      <div className="projects-list">
        {projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
