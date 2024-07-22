import { Link } from 'react-router-dom';
import Logo from '../assets/logos/logo-5.png';
import { useState } from 'react';

export default function BlackNavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="w-full text-[#fff] z-50 relative py-0 px-20 font-workSans flex justify-between items-center bg-transparent">
            <div className="flex cursor-pointer items-center w-[350px] p-8">
                <Link to="/"><img src={Logo} alt="Infinity Shadow" className='w-full' /></Link>
            </div>
            <div className="container mx-auto flex justify-end items-end">
                <div className="flex space-x-6 justify-end text-end">
                    <Link to="/" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Home</Link>
                    <Link to="/medicine-search" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Medicine Search</Link>
                    <Link to="/buy-medicine" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Buy Medicine</Link>
                    <Link to="/contact" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Contact</Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard/overview" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Dashboard</Link>
                            <button onClick={() => setIsLoggedIn(false)} className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Login / Register</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
