import React from 'react';
import wazuhlogo from '../assets/wazuh-log.svg';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center h-20 mx-20 font-manrope'>
      <div className='w-full flex'>
        <div className='flex items-center align-middle '>
          <img src={wazuhlogo} alt='wazuh-logo'></img>
        </div>
        <div className='hidden sm:flex items-center justify-end w-full'>
          <div className='px-2 hover:text-[#3585F9] hover:cursor-pointer'>
            Platform
          </div>
          <div className='px-2 hover:text-[#3585F9] hover:cursor-pointer'>
            Cloud
          </div>
          <div className='px-2 hover:text-[#3585F9] hover:cursor-pointer'>
            Documentation
          </div>
          <div className='px-2 hover:text-[#3585F9] hover:cursor-pointer'>
            Services
          </div>
          <div className='px-2'>
            <div className='bg-Accent px-4 py-2 rounded-md h-auto hover:cursor-pointer'>
              Install Wazuh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
