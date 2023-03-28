import React from 'react';
import '../styles/components/card.css';
import '../styles/core/vars.css';

function Card() {
  return (
    <article className="article">
      <h3 className="article__title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h3>
      <p className="article__info">
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In auctor
        suscipit felis nec eleifend. Aenean lorem neque, aliquet id odio,
        pretium mattis nunc.
      </p>
    </article>
  );
}

export default Card;
