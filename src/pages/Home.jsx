import NavBar from "../components/NavBar";
import HeroImg from "../assets/images/hero.jpg";
import SalesOverview from "../components/SalesOverview";
import StockAlerts from "../components/StockAlerts";
import Transactions from "../components/Transactions";
import { allTransactions, salesOverview, stockAlerts } from "../assets/data/mockData";

export default function Home() {
    return (
        <div>
            <main className='w-full h-full'>
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
                    {/* Hero Section  */}
                    <section className="w-full text-center flex flex-col justify-center items-center h-full relative z-10">
                        <div className="w-[690px] mx-auto">
                            <h1 className="text-white text-[20px] tracking-normal -mb-6">Welcome To</h1>
                            <p className="text-white font-bold text-6xl tracking-wide mt-6">Pharmacy Management System</p>
                            <div className="flex justify-center mt-8">
                                <button className="bg-green-600 border-2 border-green-600 tracking-wider text-white font-workSans rounded-lg text-xl w-fit flex items-center justify-center py-2 px-5 hover:bg-transparent hover:border-2 hover:border-green-600 transition-all ease-in btn-info font-normal">Get Started</button>
                                <p className="bg-transparent tracking-wider text-white font-workSans rounded-lg text-base w-fit flex items-center justify-center py-4 px-5 btn-info ml-6 cursor-pointer hover:bg-green-600/80 border-2 border-green-600 font-medium transition-all 0.3s ease-in">Learn More</p>
                            </div>
                        </div>
                    </section>
                </div>
                {/* DashBoard Section  */}
                <section className="w-full h-full px-3 py-5">
                    <SalesOverview salesData={salesOverview} />
                    <StockAlerts stockData={stockAlerts} />
                    <Transactions transactionData={allTransactions} />
                </section>
            </main>
        </div>
    );
}