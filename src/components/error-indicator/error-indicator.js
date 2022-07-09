import React from 'react';

import './error-indicator.css';
import icon from './star-wars-bb8.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt='error icon'/>
      <span className='boom'>BOOM!</span>
      <span>something has gone terrible wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;