import React from 'react';
import Envelope from '../images/icons/envelope.png';
import '../styles/components/envelopeSection.css';

function EnvelopeSection() {
  return (
    <section className="section__envelope">
      <div className="container__envelope">
        <img
          className="envelope"
          src={Envelope}
          alt="Icono carta con notificación"
        />
      </div>
    </section>
  );
}

export default EnvelopeSection;
