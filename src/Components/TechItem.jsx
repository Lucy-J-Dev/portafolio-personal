import { FaHtml5 } from "react-icons/fa";
import "./TechItem.css";

const TechItem = () => {
  return (
    <div className="tech-item-container">
      <div className="tech-item-icon">
        <FaHtml5 />
      </div>
      <div className="tech-item-description">
        <h3>HTML</h3>
        <p>Estructura</p>
      </div>
    </div>
  );
};

export default TechItem;
