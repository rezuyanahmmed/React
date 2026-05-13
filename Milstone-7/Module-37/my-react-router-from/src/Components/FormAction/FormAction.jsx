import React from 'react';

const FormAction = () => {

  const handleFormAction = (formData) =>{
    console.log(formData);
    
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
      </form>
    </div>
  );
};

export default FormAction;