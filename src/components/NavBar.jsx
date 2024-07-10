import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo-head.png';

export default function NavBar() {
    return (
        <nav className="w-full text-[#fff] z-50 relative py-2 px-36 font-workSans flex justify-between items-center bg-black">
            <div className="flex cursor-pointer items-center w-80">
                <img src={Logo} alt="" className='w-full' />
            </div>
            <ul className="flex uppercase gap-8">
                <li className="tracking-wider cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}
