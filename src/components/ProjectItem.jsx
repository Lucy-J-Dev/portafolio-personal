import "./ProjectItem.css";

const ProjectItem = ({ id, title, description, tags, img, githubUrl, webUrl }) => {
  return (
    <div className="project-item-container">
      <img src={img} alt={`Imagen del proyecto ${title}`} />
      <div className="project-content">
        <div className="project-title">
          <span>{id}</span>
          <h3>{title}</h3>
        </div>
        <div className="project-description">
          <p>{description}</p>
          {tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
          <div className="project-action-btns">
            <a className="btn primary" href={githubUrl}>
              Ver código
            </a>
            <a className="btn secondary" href={webUrl}>
              Ver web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
