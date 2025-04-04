import SocialMedia from "./SocialMedia";
import TechItem from "./TechItem";
import { FaRegPaperPlane, FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
import { useState } from "react";

// Biblioteca para enviar correo electrónico y manejo de formularios
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const API_KEY = "fcd9fc15-f011-4667-9583-297f77b7b6b4";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Envio de correo electronico
  const { submit: onSubmit } = useWeb3Forms({
    access_key: API_KEY,
    settings: {
      from_name: "Portafolio Lucy-J-Dev",
      subject: "Nuevo mensaje de contacto",
    },
    onSuccess: () => {
      setIsSuccess(true);
      reset();
    },
    onError: () => {
      setIsSuccess(false);
    },
  });

  return (
    <div id="contact" className="contact container">
      <h2>Contacto</h2>
      <div className="contact-group">
        {/* Seccion texto contacto */}
        <div>
          <p>
            Me puedes contactar a través de mis redes sociales, enviándome un correo electrónico por llamada o llenando
            el formulario que encuentras a continuación.
          </p>
          <div>
            <TechItem icon={<MdEmail />} title={"Email"} description={"lucy.jimenez.mejia@gmail.com"} />
            <TechItem icon={<FaPhoneFlip />} title={"Teléfono"} description={"+57 3128145480"} />
          </div>
          <SocialMedia />
        </div>
        {/* Seccion formulario contacto */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-input-info">
              <div className="contact-input">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  autoComplete="false"
                  name="name"
                  id="name"
                  {...register("name", {
                    required: "Cuál es tu nombre?",
                  })}
                />
                {errors.name && (
                  <div className="contact-input-error">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>
              <div className="contact-input">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: "Ingresa tu correo electrónico",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Tu correo no es válido",
                    },
                  })}
                />
                {errors.email && (
                  <div className="contact-input-error">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>
            </div>
            <div className="contact-input">
              <label htmlFor="message">Mensaje</label>
              <textarea
                rows={8}
                type="text"
                name="message"
                id="message"
                {...register("message", {
                  required: "Cuentame algo!",
                })}
              />
              {errors.message && (
                <div className="contact-input-error">
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>
            <button type="submit" className="btn primary">
              <span>Enviar</span>
              <FaRegPaperPlane />
            </button>
          </form>

          {isSubmitSuccessful && isSuccess && (
            <div className="contact-send-success">
              {`Tu mensaje fue enviado correctamente. 
              Espero ponerme en contacto muy pronto`}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className="contact-send-success">
              {`No se envió tu mensaje. 
                Vuelve a intentarlo`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
