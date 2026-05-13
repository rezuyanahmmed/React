import React from 'react';

const ControlField = () => {
  return (
    <div>
      <form>
        <input type="email" name="email" id="" placeholder='Email' required/>
        <br />
        <input type="password" name="password" id="" placeholder='password' required/>
        <br />
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default ControlField;