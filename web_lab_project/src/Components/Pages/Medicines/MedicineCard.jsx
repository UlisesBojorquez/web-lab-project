import React from 'react';
import markerImage from '../../../Assets/marker.png';
import direccionesImage from '../../../Assets/direcciones.png';

const HospitalCard = ({medicine}) => {

    const status = () => {
        console.log(medicine.status)
        switch (medicine.status) {
            
            case 'Disponible':
                return ( 
                    <div className='w-32 flex flex-row items-center gap-2'>
                        <span className='w-3 h-3 block rounded-3xl bg-green-400 animate-pulse' />
                        <p className='px-2 py-1 rounded-lg text-green-800 font-semibold'> Disponible</p>
                    </div>
                )
            case 'No Disponible':
                return ( 
                    <div className='w-40 flex flex-row items-center gap-2'>
                        <span className='w-3 h-3 block rounded-3xl bg-red-400 animate-pulse' />
                        <p className='px-2 py-1 rounded-lg text-red-800 w-100 inline-block font-semibold'> No Disponible</p>
                    </div>
                )
        
            default:
                return ( 
                    <div className='w-32 flex flex-row items-center gap-2'>
                        <span className='w-3 h-3 block rounded-3xl bg-yellow-400 animate-pulse' />
                        <p className='px-2 py-1 rounded-lg text-yellow-800 font-semibold'> En Camino</p>
                    </div>
                )
        }
    }

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
    whitespace-normal
    '
    >
        <div className='flex flex-col gap-2'>

        
        <div 
        id='image' 
        className='w-full '>
            <img src={medicine.image} alt='hospital' className='w-full h-full object-cover rounded-tl-md rounded-bl-md' /> 
        </div>

        <div 
        id='content'
        className='w-full flex flex-col gap-2 p-2'>
            <p className='font-medium w-full'> {medicine.name} ({medicine.category}) </p>
            <p className='font-normalw-full'> {medicine.description} </p>
            <div className='flex flex-row justify-start items-center gap-2'>
                <img src={markerImage} alt='marker' className='w-5' />
                <p>{medicine.ubication}</p>
            </div>
            <div className='flex flex-row justify-start items-center gap-2'>
                <img src={direccionesImage} alt='direction' className='w-5' />
                <p > {medicine.direction} </p>
            </div>
            <div>
                <p>{medicine.count}</p>
            </div>
            {
                status()
            }
        </div>
        </div>
    </div>
  )
}

export default HospitalCard