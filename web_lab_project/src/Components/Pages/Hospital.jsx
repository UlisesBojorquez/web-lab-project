import React  from 'react'
import { Tab } from '@headlessui/react'
import Medicines from './Medicines/Medicines'
import MedicalEquipment from './MedicalEquipment/MedicalEquipment'
import Census from './Census'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
    <div className="w-full pt-32 p-10">
      <Tab.Group manual defaultIndex={1}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 max-w-md">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Medicamentos
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Equipo Medico
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Pacientes
            </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
            <Tab.Panel
              className='w-full rounded-md bg-white p-4'
            >
              <Medicines />
            </Tab.Panel>
            <Tab.Panel
              className='w-full rounded-md bg-white p-4'
            >
              <MedicalEquipment/>
            </Tab.Panel>
            <Tab.Panel
              className='w-full rounded-md bg-white p-4'
            >
              <Census/>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
