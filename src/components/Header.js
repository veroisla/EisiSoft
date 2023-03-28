import React from 'react';
import Logo from '../images/logo/logo.svg';

import '../styles/core/reset.css';
import '../styles/core/vars.css';
import '../styles/components/header.css';
import HamburguerNav from '../components/HamburguerNav';

function Header() {
  return (
    <header className="header">
      <a
        href="https://eisisoft.com/es"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt="Eisi Soft" className="logo__eisiSoft" />
      </a>
      <HamburguerNav />
    </header>
  );
}

export default Header;
