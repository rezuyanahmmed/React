import React from 'react';
import './Country.css'
const Country = ({ country }) => {
  return (
    <div className='country'>
      <img src={country.flags.flags.png} alt="" />
      <h3>name: {country.name.common}</h3>
      <p>Popolation: {country.population.population} </p>
      <div>

      </div>
    </div>

  );
};

export default Country;