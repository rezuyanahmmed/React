import React from 'react';

const Country = ({ country }) => {
  return (
    <div>
      <img src={country.flags.flags.png} alt="" />
      <h3>name: {country.name.common}</h3>
      <p>Popolation: {country.population.population} </p>
    </div>
  );
};

export default Country;