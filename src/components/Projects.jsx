import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className=" proyects container">
      <h2>Proyectos</h2>
      <p>
        Lista de proyectos más destacados que me han ayudado a mejorar con mis
        habilidades como desarrolladora frontend.
      </p>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  );
};

export default Projects;
