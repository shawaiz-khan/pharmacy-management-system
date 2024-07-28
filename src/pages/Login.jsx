import { useState, useContext } from 'react';
import BlackNavBar from "../components/BlackNavBar";
import GoToTop from "../components/GoToTop";
import LoginImg from "../assets/images/log.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });
            const result = await response.json();
            if (response.ok) {
                setIsLoggedIn(true);
                navigate('/dashboard');
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <main className="bg-green-500/20">
            <div className="w-full">
                <BlackNavBar />
            </div>
            <section className="border-red-500 min-h-screen flex items-center justify-center">
                <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
                    <div className="md:w-1/2 px-5 mr-4">
                        <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
                        <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
                        <form onSubmit={handleSubmit} className="mt-6">
                            {error && <p className="text-red-500">{error}</p>}
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-md bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none" autoFocus autoComplete="on" required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="6" className="w-full px-4 py-3 rounded-md bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none" required />
                            </div>
                            <button type="submit" className="w-full block transition-all 0.3s ease-in bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded px-4 py-3 mt-6">Log In</button>
                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-green-700 focus:text-green-700">Forgot Password?</a>
                            </div>
                        </form>
                        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
                            <hr className="border-gray-500" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-500" />
                        </div>
                        <button className="mb-5 bg-white hover:bg-green-200 border border-green-200 py-2 w-full rounded mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48">
                                <defs>
                                    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                </defs>
                                <clipPath id="b">
                                    <use xlinkHref="#a" overflow="visible" />
                                </clipPath>
                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                            </svg>
                            <span className="ml-4">Login with Google</span>
                        </button>
                        <div className="text-sm flex justify-between items-center mt-3">
                            <p>If you do not have an account...</p>
                            <Link to="/register"><button className="py-2 px-5 ml-3 bg-white border rounded hover:scale-110 hover:bg-green-500 hover:text-white duration-300 border-green-400">Register</button></Link>
                        </div>
                    </div>
                    <div className="w-1/2 md:block hidden pt-8 pb-8">
                        <img src={LoginImg} className="rounded-2xl" alt="Login Image" />
                    </div>
                </div>
            </section>
            <GoToTop />
        </main>
    );
}
