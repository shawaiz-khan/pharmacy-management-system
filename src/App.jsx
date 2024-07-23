import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MedicineSearch from './pages/MedicineSearch';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UserDashBoard from './pages/UserDashboard';
import BuyMedicine from './pages/BuyMedicine';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/dashboard/*" element={<UserDashBoard />} />
        <Route path="/buy-medicine/*" element={<UserDashBoard />} />
        <Route path='/medicine-search' element={<MedicineSearch />} />
        <Route path='/buy-medicine' element={<BuyMedicine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
