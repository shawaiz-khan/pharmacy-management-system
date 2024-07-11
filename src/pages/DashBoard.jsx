import { allTransactions, salesOverview, stockAlerts } from "../assets/data/mockData";
import NavBar from "../components/NavBar";
import SalesOverview from "../components/SalesOverview";
import StockAlerts from "../components/StockAlerts";
import Transactions from "../components/Transactions";

export default function DashBoard() {
    return (
        <div>
            <NavBar />
            <h1 className="text-[40px] font-bold py-4 px-5">DashBoard</h1>
            <h1 className="text-[30px] font-bold bg-green-500 w-full text-white px-3 py-2 justify-center content-center text-center rounded-lg mb-5">Sales Overview</h1>
            <SalesOverview salesData={salesOverview} />
            <h1 className="text-[30px] font-bold bg-green-500 w-full text-white px-3 py-2 justify-center content-center text-center rounded-lg mb-5 mt-5">Stock Alerts</h1>
            <StockAlerts stockData={stockAlerts} />
            <h1 className="text-[30px] font-bold bg-green-500 w-full text-white px-3 py-2 justify-center content-center text-center rounded-lg mb-5 mt-5">Transactions</h1>
            <Transactions transactionData={allTransactions} />
        </div>
    )
}
