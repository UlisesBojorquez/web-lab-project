import React, { useState } from 'react'
import { patientsData } from '../../data/patientsData'

const Census = () => {

  const [displayDetails, setDisplayDetails] = useState(false);
  const [details, setDetails] = useState({})
  const [searchValue, setSearchValue] = useState('');

  const searchAction = () => {
    console.log('Buscar paciente con '+ searchValue)
    
  }

  const onPressEnter = (e) => {
    if(e.key === 'Enter') searchAction()
  }

  return (
    <div>
      <div className="overflow-x-auto overflow-y-hidden relative shadow-md sm:rounded-lg m-10 mt-32">
          
        <div className='flex flex-col sm:flex-row justify-between items-start gap-2  bg-white p-5'>
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
        <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>

                    <th scope="col" className="py-3 px-6">
                        Nombre Paciente
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Hospital
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Diagnostico
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Estatus
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Detalles
                    </th>
                </tr>
            </thead>
            <tbody>
              {
                patientsData.map((patient, key) => (
                  <tr className="bg-white border-b hover:bg-gray-50" key={key}>
                    
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 "> {patient.name} </th>
                    <td className="py-4 px-6">{patient.hospital}</td>
                    <td className="py-4 px-6">{patient.diagnosis}</td>
                    <td className="py-4 px-6">{patient.status}</td>
                    <td className="py-4 px-6">
                      <a href="#" 
                      type="button" 
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => {
                        setDisplayDetails(true)
                        setDetails(patient)
                      }}
                      >Mostrar</a>

                    </td>
                  </tr>
                ))
              }
                
                
            </tbody>
        </table>
        <nav class="flex justify-between items-center p-5 bg-white" aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
          <ul class="inline-flex items-center -space-x-px">
              <li>
                  <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Previous</span>
                      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                  <a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
              </li>
              <li>
                  <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                      <span class="sr-only">Next</span>
                      <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  </a>
              </li>
          </ul>
        </nav>
        {/* DETAILS */}
        <div  class={`${displayDetails ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full bg-gray-400/40`}>
          <div className='flex justify-center items-center mt-10 md:mt-40 p-10 md:p-0'>

            <div class="relative w-full max-w-2xl md:h-auto bg-white rounded-lg shadow">
              <div class="flex justify-between items-start p-4 rounded-t border-b">
                <h3 class="text-xl font-semibold text-gray-900">
                  Detalles del paciente
                </h3>
                <button 
                type="button" 
                onClick={() => {
                  setDisplayDetails(false)
                  setDetails({})
                }}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
              </div>
              <div className='p-4 flex flex-col justify-start items-start gap-8'>
                <div className='flex flex-row justify-between w-full'>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Nombre completo</h4>
                    <p className='text-base'> {details.name} </p>
                  </div>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Edad</h4>
                    <p className='text-base'> {details.age} </p>
                  </div>
                </div>
                <div className='flex flex-row justify-between w-full'>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Genero</h4>
                    <p className='text-base'> {details.gender} </p>
                  </div>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Tipo de sangre</h4>
                    <p className='text-base'> {details.bloodType} </p>
                  </div>
                </div>
                <div className='flex flex-row justify-between w-full'>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Hospital</h4>
                    <p className='text-base'> {details.hospital} </p>
                  </div>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Diagnostico</h4>
                    <p className='text-base'> {details.diagnosis} </p>
                  </div>
                </div>
                <div className='flex flex-row justify-between w-full'>
                  <div className='w-2/4'>
                    <h4 className='text-lg font-medium'>Estatus</h4>
                    <p className='text-base'> {details.status} </p>
                  </div>
                </div>
              </div>
                  
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Census