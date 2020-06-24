import React from 'react';
import axios from 'axios';
import './Logout.css';
const Logout = () => {
  const handlevent = () => {
    axios.post('/api/logout').then((result) => {
      window.location.replace('/Login');
    });
  };
  return (
    <div className='admin-page'>
      <h1>WELCOME!!!!!!!!</h1>
      <button type='submit' onClick={handlevent} className='logout'>
        logout{' '}
      </button>
    </div>
  );
};

export default Logout;
