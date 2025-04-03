import "./TechGrid.css"; // Importa el archivo CSS

// Datos de ejemplo
const technologies = [
  { title: "HTML", description: "Estructura" },
  { title: "CSS", description: "Estilo" },
  { title: "JavaScript", description: "Interacción" },
  { title: "GitHub", description: "Versionamiento" },
  { title: "Visual Studio Code", description: "Editor de código" },
  { title: "Terminal", description: "Línea de comandos" },
  { title: "Figma", description: "Diseño" },
  { title: "Jira", description: "Gestión" },
  { title: "React", description: "Framework" },
  { title: "Bootstrap", description: "Frontend toolkit" },
  { title: "Tailwind CSS", description: "CSS Framework" },
  { title: "??", description: "???" },
];

const TechGrid = () => {
  return (
    <div className="grid">
      {technologies.map((tech, index) => (
        <div key={index} className="card">
          <h3 className="card-title">{tech.title}</h3>
          <p className="card-description">{tech.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechGrid;
