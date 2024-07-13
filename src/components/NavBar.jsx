import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-head.png';

export default function NavBar() {
    return (
        <nav className="w-full text-[#fff] z-50 relative py-0 px-20 font-workSans flex justify-between items-center bg-transparent">
            <div className="flex cursor-pointer items-center w-80">
                <Link to="/"><img src={Logo} alt="Infinity Shadow" className='w-full' /></Link>
            </div>
            <ul className="flex uppercase gap-8">
                <li className="tracking-wider cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="tracking-wider cursor-pointer">
                    <Link to="/dashboard">DashBoard</Link>
                </li>
                <li className="tracking-wider cursor-pointer">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
