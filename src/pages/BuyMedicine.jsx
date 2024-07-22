/* eslint-disable react/no-unescaped-entities */
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HeroImg from "../assets/images/hero.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import SnapIcon from '../assets/images/snap.svg';
import GitIcon from '../assets/images/git.svg';
import InstaIcon from '../assets/images/insta.svg';
import WebIcon from '../assets/images/webs.svg';
import LinkedIcon from '../assets/images/linked.svg';

const BuyMedicine = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const medicine = location.state?.medicine || {};

    const [quantity, setQuantity] = useState(1);

    const handlePurchase = () => {
        if (quantity > 0) {
            const totalPrice = (medicine.price || 0) * quantity; // Handle case where price might be undefined
            alert(`Purchased ${quantity} units of ${medicine.medicine || 'Medicine'} for $${totalPrice.toFixed(2)}.`);
            // Logic to save the purchase details
            navigate('/dashboard'); // Redirect after purchase
        }
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
                {/* Hero Section */}
                <section className="w-full text-center flex flex-col justify-center items-center h-full relative z-10">
                    <div className="w-[690px] mx-auto">
                        <h1 className="text-white text-[20px] tracking-normal -mb-6">Home / Medicines</h1>
                        <p className="text-white font-bold text-6xl tracking-wide mt-6">Search for Medicines</p>
                        <div className="flex justify-center mt-8 p-5">
                            <button className="bg-green-600 border-2 border-green-600 tracking-wider text-white text-xl font-workSans rounded w-fit flex items-center justify-center py-2 px-5 hover:bg-transparent hover:border-green-600 transition-all ease-in">Get Started</button>
                            <p className="tracking-wider text-white font-workSans text-base w-fit flex items-center justify-center py-4 px-5 ml-4 cursor-pointer">Learn More</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* Search Section */}
            <section className="mt-8 px-4 h-screen flex justify-center items-center">
                <div className="w-[80%] h-[80%] bg-green-100 rounded-md flex -mt-14">
                    <div className="flex flex-row w-full h-full">
                        <div className="flex-1 flex-col justify-center items-center p-8 pt-[150px]">
                            <h2 className="text-4xl font-bold mb-4 text-left text-green-950">Purchase Medicine</h2>
                            <p className="text-md mb-4 text-left text-black">
                                Effortlessly find the medications you need with our comprehensive search. Whether you're
                                looking for prescription drugs or specific medical supplies, our user-friendly interface simplifies
                                the process. Simply enter the name of the medication, dosage information, or specific units, and let
                                our robust search engine do the rest. Our goal is to make your healthcare journey smoother by providing
                                quick access to accurate information.
                            </p>
                            {/* Icons */}
                            <div className="flex -mx-2">
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="GitHub">
                                    <img src={GitIcon} alt="GitHub Icon" className='object-contain w-full h-full hover:scale-110 transition-transform duration-300' />
                                </a>
                                <a href="https://devdigitals.org/" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Portfolio">
                                    <img src={WebIcon} alt="Portfolio Icon" className='object-contain w-full h-full hover:scale-110 transition-transform duration-300' />
                                </a>
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="LinkedIn">
                                    <img src={LinkedIcon} alt="LinkedIn Icon" className='object-contain w-full h-full hover:scale-110 transition-transform duration-300' />
                                </a>
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Snapchat">
                                    <img src={SnapIcon} alt="Snapchat Icon" className='object-contain w-full h-full hover:scale-110 transition-transform duration-300' />
                                </a>
                                <a href="#" className="mx-2 text-black transition-colors duration-300 w-10 h-10 flex items-center justify-center" aria-label="Instagram">
                                    <img src={InstaIcon} alt="Instagram Icon" className='object-contain w-full h-full hover:scale-110 transition-transform duration-300' />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 flex-col justify-center items-center p-8 bg-white rounded-md shadow-md pt-[150px]">
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold">{medicine.medicine || 'Medicine Name'}</h2>
                                <p><strong>Dosage:</strong> {medicine.dosage || 'N/A'}</p>
                                <p><strong>Price:</strong> ${medicine.price ? medicine.price.toFixed(2) : 'N/A'}</p>
                                <p><strong>Description:</strong> {medicine.description || 'No description available'}</p>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="quantity" className="block mb-2 font-semibold">Quantity:</label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>

                            <button
                                onClick={handlePurchase}
                                className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            >
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <section className="w-screen h-full px-5 py-0 flex flex-col gap-5 items-center bg-white">
                <div className="w-screen">
                    <Footer />
                </div>
            </section>
            {/* Go To Top Component */}
            <GoToTop />
        </main>
    );
};

export default BuyMedicine;
