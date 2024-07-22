import { useState } from 'react';
import { medicines } from '../assets/data/medicinesData';

const AddMedicines = () => {
    const [medicinesList, setMedicinesList] = useState(medicines.map(med => med.medicine));
    const [newMedicine, setNewMedicine] = useState('');

    const handleAddMedicine = (e) => {
        e.preventDefault();
        if (newMedicine.trim() && !medicinesList.includes(newMedicine.trim())) {
            setMedicinesList([...medicinesList, newMedicine.trim()]);
            setNewMedicine('');
        }
    };

    const handleDeleteMedicine = (medicineToDelete) => {
        setMedicinesList(medicinesList.filter(medicine => medicine !== medicineToDelete));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Medicines</h2>

            <form onSubmit={handleAddMedicine} className="mb-6">
                <div className="flex flex-col mb-4">
                    <label htmlFor="medicine" className="mb-2 font-semibold">Add New Medicine:</label>
                    <input id="medicine" type="text" value={newMedicine} onChange={(e) => setNewMedicine(e.target.value)} placeholder="Enter medicine name" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">Add Medicine</button>
            </form>

            <ul className="list-disc list-inside text-gray-700">
                {medicinesList.length > 0 ? (
                    medicinesList.map((medicine, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                            {medicine}
                            <button
                                onClick={() => handleDeleteMedicine(medicine)}
                                className="ml-4 py-1 px-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))
                ) : (
                    <p>No medicines available.</p>
                )}
            </ul>
        </div>
    );
};

export default AddMedicines;
