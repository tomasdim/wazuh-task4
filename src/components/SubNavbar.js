import React from 'react';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaSlack } from 'react-icons/fa';
import { GrReddit } from 'react-icons/gr';
import { MdPeopleAlt } from 'react-icons/md';

const SubNavbar = () => {
  return (
    <div className='bg-[#f5f6f8] flex justify-end font-manrope'>
      <div className='flex mr-16 justify-evenly w-full max-w-2xl my-3 items-center '>
        <div className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer text-[15px] hover:underline'>
          Community
        </div>
        <div className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer text-[15px] hover:underline'>
          Contact us
        </div>

        <AiOutlineTwitter className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer' />

        <FaLinkedinIn className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer' />
        <GrReddit className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer' />
        <AiFillGithub className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer' />
        <FaSlack className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer' />
        <MdPeopleAlt className='hover:text-[#3585F9] text-DarkestShade hover:cursor-pointer' />
        <input
          className='rounded-lg w-32 pl-2 placeholder-MediumShade text-DarkestShade'
          type='text'
          placeholder='Search'
        ></input>
      </div>
    </div>
  );
};

export default SubNavbar;
