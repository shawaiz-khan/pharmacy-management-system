import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import About from './pages/About';
import MedicineSearch from './pages/MedicineSearch';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientRecords from './pages/PatientRecords';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/medicine-search' element={<MedicineSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient-records" element={<PatientRecords />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
