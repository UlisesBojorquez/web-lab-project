import React from 'react';
import logo from '../../Assets/logo.png'

const Footer = () => {
  return (
    <footer className=' bg-blue07'>
      <div className='w-full  flex flex-col justify-center items-center py-10'>
        <div>
          <img src={logo} alt='logo' className='h-10'/>
        </div>
        <div>
          <p>@Hospital Radar. Derechos Reservados 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer