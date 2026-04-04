import React, { use } from 'react';

const Counttris = ({countriesPromise}) => {
  const countries = use(countriesPromise)
  console.log(countries);
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Counttris;