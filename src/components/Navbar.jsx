import { useState } from "react";
import "./Navbar.css";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { RiCloseLargeLine, RiMenu4Fill } from "react-icons/ri";
import { useTheme } from "../common/ThemeProvider";
import { links } from "../data/navbar.data";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? <FaRegMoon onClick={toggleTheme} /> : <FaRegSun onClick={toggleTheme} />;

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className="navbar">
      <nav className="container ">
        {/* La marca personal */}
        <div className="navbar-brand">
          <h1>
            <span>Lucy </span>Jimenez
          </h1>
        </div>
        {/* Menu con los items de la pagina */}
        <div className={`navbar-menu ${showMenu ? "show-menu" : ""}`}>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.ref} onClick={toggleMenu}>
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* Botones para dark/light mode */}
          <div className="navbar-menu-mode">{themeIcon}</div>
        </div>
        {/* Botones del menu */}
        <div className="navbar-menu-buttons">
          {/* mostrar menu es verdadero entonces que aparezca la x */}
          {/* mostrar menu es falso entonces que aparezca el icono de las lineas */}
          {showMenu ? <RiCloseLargeLine onClick={toggleMenu} /> : <RiMenu4Fill onClick={toggleMenu} />}

          {/* <RiMenu4Fill />
          <RiCloseLargeLine /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
