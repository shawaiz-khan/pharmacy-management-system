/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transactionData } from '../assets/data/transactionData';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function TransactionList() {
    const patientTotals = transactionData.reduce((acc, transaction) => {
        if (!acc[transaction.patientID]) {
            acc[transaction.patientID] = {
                total: 0,
                patientName: transaction.patientName,
                transactions: []
            };
        }
        acc[transaction.patientID].total += transaction.quantity * transaction.price;
        acc[transaction.patientID].transactions.push({
            medicineName: transaction.medicineName,
            quantity: transaction.quantity,
            price: transaction.price,
            patientID: transaction.patientID
        });
        return acc;
    }, {});

    return (
        <div className="flex flex-row flex-wrap gap-5 w-full justify-center items-center">
            {Object.entries(patientTotals).map(([patientID, { total, patientName, transactions }]) => (
                <div key={patientID} className="bg-white rounded-lg shadow-lg mt-10 w-[270px] hover:scale-110 transition-all 0.3s ease-in">
                    <div className="bg-green-700 rounded-t-lg w-full p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{patientName}</h3>
                        <p className="text-gray-100 text-sm">Patient ID: {patientID}</p>
                    </div>
                    <div className="text-lg px-5 pt-6 pb-3 flex w-fit h-fit gap-2">
                        <p className="text-gray-700 text-lg font-bold">Total Spending: </p>
                        <p className="text-green-500 text-lg font-bold">${total.toLocaleString()}</p>
                    </div>
                    <div className='text-sm px-5 pt-0 pb-3 w-full h-fit gap-2 font-semibold text-end justify-end flex text-gray-600'>
                        <Link to={`/dashboard/transactions/${patientID}`}>
                            <button>Read More <FontAwesomeIcon icon={faArrowRight} /></button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}