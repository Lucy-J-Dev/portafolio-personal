import { projects } from "../data/projects.data";
import ProjectItem from "./ProjectItem";
import "./Projects.css";
import { LuConstruction } from "react-icons/lu";

const Projects = () => {
  return (
    <div id="projects" className="proyects container">
      <h2>Proyectos</h2>
      <p>
        Lista de proyectos más destacados que me han ayudado a mejorar con mis habilidades como desarrolladora frontend.
      </p>
      <p>{'"Sección en construcción"'}</p>
      <LuConstruction size={120} className="icon-color" />
      {/* Lista de proyectos realizados */}
      {/* <div className="projects-list">
        {projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div> */}
    </div>
  );
};

export default Projects;
