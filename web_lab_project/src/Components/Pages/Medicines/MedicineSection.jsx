import React, { useState, useEffect } from 'react'
import MedicineCard from './MedicineCard'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const HospitalSection = ({title, data, slider}) => {
    const [sliderText] = useState(`slider-${slider}`);
    const [medicines, setMedicines] = useState(data)

    const slideLeft = () => {
        var slider = document.getElementById(sliderText)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById(sliderText)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        if(sliderText === 'slider-AINES'){
            const filteredData = data.filter((medicine => medicine.category === 'AINES'))
            setMedicines(filteredData)
        }
        if(sliderText === 'slider-OPIOIDES'){
            const filteredData = data.filter((medicine => medicine.category === 'OPIOIDES'))
            setMedicines(filteredData)
        }
        if(sliderText === 'slider-ANTIRREUMATICO'){
            const filteredData = data.filter((medicine => medicine.category === 'ANTIRREUMATICO'))
            setMedicines(filteredData)
        }
        if(sliderText === 'slider-ANTIEPILEPTICOS'){
            const filteredData = data.filter((medicine => medicine.category === 'ANTIEPILEPTICOS'))
            setMedicines(filteredData)
        }
        if(sliderText === 'slider-ANTIBIOTICO-BETALACTAMICO'){
            const filteredData = data.filter((medicine => medicine.category === 'ANTIBIOTICO BETALACTAMICO'))
            setMedicines(filteredData)
        }
        
    }, [])

    return (
    <div className='flex flex-col gap-4'>
        <p className='text-xl font-medium underline underline-offset-8 text-blue01 pl-3'>{title}</p>

        <div className='relative flex items-center'>
            <MdChevronLeft onClick={slideLeft} size={40} className='opacity-50 hover:opacity-100 cursor-pointer hover:scale-125 ease-in-out duration-200' />
            <div id={sliderText} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide p-4 '>
                {
                    medicines.map((medicine, key) => (
                        <MedicineCard key={key} medicine={medicine}/>
                    ))
                }
            </div>
            <MdChevronRight onClick={slideRight} size={40} className='opacity-50 hover:opacity-100 cursor-pointer hover:scale-125 ease-in-out duration-200'/>
        </div>
    </div>
  )
}

export default HospitalSection