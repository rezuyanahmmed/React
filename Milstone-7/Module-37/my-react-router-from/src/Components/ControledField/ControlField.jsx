import React, { useState } from 'react';

const ControlField = () => {

  const [password, setpassword] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefult();

    if (password.length < 6) {
      setError('password must be 6 charecters')
    } else {
      setError('')
    }

  }

  const handlePasswordOnchange = e => {
    console.log(e.target.value);
    setpassword(e.target.value);

    // if (password.length < 6) {
    //   setError('password must be 6 charecters')
    // } else {
    //   setError('')
    // }

  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder='Email' required />
        <br />
        <input type="password" name="password" id="" placeholder='password'
          onChange={handlePasswordOnchange} defaultValue={password} required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlField;