import React from 'react';
import hospitalImage from '../../Assets/hospitalImage.jpg';
import equipomedico from '../../Assets/equipomedico.jpg';
import medicineImaghe from '../../Assets/medicineImage.jpg';
import censo from '../../Assets/censo.jpg';
import { hospitalData } from '../../data/hospitalData'
import { medicineData } from '../../data/medicinesData'
import { equipmentData } from '../../data/equipmentData'
import HospitalSection from '../Pages/Hospitals/HospitalSection'
import MedicalEquipmentSection from '../Pages/MedicalEquipment/MedicalEquipmentSection';
import MedicineSection from '../Pages/Medicines/MedicineSection';
import { Link } from 'react-router-dom';

const Section = ({position, title, type}) => {

    const MiniSection = () => {
        switch (type) {
            case 'hospitals':
                return <HospitalSection title={'Hospitales cerca de ti'} data={hospitalData} slider={'cerca-de-ti'} />
            case 'medicines':
                return <MedicineSection title={'Aines'} data={medicineData} slider={'AINES'} />
            case 'equipment':
                return <MedicalEquipmentSection title={'Primeros Auxilios'} data={equipmentData} slider={'primeros-auxilios'} />
            default:
                return <div></div>
        }
    }

    const ImageSection = () => {
        switch (type) {
            case 'hospitals':
                return <img src={hospitalImage} alt='marker' className='h-56 m-2 rounded-md align-top object-cover flex-1'/>
            case 'medicines':
                return <img src={medicineImaghe} alt='marker' className='h-56 m-2 rounded-md align-top object-cover flex-1'/>
            case 'equipment':
                return <img src={equipomedico} alt='marker' className='h-56 m-2 rounded-md align-top object-cover flex-1'/>
            default:
                return <img src={censo} alt='marker' className='h-56 m-2 rounded-md align-top object-cover flex-1'/>
        }
    }

    const DirectionsSection = () => {
        switch (type) {
            case 'hospitals':
                return '/Hospitales'
            case 'medicines':
                return '/Medicinas'
            case 'equipment':
                return '/EquipoMedico'
            default:
                return '/Censo'
        }
    }
    
    return (
        <div className='container align-center' id="homeContainer">
            <div className='bg-white flex rounded-t-md'>
                <div className='bg-white rounded-md text-black text-xl font-bold p-2 m-2 flex-1'>{title}</div>
            </div>
            <div className={"bg-white flex items-start flex-row"+position}>
                <ImageSection/>
                <div className='bg-blue07 rounded-md text-white flex flex-1 flex-col justify-between h-56 m-2'>
                    <div className='flex-row p-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed enim ad minim veniam, quis nostrud exercitation ullamco labois aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    {/* <div className='flex-row'> */}
                        <Link to={DirectionsSection()} className="text-center text-sm p-3 m-2 font-medium text-white bg-blue03 rounded-lg border border-blue05 hover:bg-blue05 focus:ring-4 focus:outline-none focus:ring-blue09 transition-all hover:scale-105"><span>Buscar</span></Link>
                        {/* <button type="button" class="text-sm p-3 m-2 font-medium text-white bg-blue03 rounded-lg border border-blue05 hover:bg-blue05 focus:ring-4 focus:outline-none focus:ring-blue09 transition-all hover:scale-105"><span>Buscar</span></button> */}
                    {/* </div> */}
                </div>
                
            </div>
            {/* <div className='bg-white flex'>
                <div className='bg-blue01 text-white p-2 m-2 flex-1'>Hospitales cerca de ti</div>
            </div> */}
            <div className='bg-white flex rounded-b-md'>
                <div className='flex flex-col'>
                    
                    <MiniSection />
                </div>
            </div>
            
        </div>
    )
}

export default Section;