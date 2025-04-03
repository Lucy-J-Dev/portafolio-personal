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
    </div>
  );
};

export default Projects;
