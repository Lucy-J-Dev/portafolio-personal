import TechItem from './TechItem';
import { FaHtml5 } from 'react-icons/fa';
import './Technologies.css';

// Datos de ejemplo

const technologies = [
  { icon: <FaHtml5 />, title: 'HTML', description: 'Estructura' },
  { icon: <FaHtml5 />, title: 'CSS', description: 'Estilo' },
  { icon: <FaHtml5 />, title: 'JavaScript', description: 'Interacción' },
  { icon: <FaHtml5 />, title: 'GitHub', description: 'Versionamiento' },
  {
    icon: <FaHtml5 />,
    title: 'Visual Studio Code',
    description: 'Editor de código',
  },
  { icon: <FaHtml5 />, title: 'Terminal', description: 'Línea de comandos' },
  { icon: <FaHtml5 />, title: 'Figma', description: 'Diseño' },
  { icon: <FaHtml5 />, title: 'Jira', description: 'Gestión' },
  { icon: <FaHtml5 />, title: 'React', description: 'Framework' },
  { icon: <FaHtml5 />, title: 'Bootstrap', description: 'Frontend toolkit' },
  { icon: <FaHtml5 />, title: 'Tailwind CSS', description: 'CSS Framework' },
  { icon: <FaHtml5 />, title: '??', description: '???' },
];

const Technologies = () => {
  return (
    <div className="technologies container">
      <h2>Herramientas que uso</h2>
      <p>
        Mira las herramientas y tecnologías que he aprendido, uso y descubro día
        a día para crear sitios web y aplicaciones fantásticas.
      </p>
      {/* lista de tecnologías */}
      <div className="technologies-list">
        {technologies.map((tech, index) => {
          return (
            <TechItem
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
