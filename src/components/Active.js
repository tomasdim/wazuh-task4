import React from 'react';

const Active = () => {
  return (
    <div className='w-full h-[700px]'>
      <div className='h-1/2 w-full flex'>
        <div className='font-manrope flex flex-col justify-center items-center text-black h-full w-1/2 bg-gradient-to-t from-white to-LightestShade'>
          <div className='w-[70%] h-1/2 flex flex-col justify-around text-left ml-36'>
            <h1 className=' font-semibold text-2xl'>Active XDR protection</h1>
            <h1 className=' font-semibold text-2xl'>from modern threats</h1>
            <h2 className='text-sm'>
              Wazuh provides analysts real-time correlation and context. Active
              responses are granular, encompassing on-device remediation so
              enpoints are kept clean and operational.
            </h2>
          </div>
        </div>
        <div className='bg-storage w-1/2 h-full bg-center bg-no-repeat bg-cover'></div>
      </div>
      <div className='h-1/2 w-full flex'>
        <div className='bg-cloud w-1/2 h-full bg-center bg-no-repeat bg-cover'></div>
        <div className='font-manrope g-gradient-to-t from-white to-LightestShade flex flex-col justify-center items-center h-full w-1/2'>
          <div className='w-[70%] h-1/2 flex flex-col justify-around text-left'>
            <h1 className='font-semibold text-2xl'>
              Explore the potential of <br /> Wazuh Cloud
            </h1>
            <h2 className='mt-4'>
              Wazuh has created an entirely new cloud-based architecture to
              reduce complexity and improve security while providing stringer
              endpoint protection.
            </h2>
            <button className='mt-5 text-md items-center justify-start w-56 bg-Accent rounded-xl font-manrope px-8 py-3'>
              Start your free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
