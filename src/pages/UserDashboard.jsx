import { Link, Route, Routes } from "react-router-dom";
import GoToTop from "../components/GoToTop";
import Logo from '../assets/logos/logo-5.png';
import DashboardNavBar from "../components/DashboardNavBar";
import Overview from "../components/Overview";
import Transactions from "../components/Transactions";
import TransactionDetails from "../components/TransactionDetails";
import NewMedicines from "../components/AddMedicines";

export default function UserDashBoard() {
    return (
        <main className="bg-gray-100 min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md flex flex-col">
                <div className="h-16 flex items-start justify-start bg-transparent text-white text-2xl font-bold">
                    <div className="flex cursor-pointer w-[250px] pr-8 pl-5 py-8 justify-start items-start">
                        <Link to="/"><img src={Logo} alt="Infinity Shadow" className='w-full' /></Link>
                    </div>
                </div>
                <ul className="mt-20 mb-6 flex-grow pt-5 pb-5">
                    <hr className="m-2" />
                    <li className="px-6 py-2 text-gray-700 cursor-pointer">
                        <Link to="/dashboard/overview" className="text-gray-700 hover:text-green-500">Overview</Link>
                    </li>
                    <hr className="m-2" />
                    <li className="px-6 py-2 text-gray-700 cursor-pointer">
                        <Link to="/dashboard/transactions" className="text-gray-700 hover:text-green-500">Transactions</Link>
                    </li>
                    <hr className="m-2" />
                    <li className="px-6 py-2 text-gray-700 cursor-pointer">
                        <Link to="/dashboard/new-medicines" className="text-gray-700 hover:text-green-500">Add Medicine</Link>
                    </li>
                    <hr className="m-2" />
                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <section className="flex-1">
                    {/* NavBar Section */}
                    <div className="nav-container w-full md:w-3/4 mx-auto">
                        <div className="bg-green-500 sticky h-16 w-full text-center flex justify-center items-center rounded-full mt-9 glassmorphism">
                            <DashboardNavBar />
                        </div>
                        <style>
                            {`
                                        .glassmorphism {
                                            background: green-700;
                                            border: 1px solid rgba(255, 255, 255, 0.2);
                                            backdrop-filter: blur(10px);
                                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                        }
                                `}
                        </style>
                    </div>
                    {/* Dashboard Section */}
                    <div className="flex">
                        <div className="flex-1 p-10">
                            <div className="container mx-auto">
                                <Routes>
                                    <Route path="overview" element={<Overview />} />
                                    <Route path="transactions" element={<Transactions />} />
                                    <Route path="transactions/:patientID" element={<TransactionDetails />} />
                                    <Route path="new-medicines" element={<NewMedicines />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Go To Top Component */}
            <GoToTop />
        </main>
    );
}
