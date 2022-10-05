import React from 'react';
import salesforce from '../assets/salesforc-gray.png';
import groupon from '../assets/groupon-gray.png';
import cisco from '../assets/cisco-gray.png';
import wallgreens from '../assets/wallgreens-gray.png';
import nasa from '../assets/nasa-gray.png';
import pwc from '../assets/pwc-gray.png';

const Partners = () => {
  return (
    <div className='grid grid-cols-2 sm:flex sm:justify-evenly sm:m-4'>
      <img alt='saleforce' src={salesforce}></img>
      <img alt='groupon-logo' src={groupon}></img>
      <img alt='cisco-logo' src={cisco}></img>
      <img alt='wallgreens-logo' src={wallgreens}></img>
      <img alt='nasa-logo' className='sm:pt-2 ml-7' src={nasa}></img>
      <img alt='pwc-logo' src={pwc}></img>
    </div>
  );
};

export default Partners;
