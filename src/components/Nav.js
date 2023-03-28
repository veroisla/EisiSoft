import React from 'react';
import '../styles/components/nav.css';

import Bell from '../images/icons/bell.png';
import Slow from '../images/icons/slow.png';
import ConfigMenu from '../images/icons/configMenu.png';

function Nav() {
  return (
    <nav>
      <ul className="nav__list">
        <li className="nav__item">
          <a
            className="nav__subtitle"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="nav__icon"
              src={Bell}
              alt="Icono campana para sección órdendes de trabajo"
            />
            <p>Órdenes de trabajo</p>
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__subtitle"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="nav__icon"
              src={Slow}
              alt="Icono Slow Motion para sección consumos/contadores"
            />
            <p>Consumos/contadores</p>
          </a>
        </li>
        <li className="nav__item active">
          <a
            className="nav__subtitle"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="nav__icon"
              src={ConfigMenu}
              alt="Icono configuration para sección configuración"
            />
            <p>Configuración</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
