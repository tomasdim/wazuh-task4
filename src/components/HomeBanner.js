import React from 'react';

const HomeBanner = () => {
  return (
    <div className='bg-home-slide bg-center bg-no-repeat bg-cover h-[400px] flex justify-center items-center content-center'>
      <div className='flex flex-col items-center content-around text-white font-manrope text-center '>
        <h1 className='text-5xl'>The Open Source</h1>
        <h1 className='text-5xl mt-2'>Security Platform</h1>
        <h2 className='mt-8'>Unified XDR and SIEM protection for endpoints</h2>
        <h2>and cloud workloads.</h2>
        <button className='bg-Accent text-DarkestShade px-8 rounded py-1 mt-8'>
          Install Wazuh
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
