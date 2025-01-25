import SocialMedia from "./SocialMedia";
import TechItem from "./TechItem";

const Contact = () => {
  return (
    <div id="contact" className="container">
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
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
