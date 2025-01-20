import './NavbarUno.css';
import { FaRegSun } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';

const NavbarUno = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#">
              <span>Lucy</span>Jimenez
            </a>
          </div>
          <div className="list-darkmode-menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portafolio">Portafolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <label className="mode">
              <input type="checkbox" checked="checked" id="darkModeButton" />
              <i className="fa-solid fa-sun">
                <FaRegSun />
              </i>
              <i className="fa-solid fa-moon">
                <FaRegMoon />
              </i>
            </label>
            <button className="hamburger">
              <div className="bar"></div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarUno;
