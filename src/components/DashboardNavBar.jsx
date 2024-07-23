import { Link } from "react-router-dom";
import { useState } from "react";

function DashboardNavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <nav className="w-fit text-[#fff] z-50 relative py-0 px-10 font-workSans bg-transparent">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-6 justify-center items-center">
                    <Link to="/" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Home</Link>
                    <Link to="/medicine-search" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Buy Medicine</Link>
                    <Link to="/contact" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Contact</Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/"><button onClick={() => setIsLoggedIn(false)} className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Logout</button></Link>
                        </>
                    ) : (
                        <Link to="/login" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Login / Register</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default DashboardNavBar;
