import React, { useState } from 'react'
import { estados } from '../../../data/estados'
import { hospitalData } from '../../../data/hospitalData'
import HospitalCard from './HospitalCard'
import HospitalSection from './HospitalSection'

const Hospitals = () => {
  const [answer, setAnswer] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [hospitals, setHospitals] = useState(hospitalData)


  const searchAction = () => {    
    if(searchValue === ''){
      setHospitals(hospitalData)
      setAnswer(false)
    }else{
      var filtered = [], i = hospitalData.length;
      var reg = new RegExp("(.*)(" + searchValue.toLowerCase() + ")(.*)");
      while (i--) {
          if (reg.test(hospitalData[i]['name'].toLowerCase())) {
              filtered.push(hospitalData[i]);
              continue
          }
          if (reg.test(hospitalData[i]['ubication'].toLowerCase())) {
              filtered.push(hospitalData[i]);
              continue
          }
          if (reg.test(hospitalData[i]['direction'].toLowerCase())) {
              filtered.push(hospitalData[i]);
              continue
          }
      }
      setHospitals(filtered)
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
          <div className='w-full sm:w-5/6 flex flex-row justify-between gap-2'>
            <div className="relative w-4/6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input 
              type="text" 
              id="search-input" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => onPressEnter(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue05 focus:border-blue05 block w-full pl-10 p-2.5 " placeholder="Buscar hospital..." required />
            </div>
            <div className='w-2/6 '>
              <select defaultValue={''} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue05 focus:border-blue05 block w-full p-2.5">
                <option  value=''>Selecciona un estado</option>
                {
                  estados.map((estado, key) => (
                    <option value={estado.clave} key={key}>{estado.nombre}</option>
                  ))
                }
              </select>
            </div>
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
              hospitals.map((hospital) => {
                return <HospitalCard name={hospital.name} ubication={hospital.ubication} direction={hospital.direction} status={hospital.status} image={hospital.image} />
              })
            }
          </div>
          :
          <div className='flex flex-col gap-4'>
            <HospitalSection title={'Hospitales cerca de ti'} data={hospitalData} slider={'cerca-de-ti'} />
            <HospitalSection title={'Hospitales en Jalisco'} data={hospitalData} slider={'estado'} />
            <HospitalSection title={'Hospitales con disponibilidad'} data={hospitalData} slider={'disponible'} />
            <HospitalSection title={'Hospitales sin disponibilidad'} data={hospitalData} slider={'no-disponible'} />
          </div>
        }

      </div>
    </div>
  )
}

export default Hospitals