import { Navbar, Footer, Home, Census, Hospital, Hospitals, MedicalEquipment, Medicines } from './Components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='w-full h-[100vh] font-Poppins flex flex-col justify-start' >


      {/* Header / Navbar */}
      <Navbar />

      {/* Content */}
      <section>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Hospitales' element={<Hospitals/>} >
              <Route path=':hospitalId' element={<Hospital/>} ></Route>
            </Route>
            <Route path='/Medicinas' element={<Medicines/>} />
            <Route path='/EquipoMedico' element={<MedicalEquipment/>} />
            <Route path='/Censo' element={<Census/>} />
          </Routes>
        </BrowserRouter>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
