import SocialMedia from './SocialMedia';
import TechItem from './TechItem';
import { FaRegPaperPlane } from 'react-icons/fa6';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact container">
      <h2>Contacto</h2>
      <p>
        Me puedes contactar a través de mis redes sociales, enviandome un correo
        electrónico por llamada o llenando el formulario que encuentras a
        continuación.
      </p>
      <div>
        <TechItem />
        <TechItem />
      </div>
      <div>
        <SocialMedia />
      </div>
      <form>
        <button className="btn primary">
          <span>Enviar</span>
          <FaRegPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Contact;
