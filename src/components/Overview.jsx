/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function Overview() {
    const [salesData, setSalesData] = useState({});
    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        // Fetch sales data from the backend
        const fetchSalesData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/sales');
                const data = await response.json();
                console.log('Sales data:', data);
                setSalesData(data);
            } catch (error) {
                console.error('Failed to fetch sales data:', error);
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
        fetchTransactionData();
    }, []);

    useEffect(() => {
        console.log('Sales data state updated:', salesData); // Log state update
    }, [salesData]);

    const totalTransaction = () => {
        const total = transactionData.reduce((acc, transaction) => acc + parseFloat(transaction.price), 0);
        return total.toLocaleString();
    };

    const totalPatientCount = () => {
        // Extract unique patient names
        const uniquePatients = new Set(transactionData.map(transaction => transaction.patient_name));
        return uniquePatients.size;
    };

    return (
        <main className="w-full">
            <div className="h-full w-full mt-[5rem]">
                <div className="bg-white shadow-lg p-3 py-6 w-full text-center rounded-lg border-green-500 border">
                    <h1 className="text-3xl font-bold w-full text-center justify-center py-1 rounded-lg mb-4 text-green-600">Welcome to the Dashboard</h1>
                    <p>
                        Here, you can see all your important information in one place. Check your sales, patients,
                        and transactions quickly and easily. This dashboard is designed to help you stay on top of things
                        and make the best decisions for your business. Take a look around, and if you need any help, we're
                        here for you!
                    </p>
                </div>
                <div className="flex flex-row gap-5 flex-wrap">
                    <div className="flex flex-row gap-5 flex-wrap">
                        <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%]  flex-1">
                            <div className="text-[27px] text-white bg-green-800 font-bold pl-6 pr-8 py-4 rounded-t-lg">Total Transactions</div>
                            <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                                <p className="text-green-500 font-bold text-2xl"><FontAwesomeIcon icon={faCashRegister} className="mr-2 text-green-900" />{salesData.totalTransactions}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%]  flex-1">
                        <div className="text-[27px] text-white bg-green-800 font-bold px-6 py-4 rounded-t-lg">Total Sales</div>
                        <div className="text-lg px-5 pt-6 pb-6 flex w-fit h-fit gap-2">
                            <p className="text-green-900 text-2xl font-bold">$</p>
                            <p className="text-green-500 text-2xl font-bold">{totalTransaction()}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%]  flex-1">
                        <div className="text-[27px] text-white bg-green-800 font-bold px-6 py-4 rounded-t-lg">Total Patients</div>
                        <div className="text-lg px-5 pt-6 pb-6 flex w-fit h-fit gap-2">
                            <p className="text-2xl font-bold"><FontAwesomeIcon icon={faPeopleGroup} className="text-green-900" /></p>
                            <p className="text-green-500 text-2xl font-bold">{totalPatientCount()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Overview;
