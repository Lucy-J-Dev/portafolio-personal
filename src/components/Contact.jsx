import SocialMedia from "./SocialMedia";
import TechItem from "./TechItem";
import { FaRegPaperPlane, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact container">
      <h2>Contacto</h2>
      <div className="contact-group">
        {/* Seccion texto contacto */}
        <div>
          <p>
            Me puedes contactar a través de mis redes sociales, enviandome un
            correo electrónico por llamada o llenando el formulario que
            encuentras a continuación.
          </p>
          <div>
            <TechItem
              icon={<MdEmail />}
              title={"Email"}
              description={"lucy.jimenez.mejia@gmail.com"}
            />
            <TechItem
              icon={<FaPhoneFlip />}
              title={"Telefono"}
              description={"+57 3128145480"}
            />
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
        {/* Seccion formulario contacto */}
        <div className="contact-form-container">
          <form action="" className="">
            <div className="contact-input-info">
              <div className="contact-input">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="contact-input">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="contact-input">
              <label htmlFor="message">Mensaje</label>
              <textarea rows={8} type="text" name="message" id="message" />
            </div>
            <button className="btn primary">
              <span>Enviar</span>
              <FaRegPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
