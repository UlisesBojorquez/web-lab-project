import React from 'react';
import markerImage from '../../Assets/hospitalImage.jpg';
import { hospitalData } from '../../data/hospitalData'
import HospitalSection from '../Pages/Hospitals/HospitalSection'
const Section = ({position}) => {
    
    return (
        <div className='container align-center'>
            <div className='bg-white flex rounded-t-md'>
                <div className='bg-white rounded-md text-black text-xl font-bold p-2 m-2 flex-1'>Hospital Nombre</div>
            </div>
            <div className={"bg-white flex items-start flex-row"+position}>
                <img src={markerImage} alt='marker' className='h-56 m-2 rounded-md align-top object-cover flex-1'/>
                <div className='bg-blue07 rounded-md text-white flex flex-1 flex-col justify-between h-56 m-2'>
                    <div className='flex-row p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='flex-row'>
                    <button type="button" class="text-sm p-3 m-3 font-medium text-white bg-blue03 rounded-lg border border-blue05 hover:bg-blue05 focus:ring-4 focus:outline-none focus:ring-blue09 transition-all hover:scale-105"><span>Buscar</span></button>
                    </div>
                </div>
            </div>
            {/* <div className='bg-white flex'>
                <div className='bg-blue01 text-white p-2 m-2 flex-1'>Hospitales cerca de ti</div>
            </div> */}
            <div className='bg-white flex rounded-b-md'>
                <div className='flex flex-col'>
                    <HospitalSection title={'Hospitales cerca de ti'} data={hospitalData} slider={'cerca-de-ti'} />
                </div>
            </div>
            
        </div>
    )
}

export default Section;