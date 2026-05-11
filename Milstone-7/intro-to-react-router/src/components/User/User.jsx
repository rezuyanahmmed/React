import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
  const [showInfo, setshowInfo] = useState(false);
  const { id, name, email, phone } = user;

  const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/5`)

  const userStyle = {
    border: '2px solid yellow',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px'
  }

  return (
    <div style={userStyle}>
      <h2>Name:{name}</h2>
      <p>Email:{email} </p>
      <p><small>Phone Number: {phone}</small></p>
      <Link to={`/users/${id}`}>Show details</Link>
      <button onClick={() => setshowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'}>Detail info</button>

      {
        showInfo && <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2></UserDetails2>
        </Suspense>
      }
    </div>
  );
};

export default User;