import "./Navbar.css";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      ref: "#about",
      text: "Sobre mi",
    },
    {
      ref: "#projects",
      text: "Proyectos",
    },
    {
      ref: "#contact",
      text: "Contacto",
    },
  ];

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <a href="#">
              <span>Lucy </span>Jimenez
            </a>
          </div>
          <div className="list-darkmode-menu">
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.ref}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
            <label className="mode">
              {/* <input type='checkbox' checked='checked' id='darkModeButton' /> */}
              <i className="fa-solid fa-sun">
                <FaRegSun />
              </i>
              <i className="fa-solid fa-moon">
                <FaRegMoon />
              </i>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
