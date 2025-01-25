import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2>Projectos</h2>
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
