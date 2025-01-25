import TechItem from "./TechItem";
import "./Technologies.css";

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
        <TechItem />
        <TechItem />
        <TechItem />
        <TechItem />
        <TechItem />
      </div>
    </div>
  );
};

export default Technologies;
