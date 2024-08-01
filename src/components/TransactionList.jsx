/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/transactions');
                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Failed to fetch transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    const patientTotals = transactions.reduce((acc, transaction) => {
        if (!acc[transaction.patient_id]) {
            acc[transaction.patient_id] = {
                total: 0,
                patient_name: transaction.patient_name,
                transactions: []
            };
        }
        acc[transaction.patient_id].total += transaction.price;
        acc[transaction.patient_id].transactions.push({
            medicine_name: transaction.medicine_name,
            quantity: transaction.quantity,
            price: transaction.price / transaction.quantity,
            patient_id: transaction.patient_id
        });
        return acc;
    }, {});

    return (
        <div className="flex flex-row flex-wrap gap-5 w-full justify-center items-center">
            {Object.entries(patientTotals).map(([patient_id, { total, patient_name, transactions }]) => (
                <div key={patient_id} className="bg-white rounded-lg shadow-lg mt-10 w-[270px] hover:scale-110 transition-all 0.3s ease-in">
                    <div className="bg-green-700 rounded-t-lg w-full p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{patient_name}</h3>
                        <p className="text-gray-100 text-sm">Patient ID: {patient_id}</p>
                    </div>
                    <div className="text-lg px-5 pt-6 pb-3 flex w-fit h-fit gap-2">
                        <p className="text-gray-700 text-lg font-bold">Total Spending: </p>
                        <p className="text-green-500 text-lg font-bold">${total.toFixed(2)}</p>
                    </div>
                    <div className='text-sm px-5 pt-0 pb-3 w-full h-fit gap-2 font-semibold text-end justify-end flex text-gray-600'>
                        <Link to={`/dashboard/transactions/${patient_id}`}>
                            <button>Read More <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
