import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsTools } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 right-2 lg:right-8 z-50'>
      <div className='container mx-auto'>
        <div className='w-[60px] h-[300px] bg-black/20 backdrop-blur-md rounded-full flex flex-col justify-around items-center text-white p-3 transform translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out'>
          <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white hover:text-black'>
            <BiHomeAlt />
          </Link>

          <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white hover:text-black'>
            <BiUser />
          </Link>

          <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white hover:text-black'>
            <BsClipboardData />
          </Link>
          
          <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white hover:text-black'>
            <BsTools />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;