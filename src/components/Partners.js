import React from 'react';

const Partners = () => {
  return (
    <div className='grid grid-cols-2 sm:flex sm:justify-evenly sm:m-4'>
      <img className='' src='/assets/salesforc-gray.png'></img>
      <img alt='groupon-logo' src='/assets/groupon-gray.png'></img>
      <img alt='cisco-logo' src='/assets/cisco-gray.png'></img>
      <img alt='wallgreens-logo' src='/assets/wallgreens-gray.png'></img>
      <img
        alt='nasa-logo'
        className='sm:pt-2 ml-7'
        src='/assets/nasa-gray.png'
      ></img>
      <img alt='pwc-logo' src='/assets/pwc-gray.png'></img>
    </div>
  );
};

export default Partners;
