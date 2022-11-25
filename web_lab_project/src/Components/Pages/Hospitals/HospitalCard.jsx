import React from 'react';
import markerImage from '../../../Assets/marker.png';
import direccionesImage from '../../../Assets/direcciones.png';
import { useNavigate } from "react-router-dom";

const HospitalCard = ({name, ubication, direction, status, image}) => {
    let navigate = useNavigate();
    return (
    <div 
    id='hospital-card'
    className='shadow-lg 
    w-full
    sm:w-2/4
    md:w-1/3
    bg-white 
    rounded-md 
    inline-block
    cursor-pointer
    hover:scale-105 ease-in-out duration-300
    mr-5
    mb-5
    whitespace-normal
    '
    onClick={() => navigate(`/Hospitales/${name}`)}
    >
        <div className='flex flex-row gap-2'>

        
        <div 
        id='image' 
        className='w-2/6 '>
            <img src={image} alt='hospital' className='w-full h-full object-cover rounded-tl-md rounded-bl-md' /> 
        </div>

        <div 
        id='content'
        className='w-4/6 flex flex-col gap-2 p-2'>
            <p className='font-medium w-full'> {name}  </p>
            <div className='flex flex-row justify-start items-center gap-2'>
                <img src={markerImage} alt='marker' className='w-5' />
                <p>{ubication}</p>
            </div>
            <div className='flex flex-row justify-start items-center gap-2'>
                <img src={direccionesImage} alt='direction' className='w-5' />
                <p > {direction} </p>
            </div>
            {
                status ?
                <div className='w-32'>
                    <p className='px-2 py-1 rounded-lg text-green-800 bg-green-400 text-center font-semibold'> Disponible</p>
                </div>
                :
                <div className='w-32'>
                    <p className='px-2 py-1 rounded-lg text-red-800 bg-red-400 text-center font-semibold '> No Disponible</p>
                </div>
            }
            
            
            
        </div>
        </div>
    </div>
    // <div 
    // id='hospital-card'
    // className='shadow-lg 
    // w-1/3
    // bg-white 
    // rounded-md 
    // p-2 
    // flex
    // flex-row
    // gap-2
    // cursor-pointer
    // hover:scale-105 ease-in-out duration-300
    // '
    // >
    //     <div 
    //     id='image' 
    //     className='w-2/6'>
    //         <img src={hospitalImage} className='w-full h-full object-cover' /*xs:h-2 md:h-24 */ /> 
    //     </div>

    //     <div 
    //     id='content'
    //     className='w-auto flex flex-col gap-2'>
    //         <div >
    //             <p className='font-medium'>Hospital Nombre</p>
    //         </div>
    //         <div className='flex flex-row justify-start items-center gap-2'>
    //             <img src={markerImage} className='w-5' />
    //             <p>Zapopan, Jalisco</p>
    //         </div>
    //         <div className='flex flex-row justify-start items-start gap-2'>
    //             <img src={direccionesImage} className='w-5' />
    //             <p>Calle 2, Avenida Profirio Diaz, col Patito </p>
    //         </div>
    //         <div className='w-32'>
    //             <p className='px-2 py-1 rounded-lg text-red-800 bg-red-400 text-center font-semibold '> No Disponible</p>
    //         </div>
    //         <div className='w-32'>
    //             <p className='px-2 py-1 rounded-lg text-green-800 bg-green-400 text-center font-semibold'> Disponible</p>
    //         </div>
            
    //     </div>
    // </div>
  )
}

export default HospitalCard