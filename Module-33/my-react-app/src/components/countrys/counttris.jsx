import React, { use } from 'react';
import Country from '../Country/Country';

const Counttris = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Our countries: {countries.length}</h1>
      {
        countries.map(country => <Country country></Country>)
      }
    </div>
  );
};

export default Counttris;