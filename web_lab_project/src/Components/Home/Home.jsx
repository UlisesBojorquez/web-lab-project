import React from 'react';
import Section from './Section';
import Navbar from '../Header/Navbar';
const Home = () => {
  return (
    <div>
      { <Navbar nav={'home'} />}
      <div className='p-10 flex flex-col justify-start items-start gap-10 mt-20'>
        <Section position={'left'} />
        <Section position={'right'} />
        <Section position={'left'} />
        <Section position={'right'} />
      </div>
    </div>
    
  )
}

export default Home;
