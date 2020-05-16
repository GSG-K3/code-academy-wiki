import React from 'react';
import Navbar from '../../SharedComponents/NavBar/index';
import image from '../../images/error.png';
const ErrorImage = () => {
  return (
    <div className='error-page'>
      <img src={image} />;
    </div>
  );
};
export default ErrorImage;
