import React, { use } from 'react';

const Counttris = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise)
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h1>Our countries: {countries.length}</h1>
    </div>
  );
};

export default Counttris;