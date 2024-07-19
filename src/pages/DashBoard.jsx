import { Link } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import { useState } from "react";
import Logo from '../assets/logos/logo-5.png';

const DashBoard = () => {
    return (
        <main className="bg-gray-100 min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md flex flex-col">
                <div className="h-16 flex items-start justify-start bg-transparent text-white text-2xl font-bold">
                    <div className="flex cursor-pointer w-[250px] pr-8 pl-5 py-8 justify-start items-start">
                        <Link to="/"><img src={Logo} alt="Infinity Shadow" className='w-full' /></Link>
                    </div>
                </div>
                <ul className="mt-6 flex-grow">
                    <li className="px-6 py-2 text-gray-700 hover:bg-blue-100">Overview</li>
                    <li className="px-6 py-2 text-gray-700 hover:bg-blue-100">Sales</li>
                    <li className="px-6 py-2 text-gray-700 hover:bg-blue-100">Patient Records</li>
                    <li className="px-6 py-2 text-gray-700 hover:bg-blue-100">Transactions</li>
                    <li className="px-6 py-2 text-gray-700 hover:bg-blue-100">Low Stock</li>
                    <li className="px-6 py-2 text-gray-700 hover:bg-blue-100">New Medicines</li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 flex flex-col">
                <section className="flex-1">
                    {/* NavBar Section */}
                    <div className="bg-green-500 h-16 w-3/4 mx-auto text-center flex justify-center items-center rounded-full my-5">
                        <DashboardNavBar />
                    </div>
                    <div className="min-h-screen p-10">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Sales</h2>
                                    <p className="text-gray-700">Total Sales: $10,000</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Patient Records</h2>
                                    <p className="text-gray-700">Total Patients: 120</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Transactions</h2>
                                    <p className="text-gray-700">Total Transactions: 300</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">Low Stock</h2>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Medicine A</li>
                                        <li>Medicine B</li>
                                        <li>Medicine C</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-semibold mb-4">New Medicines</h2>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Medicine X</li>
                                        <li>Medicine Y</li>
                                        <li>Medicine Z</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Go To Top Component */}
            <GoToTop />
        </main>
    );
};

export default DashBoard;


function DashboardNavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <nav className="w-full text-[#fff] z-50 relative py-0 px-20 font-workSans bg-transparent">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-6 justify-center items-center">
                    <Link to="/" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Home</Link>
                    <Link to="/medicine-search" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Medicine Search</Link>
                    <Link to="/contact" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Contact</Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Dashboard</Link>
                            <button onClick={() => setIsLoggedIn(false)} className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Login / Register</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
