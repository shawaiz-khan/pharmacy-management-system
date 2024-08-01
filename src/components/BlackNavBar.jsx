import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logos/logo-5.png';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function BlackNavBar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/auth/status', {
                    method: 'GET',
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsLoggedIn(data.isLoggedIn);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error('Error fetching login status:', error);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, [setIsLoggedIn]);

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });

            if (response.ok) {
                setIsLoggedIn(false);
                navigate('/');
            } else {
                console.error('Error logging out');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <nav className="w-full text-[#fff] z-50 relative py-0 px-20 font-workSans flex justify-between items-center bg-transparent">
            <div className="flex cursor-pointer items-center w-[350px] p-8">
                <Link to="/"><img src={Logo} alt="Infinity Shadow" className='w-full' /></Link>
            </div>
            <div className="container mx-auto flex justify-end items-end">
                <div className="flex space-x-6 justify-end text-end">
                    <Link to="/" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Home</Link>
                    <Link to="/medicine-search" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Buy Medicine</Link>
                    <Link to="/contact" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Contact</Link>
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard/overview" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Dashboard</Link>
                            <button onClick={handleLogout} className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="text-black hover:bg-green-700 hover:text-white px-2 py-2 rounded-md transition duration-300 ease-in-out">Login / Register</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
