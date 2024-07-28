/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImg from "../assets/images/hero.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import SnapIcon from '../assets/images/snap.svg';
import GitIcon from '../assets/images/git.svg';
import InstaIcon from '../assets/images/insta.svg';
import WebIcon from '../assets/images/webs.svg';
import LinkedIcon from '../assets/images/linked.svg';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

export default function MedicineSearch() {
    const [medicineName, setMedicineName] = useState('');
    const [dosage, setDosage] = useState('');
    const [units, setUnits] = useState('');
    const [filteredMedicines, setFilteredMedicines] = useState([]);
    const searchResultsRef = useRef(null);
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext); // Get isLoggedIn from AuthContext

    const handleSearchSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/medicines?name=${medicineName}&dosage=${dosage}&units=${units}`, {
                method: 'GET',
                credentials: 'include'
            });

            if (response.ok) {
                const data = await response.json();
                setFilteredMedicines(data);

                if (searchResultsRef.current) {
                    searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                console.error('Error fetching medicines:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    };

    const handleBuyNowClick = async (medicine) => {
        if (isLoggedIn) {
            navigate('/dashboard/transactions/add', { state: { medicine } });
        } else {
            navigate('/login');
        }
    };

    const clearSearch = () => {
        setMedicineName('');
        setDosage('');
        setUnits('');
        setFilteredMedicines([]);
    };

    return (
        <main>
            <div
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                }}
                className="w-full h-screen font-workSans relative flex flex-col justify-center items-center"
            >
                <div className="absolute text-white z-0 opacity-65 bg-black w-full h-screen top-0 left-0"></div>
                <NavBar />
                {/* Hero Section  */}
                <section className="w-full text-center flex flex-col justify-center items-center h-full relative z-10">
                    <div className="w-[690px] mx-auto">
                        <h1 className="text-white text-[20px] tracking-normal -mb-6">Home / Medicines</h1>
                        <p className="text-white font-bold text-6xl tracking-wide mt-6">Search for Medicines</p>
                        <div className="flex justify-center mt-8 p-5">
                            <button className="bg-green-600 border-2 border-green-600 tracking-wider text-white text-xl font-workSans rounded w-fit flex items-center justify-center py-2 px-5 hover:bg-transparent hover:border-2 hover:border-green-600 transition-all ease-in btn-info font-normal">Get Started</button>
                            <p className="tracking-wider text-white font-workSans text-base w-fit flex items-center justify-center py-4 px-5 btn-info ml-4 cursor-pointer font-medium font-workSans">Learn More</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* Search Section */}
            <section className="mt-8 px-4 h-screen flex justify-center items-center">
                <div className="w-[80%] h-[80%] bg-green-100 rounded-md flex justify-center items-center text-center -mt-14">
                    <div className="flex flex-row w-full h-full">
                        <div className="flex-1 flex-col justify-center items-center p-8 pt-[150px]">
                            <h2 className="text-4xl font-bold mb-4 text-left text-green-950">Search Medicines</h2>
                            <p className="text-md mb-4 text-left text-black">Effortlessly find the medications you need with our comprehensive search. Whether you're
                                looking for prescription drugs or specific medical supplies, our user-friendly interface simplifies
                                the process. Simply enter the name of the medication, dosage information, or specific units, and let
                                our robust search engine do the rest. Our goal is to make your healthcare journey smoother by providing
                                quick access to accurate information.</p>
                            {/* Icons  */}
                            <div className="flex -mx-2">
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="GitHub">
                                    <img src={GitIcon} alt="GitHub Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                                </a>
                                <a href="https://devdigitals.org/" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Portfolio">
                                    <img src={WebIcon} alt="Portfolio Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                                </a>
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="LinkedIn">
                                    <img src={LinkedIcon} alt="LinkedIn Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                                </a>
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Snapchat">
                                    <img src={SnapIcon} alt="Snapchat Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                                </a>
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Instagram">
                                    <img src={InstaIcon} alt="Instagram Icon" className='object-contain w-full h-full hover:scale-110 transition-all 0.3s ease-in' />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 flex-col justify-center items-center p-8 bg-white rounded-md shadow-md pt-[150px]">
                            <div className="flex flex-col space-y-4 mb-4">
                                <input type="text" placeholder="Enter medicine name..." value={medicineName} onChange={(e) => setMedicineName(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-green-500" />
                                <input type="text" placeholder="Enter dosage..." value={dosage} onChange={(e) => setDosage(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-green-500" />
                                <input type="text" placeholder="Enter units..." value={units} onChange={(e) => setUnits(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-green-500" />
                            </div>
                            <div className="flex items-center space-x-4">
                                <button onClick={handleSearchSubmit} className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition-all 0.3s ease-in">Search</button>
                                <button onClick={clearSearch} className="bg-green-700 text-white px-8 py-2 rounded-md hover:bg-green-800 focus:outline-none transition-all 0.3s ease-in">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Display Section */}
            <div ref={searchResultsRef}>
                {filteredMedicines.length > 0 && (
                    <section className="mt-8 px-4 h-full w-full bg-white py-6">
                        <h2 className="text-2xl font-bold mb-4">Display Medicines</h2>
                        <ul className="space-y-4 mb-6">
                            {filteredMedicines.map(medicine => (
                                <li key={medicine.id} className="border border-gray-200 p-4 rounded-md shadow-md">
                                    <h3 className="text-xl font-bold bg-green-200 py-2 px-2 rounded-md">{medicine.medicine}</h3>
                                    <p className="mt-2 text-lg"><span className="font-bold text-lg">Dosage:</span> {medicine.dosage}</p>
                                    <p className="mt-2 text-lg"><span className="font-bold text-lg">Units:</span> {medicine.units}</p>
                                    <p className="mt-2 text-lg"><span className="font-bold text-lg">Price:</span> ${medicine.price}</p>
                                    <button onClick={() => handleBuyNowClick(medicine)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4 transition-all 0.3s ease-in">Buy Now</button>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
            {/* Footer Section */}
            <Footer />
            {/* GoToTop Section */}
            <GoToTop />
        </main>
    );
}
