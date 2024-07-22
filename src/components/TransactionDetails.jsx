import { useParams, useNavigate } from 'react-router-dom';
import { transactionData } from '../assets/data/transactionData';

const TransactionDetails = () => {
    const { patientID } = useParams();
    const navigate = useNavigate();

    const patientTransactions = transactionData.filter(transaction => transaction.patientID === patientID);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Transaction Details for Patient ID: {patientID}</h2>
            {patientTransactions.length > 0 ? (
                <div className="flex flex-row flex-wrap gap-5">
                    {patientTransactions.map((transaction, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md mb-4 flex-1">
                            <div className="bg-green-700 text-white p-4 rounded-t-lg">
                                <h3 className="text-xl font-semibold">Transaction ID: {transaction.id}</h3>
                                <p className="text-gray-100 text-sm">Patient Name: {transaction.patientName}</p>
                                <p className="text-gray-100 text-sm">Doctor: {transaction.doctorName}</p>
                                <p className="text-gray-100 text-sm">Date: {new Date(transaction.date).toLocaleDateString()}</p>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">Medicines:</h4>
                                <ul className="list-disc pl-5">
                                    {Array.isArray(transaction.medicineName) ? (
                                        transaction.medicineName.map((med, i) => (
                                            <li key={i} className="text-gray-700">
                                                {med} - {transaction.quantity} units at ${transaction.price.toFixed(2)} each
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-gray-700">
                                            {transaction.medicineName} - {transaction.quantity} units at ${transaction.price.toFixed(2)} each
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No transactions found for Patient ID: {patientID}</p>
            )}
            <div className="mt-6">
                <button onClick={() => navigate(-1)} className="py-2 px-8 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all 0.3s ease-in">Back</button>
            </div>
        </div>
    );
};

export default TransactionDetails;
