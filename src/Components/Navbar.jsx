import { useState } from 'react';
import './Navbar.css';
import { FaRegSun } from 'react-icons/fa';
import { FaRegMoon } from 'react-icons/fa';
import { RiCloseLargeLine, RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
  const links = [
    {
      id: 1,
      ref: '#about',
      text: 'Sobre mi',
      active: true,
    },
    {
      id: 2,
      ref: '#projects',
      text: 'Proyectos',
      active: false,
    },
    {
      id: 3,
      ref: '#contact',
      text: 'Contacto',
      active: false,
    },
  ];

  const [showMenu, setShowMenu] = useState(true);
  const [ligthMode, setLigthMode] = useState(true);

  return (
    <header className="navbar">
      <nav className="container">
        {/* La marca personal */}
        <div className="navbar-brand">
          <h1>
            <span>Lucy </span>Jimenez
          </h1>
        </div>
        {/* Menu con los items de la pagina */}
        <div className="navbar-menu">
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.ref}>{link.text}</a>
                </li>
              );
            })}
          </ul>
          {/* Botones para dark/light mode */}
          <div className="navbar-menu-mode">
            {ligthMode ? (
              <FaRegSun
                onClick={() => {
                  setLigthMode((prevState) => !prevState);
                }}
              />
            ) : (
              <FaRegMoon
                onClick={() => {
                  setLigthMode((prevState) => !prevState);
                }}
              />
            )}
          </div>
        </div>
        {/* Botones del menu */}
        <div className="navbar-menu-buttons">
          {/* mostrar menu es verdadero entonces que aparezca la x */}
          {/* mostrar menu es falso entonces que aparezca el icono de las lineas */}
          {showMenu ? (
            <RiCloseLargeLine
              onClick={() => {
                setShowMenu((prevState) => !prevState);
              }}
            />
          ) : (
            <RiMenu4Fill
              onClick={() => {
                setShowMenu((prevState) => !prevState);
              }}
            />
          )}

          {/* <RiMenu4Fill />
          <RiCloseLargeLine /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
