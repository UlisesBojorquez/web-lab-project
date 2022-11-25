import React, { useState, useEffect } from 'react'
import MedicalEquipmentCard from './MedicalEquipmentCard'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const HospitalSection = ({title, data, slider}) => {
    const [sliderText] = useState(`slider-${slider}`);
    const [equipments, setEquipments] = useState(data)

    const slideLeft = () => {
        var slider = document.getElementById(sliderText)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById(sliderText)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        if(sliderText === 'slider-ortopedicos'){
            const filteredData = data.filter((equipment => equipment.category === 'Ortopedico'))
            setEquipments(filteredData)
        }
        if(sliderText === 'slider-primeros-auxilios'){
            const filteredData = data.filter((equipment => equipment.category === 'Primeros auxilios'))
            setEquipments(filteredData)
        }
        
    }, [])

    return (
    <div className='flex flex-col gap-4'>
        <p className='text-xl font-medium underline underline-offset-8 text-blue01 pl-3'>{title}</p>

        <div className='relative flex items-center'>
            <MdChevronLeft onClick={slideLeft} size={40} className='opacity-50 hover:opacity-100 cursor-pointer hover:scale-125 ease-in-out duration-200' />
            <div id={sliderText} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide p-4 '>
                {
                    equipments.map((medicine, key) => (
                        <MedicalEquipmentCard key={key} medicine={medicine}/>
                    ))
                }
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='opacity-50 hover:opacity-100 cursor-pointer hover:scale-125 ease-in-out duration-200'/>
        </div>
    </div>
  )
}

export default HospitalSection