import './Hero.css';
import { FaGithub } from 'react-icons/fa6';
import { TbBrandLinkedinFilled } from 'react-icons/tb';

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
              <button className='btn primary'>Contactame</button>

              <button className=' btn secondary'>Descargar CV</button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className='container-social-media'>
            <a href=''>
              <i>
                <FaGithub />
              </i>
            </a>
            <a href=''>
              <i>
                <TbBrandLinkedinFilled />
              </i>
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
