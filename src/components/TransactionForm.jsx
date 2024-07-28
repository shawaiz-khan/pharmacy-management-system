/* eslint-disable react/no-unescaped-entities */
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TransactionForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const medicine = location.state?.medicine || {};

    const [medicineName, setMedicineName] = useState(medicine.medicine || '');
    const [quantity, setQuantity] = useState(1);
    const [patientName, setPatientName] = useState('');
    const [patientID, setPatientID] = useState('');
    const [doctorName, setDoctorName] = useState('');

    const totalPrice = (medicine.price || 0) * quantity;

    const handlePurchase = async () => {
        if (quantity > 0 && patientName && patientID && doctorName && medicineName) {
            const transactionData = {
                medicine_name: medicineName,
                quantity,
                price: totalPrice,
                date: new Date().toISOString().split('T')[0],
                patient_name: patientName,
                patient_id: patientID,
                doctor_name: doctorName,
            };

            // Debug logs
            console.log('Transaction Data:', transactionData);

            try {
                const response = await fetch('http://localhost:3000/api/transactions/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(transactionData)
                });

                if (response.ok) {
                    alert(`Purchased ${quantity} units of ${medicineName} for $${totalPrice}.`);
                    navigate('/dashboard/overview');
                } else {
                    console.error('Error creating transaction:', response.statusText);
                }
            } catch (error) {
                console.error('Error creating transaction:', error);
            }
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <main className="bg-gray-100 min-h-screen flex flex-col items-center mt-10">
            <section className="mt-8 px-4 w-full flex justify-center items-center">
                <div className="w-[80%] h-[80%] bg-green-100 rounded-md flex -mt-14">
                    <div className="flex flex-row w-full h-full">
                        <div className="flex-1 flex-col justify-center items-center p-8 bg-white rounded-md shadow-md pt-[50px]">
                            <div className="mb-6">
                                <label htmlFor="medicineName" className="block mb-2 font-semibold">Medicine Name:</label>
                                <input 
                                    id="medicineName" 
                                    type="text" 
                                    value={medicineName} 
                                    onChange={(e) => setMedicineName(e.target.value)} 
                                    className="border border-gray-300 p-2 rounded-lg w-full" 
                                    readOnly 
                                />
                            </div>
                            <div className="mb-6">
                                <p><strong>Dosage:</strong> {medicine.dosage || 'N/A'}</p>
                                <p><strong>Price:</strong> ${medicine.price ? medicine.price : 'N/A'}</p>
                                <p><strong>Description:</strong> {medicine.description || 'No description available'}</p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="quantity" className="block mb-2 font-semibold">Quantity:</label>
                                <input 
                                    id="quantity" 
                                    type="number" 
                                    min="1" 
                                    value={quantity} 
                                    onChange={(e) => setQuantity(parseInt(e.target.value))} 
                                    className="border border-gray-300 p-2 rounded-lg w-full" 
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="patientName" className="block mb-2 font-semibold">Patient Name:</label>
                                <input 
                                    id="patientName" 
                                    type="text" 
                                    value={patientName} 
                                    onChange={(e) => setPatientName(e.target.value)} 
                                    className="border border-gray-300 p-2 rounded-lg w-full" 
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="patientID" className="block mb-2 font-semibold">Patient ID:</label>
                                <input 
                                    id="patientID" 
                                    type="text" 
                                    value={patientID} 
                                    onChange={(e) => setPatientID(e.target.value)} 
                                    className="border border-gray-300 p-2 rounded-lg w-full" 
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="doctorName" className="block mb-2 font-semibold">Doctor Name:</label>
                                <input 
                                    id="doctorName" 
                                    type="text" 
                                    value={doctorName} 
                                    onChange={(e) => setDoctorName(e.target.value)} 
                                    className="border border-gray-300 p-2 rounded-lg w-full" 
                                />
                            </div>
                            <div className="mb-6 flex flex-row w-[100%] justify-between">
                                <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
                                <button onClick={handlePurchase} className="py-2 px-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all 0.3s ease-in justify-end text-end">Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TransactionForm;
