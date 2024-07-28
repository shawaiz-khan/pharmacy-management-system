import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TransactionDetails = () => {
    const { patientID } = useParams();
    const navigate = useNavigate();
    const [patientTransactions, setPatientTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (patientID) {
            const fetchTransactions = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/transactions/${patientID}`);
                    if (response.ok) {
                        const data = await response.json();
                        setPatientTransactions(data);
                    } else {
                        console.error('Failed to fetch transactions:', response.statusText);
                    }
                } catch (error) {
                    console.error('Failed to fetch transactions:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchTransactions();
        }
    }, [patientID]);

    return (
        <div className="container mx-auto w-full">
            <h2 className="text-2xl font-bold mb-6">Transaction Details for Patient ID: {patientID}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : patientTransactions.length > 0 ? (
                <div className="flex flex-wrap w-full gap-5">
                    {patientTransactions.map((transaction, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md mb-4 hover:scale-110 transition-all 0.3s ease-in w-fit">
                            <div className="bg-green-700 text-white p-4 rounded-t-lg">
                                <h3 className="text-xl font-semibold">Transaction ID: {transaction.id}</h3>
                                <p className="text-gray-100 text-sm">Patient Name: {transaction.patient_name}</p>
                                <p className="text-gray-100 text-sm">Doctor: {transaction.doctor_name}</p>
                                <p className="text-gray-100 text-sm">Date: {new Date(transaction.date).toLocaleDateString()}</p>
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">Medicines:</h4>
                                <ul className="list-disc pl-5">
                                    {Array.isArray(transaction.medicine_name) ? (
                                        transaction.medicine_name.map((med, i) => (
                                            <li key={i} className="text-gray-700">
                                                {med} - {transaction.quantity} units at ${(transaction.price / transaction.quantity).toFixed(2)} each
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-gray-700">
                                            {transaction.medicine_name} - {transaction.quantity} units at ${(transaction.price / transaction.quantity).toFixed(2)} each
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
