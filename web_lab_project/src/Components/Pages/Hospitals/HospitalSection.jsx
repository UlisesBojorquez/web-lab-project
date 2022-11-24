import React, { useState } from 'react'
import HospitalCard from './HospitalCard'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const HospitalSection = ({title, data, slider}) => {
    const [sliderText] = useState(`slider-${slider}`);

    const slideLeft = () => {
        var slider = document.getElementById(sliderText)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById(sliderText)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
    <div className='flex flex-col gap-4'>
        <p className='text-xl font-medium underline underline-offset-8 text-blue01 pl-3'>{title}</p>

        <div className='relative flex items-center'>
            <MdChevronLeft onClick={slideLeft} size={40} className='opacity-50 hover:opacity-100 cursor-pointer hover:scale-125 ease-in-out duration-200' />
            <div id={sliderText} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide p-4 '>
                {
                    data.map((hospital, key) => (
                        <HospitalCard key={key} direction={hospital.direction} ubication={hospital.ubication} name={hospital.name} image={hospital.image} status={hospital.status} />
                    ))
                }
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='opacity-50 hover:opacity-100 cursor-pointer hover:scale-125 ease-in-out duration-200'/>
        </div>
    </div>
  )
}

export default HospitalSection