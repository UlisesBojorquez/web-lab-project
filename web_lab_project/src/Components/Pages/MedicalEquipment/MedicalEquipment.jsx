import React, { useState } from 'react';
import MedicalEquipmentSection from './MedicalEquipmentSection';
import { equipmentData } from '../../../data/equipmentData';
import MedicalEquipmentCard from './MedicalEquipmentCard';

const MedicalEquipment = () => {
  const [answer, setAnswer] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [equipments, setEquipments] = useState(equipmentData)

  const searchAction = () => {
    if(searchValue === ''){
      setEquipments(equipmentData)
      setAnswer(false)
    }else{
      var filtered = [], i = equipmentData.length;
      var reg = new RegExp("(.*)(" + searchValue.toLowerCase() + ")(.*)");
      while (i--) {
          if (reg.test(equipmentData[i]['name'].toLowerCase())) {
              filtered.push(equipmentData[i]);
              continue
          }
          if (reg.test(equipmentData[i]['category'].toLowerCase())) {
              filtered.push(equipmentData[i]);
              continue
          }
          if (reg.test(equipmentData[i]['description'].toLowerCase())) {
              filtered.push(equipmentData[i]);
              continue
          }
          if (reg.test(equipmentData[i]['ubication'].toLowerCase())) {
              filtered.push(equipmentData[i]);
              continue
          }
          if (reg.test(equipmentData[i]['direction'].toLowerCase())) {
              filtered.push(equipmentData[i]);
              continue
          }
      }
      setEquipments(filtered)
      setAnswer(true)
    }
  }

  const onPressEnter = (e) => {
    if(e.key === 'Enter') searchAction()
  }
  return (
    <div>
      {/* CONTENT */}
      <div className='mt-20 p-5 flex flex-col gap-10'>

        {/* SEARCH INPUT */}
        <div className='flex flex-col sm:flex-row justify-between items-start gap-2'>
          <div className="relative w-full sm:w-5/6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input 
            type="text" 
            id="search-input-medicines" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => onPressEnter(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue05 focus:border-blue05 block w-full pl-10 p-2.5 " placeholder="Buscar medicamento..." required />
          </div>
            
          <div className='w-full sm:w-1/6'>
            <button 
            type="button" 
            onClick={searchAction}
            className="w-full  p-2.5 text-sm font-medium text-white bg-blue07 rounded-lg border border-blue05 hover:bg-blue05 focus:ring-4 focus:outline-none focus:ring-blue09 transition-all hover:scale-105">
              <span >Buscar</span>
            </button>
          </div>
        </div>

        {/* RESULTS */}
        {
          answer ? 
          <div className='flex justify-start flex-wrap '>
            {/* <p>No se han encontrado resultados</p> */}
            {
              equipments.map((equipment) => {
                return <MedicalEquipmentCard medicine={equipment} />
              })
            }
          </div>
          :
          <div className='flex flex-col gap-4'>
            {/* <MedicalEquipmentSection title={'Prótesis'} data={equipmentData} slider={'protesis'} />
            <MedicalEquipmentSection title={'Odontológico'} data={equipmentData} slider={'odontologico'} />
            <MedicalEquipmentSection title={'Productos higiénicos'} data={equipmentData} slider={'higienicos'} />
            <MedicalEquipmentSection title={'Material quirúrgico y de curación'} data={equipmentData} slider={'quirurgico'} />
            <MedicalEquipmentSection title={'Articulos y aparatos Ortopédicos'} data={equipmentData} slider={'ortopedicos'} />
            <MedicalEquipmentSection title={'Nebulizadores'} data={equipmentData} slider={'nebulizadores'} />
            <MedicalEquipmentSection title={'Termómetros'} data={equipmentData} slider={'termometros'} /> */}
            <MedicalEquipmentSection title={'Articulos y aparatos Ortopédicos'} data={equipmentData} slider={'ortopedicos'} />
            <MedicalEquipmentSection title={'Primeros Auxilios'} data={equipmentData} slider={'primeros-auxilios'} />
          </div>
        }

      </div>
    </div>
  )
}

export default MedicalEquipment