import React, { useState } from 'react';
import MedicineSection from './MedicineSection';
import { medicineData } from '../../../data/medicinesData';
import MedicineCard from './MedicineCard';
const Medicines = () => {
  const [answer, setAnswer] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [medicines, setMedicines] = useState(medicineData)

  const searchAction = () => {
    if(searchValue === ''){
      setMedicines(medicineData)
      setAnswer(false)
    }else{
      var filtered = [], i = medicineData.length;
      var reg = new RegExp("(.*)(" + searchValue.toLowerCase() + ")(.*)");
      while (i--) {
          if (reg.test(medicineData[i]['name'].toLowerCase())) {
              filtered.push(medicineData[i]);
              continue
          }
          if (reg.test(medicineData[i]['category'].toLowerCase())) {
              filtered.push(medicineData[i]);
              continue
          }
          if (reg.test(medicineData[i]['ubication'].toLowerCase())) {
              filtered.push(medicineData[i]);
              continue
          }
          if (reg.test(medicineData[i]['direction'].toLowerCase())) {
              filtered.push(medicineData[i]);
              continue
          }
      }
      setMedicines(filtered)
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
              medicines.map((medicine) => {
                return <MedicineCard medicine={medicine} />
              })
            }
          </div>
          :
          <div className='flex flex-col gap-4'>
            {/* <MedicineSection title={'Analgésicos'} data={medicineData} slider={'analgesicos'} />
            <MedicineSection title={'Antiinflamatorios'} data={medicineData} slider={'antiinflamatorios'} />
            <MedicineSection title={'Antipiréticos'} data={medicineData} slider={'antipireticos'} />
            <MedicineSection title={'Laxantes y antidiarreicos'} data={medicineData} slider={'laxantes'} />
            <MedicineSection title={'Antibióticos'} data={medicineData} slider={'antibioticos'} />
            <MedicineSection title={'Antifúngicos'} data={medicineData} slider={'antifungicos'} />
            <MedicineSection title={'Antivirales'} data={medicineData} slider={'antivirales'} />
            <MedicineSection title={'Antitusivos y mucolíticos'} data={medicineData} slider={'antitusivos'} />
            <MedicineSection title={'Antiácidos'} data={medicineData} slider={'antiacidos'} />
            <MedicineSection title={'Antialérgicos'} data={medicineData} slider={'antialergicos'} /> */}
            <MedicineSection title={'Aines'} data={medicineData} slider={'AINES'} />
            <MedicineSection title={'Opioides'} data={medicineData} slider={'OPIOIDES'} />
            <MedicineSection title={'Antirreumaticos'} data={medicineData} slider={'ANTIRREUMATICO'} />
            <MedicineSection title={'Antiepilepticos'} data={medicineData} slider={'ANTIEPILEPTICOS'} />
            <MedicineSection title={'Aintibióticos Betalactamico'} data={medicineData} slider={'ANTIBIOTICO-BETALACTAMICO'} />
          </div>
        }

      </div>
    </div>
  )
}

export default Medicines