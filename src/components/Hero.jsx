import "./Hero.css";
import { MdLocalPhone, MdOutlineFileDownload } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import HeroImage from "../assets/Foto-Lucy-Jimenez.jpeg";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-container">
          <div className="hero-right">
            {/* Texto en el hero */}
            <div className="hero-information">
              <p className="hero-subtitle">Hola...</p>
              <p className="hero-title">
                Soy <span>Lucy Jiménez </span>desarrolladora Frontend
              </p>
              <p>
                Bienvenidos a mi portafolio como desarrolladora Frontend. Soy
                Lucy, una programadora que está iniciando esta nueva etapa con
                una fuerte pasión por el diseño y la creación de páginas web
                llamativas, adaptables y amigables con el usuario.
              </p>
              <div className="container-button">
                <button className="btn primary">
                  <span>Contactame</span>
                  <MdLocalPhone />
                </button>

                <button className=" btn secondary">
                  <span>Descargar CV</span>
                  <MdOutlineFileDownload />
                </button>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="hero-social-media">
              <a href="">
                <FaSquareGithub />
              </a>
              <a href="">
                <FaLinkedin />
                {/* <TbBrandLinkedinFilled /> */}
              </a>
            </div>
          </div>

          {/* Imagen personal */}
          <div className="hero-left">
            <img
              src={HeroImage}
              alt="Foto de presentación de perfil de Lucy Jiménez"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
