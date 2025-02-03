// import { FaHtml5 } from 'react-icons/fa';
import './TechItem.css';

const TechItem = ({ icon, title, description }) => {
  return (
    <div className="tech-item-container">
      <div className="tech-item-icon">{icon}</div>
      <div className="tech-item-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TechItem;
