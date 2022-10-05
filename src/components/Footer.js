import React from 'react';
import { AiOutlineTwitter, AiFillGithub, AiOutlineRight } from 'react-icons/ai';
import { FaLinkedinIn, FaSlack } from 'react-icons/fa';
import { GrReddit } from 'react-icons/gr';
import { MdPeopleAlt } from 'react-icons/md';
import wazuh from '../assets/wazuh-log2.svg';

const Footer = () => {
  return (
    <div className='bg-black text-white w-full sm:h-[350px]'>
      <div className='h-[40%] pl-5 sm:pl-[168px] pt-16'>
        <img src={wazuh} alt='wazuh logo'></img>
      </div>
      <div className='h-2/5 pb-5 border-b border-b-gray-500 flex flex-col pl-5 sm:pl-0 pt-4 sm:pt-0 sm:flex-row justify-center'>
        <div className='flex flex-col w-[15%] h-4/5 justify-around'>
          <span>
            <a className='font-manrope text-white font-bold'>PLATAFORM</a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Product
            </a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Cloud
            </a>
          </span>
        </div>

        <div className='flex flex-col w-[15%] h-4/5 justify-around'>
          <span>
            <a className='font-manrope text-white font-bold'>DOCUMENTATION</a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Quickstart
            </a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Getting Started
            </a>
          </span>
        </div>

        <div className='flex flex-col w-[15%] h-4/5 justify-around'>
          <span>
            <a className='font-manrope text-white font-bold'>SERVICES</a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Support
            </a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Training
            </a>
          </span>
        </div>

        <div className='flex flex-col w-[15%] h-4/5 justify-around'>
          <span>
            <a className='font-manrope text-white font-bold'>RESOURCES</a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Blog
            </a>
          </span>
          <span>
            <a className='font-manrope text-white hover:cursor-pointer hover:text-Primary'>
              Community
            </a>
          </span>
        </div>

        <div className='font-manrope text-sm font-semibold flex flex-col'>
          <h1>Subscribe to our newsletter</h1>
          <div>
            <input
              type='email'
              required
              placeholder='E-mail address'
              className='mt- mt-3 font-manrope rounded-lg h-6 w-40 pl-5'
            ></input>
            <button className='bg-Accent rounded-md p-2 ml-2 font-manrope'>
              <AiOutlineRight className='text-black' />
            </button>
          </div>
        </div>
      </div>
      <div className='h-auto pt-5 flex flex-col sm:flex-row justify-around font-manrope text-xs items-center '>
        <div className='flex flex-col sm:block'>
          <span className='pl-8 sm:pr-8 sm:border-r border-r-white'>
            © 2022 Wazuh, Inc.
          </span>
          <span className='pl-8 sm:pr-8 sm:border-r border-r-white'>
            <a className='hover:cursor-pointer hover:text-Primary'>Privacy</a>
          </span>
          <span className='pl-8'>
            <a className='hover:cursor-pointer hover:text-Primary'>
              Terms of service
            </a>
          </span>
        </div>
        <div className='w-1/5 gap-3 sm:gap-0 sm:h-7 flex justify-around items-center'>
          <span>
            <a>
              <AiOutlineTwitter className='text-white w-5 h-11 hover:cursor-pointer hover:text-Primary' />
            </a>
          </span>
          <span>
            <a>
              <FaLinkedinIn className='text-white w-5 h-11 hover:cursor-pointer hover:text-Primary' />
            </a>
          </span>
          <span>
            <a>
              <GrReddit className='text-white w-5 h-11 hover:cursor-pointer hover:text-Primary' />
            </a>
          </span>
          <span>
            <a>
              <AiFillGithub className='text-white w-5 h-11 hover:cursor-pointer hover:text-Primary' />
            </a>
          </span>
          <span>
            <a>
              <FaSlack className='text-white w-5 h-11 hover:cursor-pointer hover:text-Primary' />
            </a>
          </span>
          <span>
            <a>
              <MdPeopleAlt className='text-white w-5 h-11 hover:cursor-pointer hover:text-Primary' />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
