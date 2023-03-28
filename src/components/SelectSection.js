import React from 'react';
import '../styles/core/reset.css';
import '../styles/core/vars.css';
import '../styles/components/selectSection.css';

function SelectSection() {
  return (
    <form className="select__container">
      <label form="select"></label>
      <select id="select" className="select" defaultValue="default">
        <option disabled value="default">
          Selecciona
        </option>
        <option>Lorem 1</option>
        <option>Lorem 2</option>
        <option>Lorem 3</option>
      </select>
    </form>
  );
}

export default SelectSection;
