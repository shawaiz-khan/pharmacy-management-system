import { useState, useEffect } from 'react';

const AddMedicines = () => {
    const [medicinesList, setMedicinesList] = useState([]);
    const [newMedicine, setNewMedicine] = useState('');

    useEffect(() => {
        // Fetch all medicines when the component mounts
        fetchMedicines();
    }, []);

    const fetchMedicines = async () => {
        try {
            const response = await fetch('http://localhost:3000/medicines');
            const data = await response.json();
            setMedicinesList(data.map(med => med.medicine));
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    };

    const handleAddMedicine = async (e) => {
        e.preventDefault();
        if (newMedicine.trim()) {
            try {
                const response = await fetch('http://localhost:3000/medicines', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        medicine: newMedicine.trim(),
                        usage: '', // Add other fields if needed
                        units: '',
                        category: '',
                        dosage: '',
                        price: 0,
                        manufacturer: '',
                        description: '',
                        categoryDescription: ''
                    })
                });
                if (response.ok) {
                    fetchMedicines(); // Refresh list after adding
                    setNewMedicine('');
                } else {
                    console.error('Failed to add medicine');
                }
            } catch (error) {
                console.error('Error adding medicine:', error);
            }
        }
    };

    const handleDeleteMedicine = async (medicineToDelete) => {
        try {
            const response = await fetch(`http://localhost:3000/medicines/${medicineToDelete.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchMedicines(); // Refresh list after deleting
            } else {
                console.error('Failed to delete medicine');
            }
        } catch (error) {
            console.error('Error deleting medicine:', error);
        }
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
