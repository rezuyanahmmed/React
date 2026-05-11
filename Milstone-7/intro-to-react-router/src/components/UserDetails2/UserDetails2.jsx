import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
  const { name, username } = use(userPromise);
  return (
    <div>
      <p><span>user name: {username}</span></p>
      <p>Name: {name}</p>
    </div>
  );
};

export default UserDetails2;