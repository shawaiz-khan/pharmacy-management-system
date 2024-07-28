import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function DashboardNavBar() {
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
                navigate('/'); // Navigate to the home page after successful logout
            } else {
                console.error('Error logging out');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <nav className="w-fit text-[#fff] z-50 relative py-0 px-10 font-workSans bg-transparent">
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex space-x-6 justify-center items-center">
                    <Link to="/" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Home</Link>
                    <Link to="/medicine-search" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Buy Medicine</Link>
                    <Link to="/contact" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Contact</Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Logout</button>
                    ) : (
                        <Link to="/login" className="text-white hover:bg-green-700 hover:text-white-300 px-2 py-2 rounded-md transition duration-300 ease-in-out">Login / Register</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default DashboardNavBar;
