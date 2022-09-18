import { Footer, Home, Census, Hospital, Hospitals, MedicalEquipment, Medicines, Navbar } from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='w-screen h-screen font-Poppins flex flex-col justify-start bg-blue10' >
      {/* Full Content */}
        <BrowserRouter>
          <div className='flex flex-col h-screen w-full overflow-x-hidden'>
            {/* Navbar */}
            <Navbar/>
            {/* Content */}
            <div className='mb-auto'>
              <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Hospitales' element={<Hospitals/>} />
              <Route path='/Hospitales/:hospitalId' element={<Hospital/>} ></Route>
              <Route path='/Medicinas' element={<Medicines/>} />
              <Route path='/EquipoMedico' element={<MedicalEquipment/>} />
              <Route path='/Censo' element={<Census/>} />
            </Routes>
            </div>  
            {/* Footer */}
            <Footer />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
