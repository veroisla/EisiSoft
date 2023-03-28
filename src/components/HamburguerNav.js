import React from 'react';
import Menu from '../images/icons/menu.png';
import Nav from '../components/Nav';

function NavDesktop() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <img className="menu__ham" src={Menu} alt="Icono Menu" />
      </label>
      <div className="nav__show">
        <Nav />
      </div>
    </div>
  );
}

export default NavDesktop;
