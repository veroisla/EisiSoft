import React from 'react';
import Card from '../components/Card';
import '../styles/components/cardsSection.css';

function CardsSection() {
  return (
    <section className="cards__container container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default CardsSection;
