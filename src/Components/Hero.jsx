import './Hero.css';
import { FaGithub } from 'react-icons/fa6';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { MdLocalPhone, MdOutlineFileDownload } from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <div className='hero container'>
        <div>
          {/* Texto en el hero */}
          <div className='container-description'>
            <p className='subtitle'>Hola...</p>
            <h1>
              Soy <span>Lucy Jiménez </span>desarrolladora Frontend
            </h1>
            <p>
              Bienvenidos a mi portafolio como desarrolladora Frontend. Soy
              Lucy, una programadora que está iniciando esta nueva etapa con una
              fuerte pasión por el diseño y la creación de páginas web
              llamativas, adaptables y amigables con el usuario.
            </p>
            <div className='container-button'>
              <button className='btn primary'>
                <span>Contactame</span>
                <MdLocalPhone />
              </button>

              <button className=' btn secondary'>
                <span>Descargar CV</span>
                <MdOutlineFileDownload />
              </button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className='container-social-media'>
            <a href=''>
              <FaGithub />
            </a>
            <a href=''>
              <TbBrandLinkedinFilled />
            </a>
          </div>

          {/* Imagen personal */}
          <div className='container-photo'>
            <img src='' alt='Foto de presentación de perfil de Lucy Jiménez' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
