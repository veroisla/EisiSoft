import React from 'react';
import Config from '../images/icons/config.png';
import '../styles/core/reset.css';
import '../styles/core/vars.css';
import '../styles/components/configurationSection.css';
import Envelope from '../images/icons/envelope.png';

function ConfigSection() {
  return (
    <section className="config">
      <div className="config__iconText">
        <img
          className="config__icon"
          src={Config}
          alt="Icono configuración para la sección configuración"
        />
        <p className="config__title">Configuración</p>
      </div>
      <img
        className="config__envelope"
        src={Envelope}
        alt="Icono carta con notificación"
      />
    </section>
  );
}

export default ConfigSection;
