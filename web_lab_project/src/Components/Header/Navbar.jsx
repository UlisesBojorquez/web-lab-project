import React from 'react';
import { navLinks } from '../../data/tabs';
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../Assets/logo.png';
const Navbar = ({nav}) => {

  const [active, setActive] = useState('home');

  return (
    <nav className='bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='/'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <img src={logo} alt='logo' className='h-10'/>
            <p className='text-xl text-blue01 font-bold'>Hospital Radar</p>
          </div>
        </a>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-5 bg-gray-50 rounded-lg border border-gray-100 
          md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
            {
              navLinks.map((navItem) => (
                <li 
                key={navItem.id} 
                id={navItem.id} 
                onClick={() => setActive(navItem.id)}
                className={`text-gray-500 hover:text-blue09 text-base ${active === navItem.id ? 'font-bold underline text-blue03 ' : ''} hover:scale-105 ease-in-out duration-100`} > 
                  <Link to={navItem.link}>{navItem.title}</Link>  
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav> 
  )
}

export default Navbar;