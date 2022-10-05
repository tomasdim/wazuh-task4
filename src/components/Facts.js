import React from 'react';

const Facts = () => {
  return (
    <div className='w-full flex-col sm:flex-row flex justify-around items-center font-manrope h-44'>
      <div className='flex items-cente pt-4 sm:pt-0'>
        <div className='pr-5   w-24'>
          <img className='w-16' src='/assets/Protected endpoints.png'></img>
        </div>
        <div className='text-left'>
          <h1 className='font-semibold text-xl'>15+ Million</h1>
          <h2>Protected endpoints</h2>
        </div>
      </div>
      <div className='flex items-center pt-4 sm:pt-0'>
        <div className='pr-5  w-24'>
          <img src='/assets/Enterprise users.png'></img>
        </div>
        <div className='text-left'>
          <h1 className='font-semibold text-xl'>100+ Thousand</h1>
          <h2>Enterprise users</h2>
        </div>
      </div>
      <div className='flex items-center pt-4 sm:pt-0'>
        <div className='pr-5 w-24'>
          <img src='/assets/Downloads per year.png'></img>
        </div>
        <div className='text-left'>
          <h1 className='font-semibold text-xl'>10+ Million</h1>
          <h2>Downloads per year</h2>
        </div>
      </div>
    </div>
  );
};

export default Facts;
