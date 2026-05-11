import React from 'react';

const SimpleForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
console.log('form submited');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;