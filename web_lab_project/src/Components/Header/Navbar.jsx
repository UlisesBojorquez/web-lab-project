import React from 'react'

const Navbar = () => {
  return (
    <header >
      <nav className='bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
        {/* Flex container */}
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          {/* Logo Icon and text */}


          {/* Links */}
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-4 mt-5 bg-gray-50 rounded-lg border border-gray-100 
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white'>
              <li>hol</li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
  )
}

export default Navbar