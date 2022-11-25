import React from 'react';
import Section from './Section';
import Navbar from '../Header/Navbar';
const Home = () => {
  return (
    <div>
      { <Navbar nav={'home'} />}
      <div className='p-10 flex flex-col justify-start items-start gap-10 mt-20'>
        <Section position={''} title={'Hospitales'} type={'hospitals'} />
        <Section position={'-reverse'} title={'Medicinas'} type={'medicines'}/>
        <Section position={''} title={'Equipo Médico'} type={'equipment'}/>
        <Section position={'-reverse'} title={'Censo'} type={'census'}/>
      </div>
    </div>
  )
}

export default Home;
