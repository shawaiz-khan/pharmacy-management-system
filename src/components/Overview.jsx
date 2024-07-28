/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp, faCircleCheck, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function Overview() {
    const [salesData, setSalesData] = useState({});
    const [stockAlerts, setStockAlerts] = useState([]);
    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        // Fetch sales data from the backend
        const fetchSalesData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/sales');
                const data = await response.json();
                setSalesData(data);
            } catch (error) {
                console.error('Failed to fetch sales data:', error);
            }
        };

        // Fetch stock alerts from the backend
        const fetchStockAlerts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/stockAlerts');
                const data = await response.json();
                setStockAlerts(data);
            } catch (error) {
                console.error('Failed to fetch stock alerts:', error);
            }
        };

        // Fetch transaction data from the backend
        const fetchTransactionData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/transactions');
                const data = await response.json();
                console.log('Fetched transaction data:', data); // Log the fetched transaction data
                setTransactionData(data);
            } catch (error) {
                console.error('Failed to fetch transaction data:', error);
            }
        };

        fetchSalesData();
        fetchStockAlerts();
        fetchTransactionData();
    }, []);

    const totalTransaction = () => {
        const total = transactionData.reduce((acc, transaction) => acc + transaction.price, 0);
        return total.toLocaleString();
    };

    const totalPatientCount = () => {
        // Log the transactionData to debug patient names
        console.log('Transaction data:', transactionData);

        // Extract unique patient names
        const uniquePatients = new Set(transactionData.map(transaction => transaction.patient_name));
        console.log('Unique patients:', uniquePatients);

        return uniquePatients.size;
    };

    return (
        <main>
            <div className="flex flex-row gap-5 flex-wrap">
                <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-600 font-bold px-6 py-4 rounded-t-lg">
                        Total Sales
                        <FontAwesomeIcon icon={faArrowTrendUp} className="ml-2" />
                    </div>
                    <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                        <h1 className="text-green-900 text-2xl font-bold">Total Transactions: </h1>
                        <p className="text-green-500 font-bold text-2xl">{salesData.totalTransactions}</p>
                    </div>
                    <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                        <h1 className="text-green-900 text-2xl font-bold">Total Sales: </h1>
                        <p className="text-green-500 font-bold text-2xl">${salesData.totalSales}</p>
                    </div>
                </div>
                {stockAlerts.map((stock, id) => (
                    <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                        <div className="text-[27px] text-white bg-red-700 font-bold px-6 py-4 rounded-t-lg">
                            Low Stock Alert
                            <FontAwesomeIcon icon={faArrowTrendDown} className="ml-2" />
                        </div>
                        <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                            <h1 className="text-red-900 text-2xl font-bold">Medicine: </h1>
                            <p className="text-red-500 font-bold text-2xl">{stock.name}</p>
                        </div>
                        <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                            <h1 className="text-red-900 text-2xl font-bold">Remaining Stock: </h1>
                            <p className="text-red-500 font-bold text-2xl">{stock.quantity}</p>
                        </div>
                    </div>
                ))}
                <div className="bg-white rounded-lg shadow-md mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-600 font-bold px-6 py-4 rounded-t-lg">Trends<FontAwesomeIcon icon={faCircleCheck} className="ml-2" /></div>
                    <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                        <h1 className="text-green-900 text-2xl font-bold">Medication: </h1>
                        <p className="text-green-500 font-bold text-2xl">Preventive</p>
                    </div>
                    <div className="px-5 py-6">
                        <p>Recent data shows an increase in preventive medication usage. We're adapting by expanding our offerings to match the growing demand.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5 flex-wrap">
                <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-800 font-bold px-6 py-4 rounded-t-lg">Total Transactions</div>
                    <div className="text-lg px-5 pt-6 pb-6 flex w-fit h-fit gap-2">
                        <p className="text-green-900 text-2xl font-bold">$</p>
                        <p className="text-green-500 text-2xl font-bold">{totalTransaction()}</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-800 font-bold px-6 py-4 rounded-t-lg">Total Patients</div>
                    <div className="text-lg px-5 pt-6 pb-6 flex w-fit h-fit gap-2">
                        <p className="text-2xl font-bold"><FontAwesomeIcon icon={faPeopleGroup} className="text-green-900" /></p>
                        <p className="text-green-500 text-2xl font-bold">{totalPatientCount()}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Overview;
