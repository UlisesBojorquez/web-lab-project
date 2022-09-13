import React from 'react';
import Section from './Section';

const Home = () => {
  return (
    <div className='p-10 flex flex-col justify-start items-start gap-10'>
      <Section position={'left'} />
      <Section position={'right'} />
      <Section position={'left'} />
      <Section position={'right'} />
    </div>
  )
}

export default Home;