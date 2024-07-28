import { useState, useEffect } from 'react';

const AddMedicines = () => {
    const [medicinesList, setMedicinesList] = useState([]);
    const [newMedicine, setNewMedicine] = useState({
        medicine: '',
        usage: '',
        units: '',
        category: '',
        dosage: '',
        price: '',
        manufacturer: '',
        description: '',
        categoryDescription: ''
    });
    const [editing, setEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchMedicines();
    }, []);

    const fetchMedicines = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/medicines');
            const data = await response.json();
            setMedicinesList(data); // Ensure data includes IDs
        } catch (error) {
            console.error('Error fetching medicines:', error);
        }
    };

    const handleAddOrUpdateMedicine = async (e) => {
        e.preventDefault();
        const url = editing
            ? `http://localhost:3000/medicines/${editId}`
            : 'http://localhost:3000/medicines';
        const method = editing ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMedicine)
            });
            if (response.ok) {
                fetchMedicines();
                setNewMedicine({
                    medicine: '',
                    usage: '',
                    units: '',
                    category: '',
                    dosage: '',
                    price: '',
                    manufacturer: '',
                    description: '',
                    categoryDescription: ''
                });
                setEditing(false);
                setEditId(null);
            } else {
                console.error(editing ? 'Failed to update medicine' : 'Failed to add medicine');
            }
        } catch (error) {
            console.error(editing ? 'Error updating medicine:' : 'Error adding medicine:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMedicine(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDeleteMedicine = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/medicines/${id}`, {
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

    const handleEditMedicine = (medicine) => {
        setNewMedicine(medicine);
        setEditing(true);
        setEditId(medicine.id);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{editing ? 'Edit Medicine' : 'Add Medicine'}</h2>

            <form onSubmit={handleAddOrUpdateMedicine} className="mb-6">
                <div className="flex flex-col mb-4">
                    <label htmlFor="medicine" className="mb-2 font-semibold">Medicine Name:</label>
                    <input id="medicine" name="medicine" type="text" value={newMedicine.medicine} onChange={handleChange} placeholder="Enter medicine name" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="usage" className="mb-2 font-semibold">Usage:</label>
                    <input id="usage" name="usage" type="text" value={newMedicine.usage} onChange={handleChange} placeholder="Enter usage" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="units" className="mb-2 font-semibold">Units:</label>
                    <input id="units" name="units" type="text" value={newMedicine.units} onChange={handleChange} placeholder="Enter units" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="category" className="mb-2 font-semibold">Category:</label>
                    <input id="category" name="category" type="text" value={newMedicine.category} onChange={handleChange} placeholder="Enter category" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="dosage" className="mb-2 font-semibold">Dosage:</label>
                    <input id="dosage" name="dosage" type="text" value={newMedicine.dosage} onChange={handleChange} placeholder="Enter dosage" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="price" className="mb-2 font-semibold">Price:</label>
                    <input id="price" name="price" type="text" value={newMedicine.price} onChange={handleChange} placeholder="Enter price" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="manufacturer" className="mb-2 font-semibold">Manufacturer:</label>
                    <input id="manufacturer" name="manufacturer" type="text" value={newMedicine.manufacturer} onChange={handleChange} placeholder="Enter manufacturer" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="description" className="mb-2 font-semibold">Description:</label>
                    <textarea id="description" name="description" value={newMedicine.description} onChange={handleChange} placeholder="Enter description" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="categoryDescription" className="mb-2 font-semibold">Category Description:</label>
                    <textarea id="categoryDescription" name="categoryDescription" value={newMedicine.categoryDescription} onChange={handleChange} placeholder="Enter category description" className="border border-gray-300 p-2 rounded-lg" />
                </div>
                <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    {editing ? 'Update Medicine' : 'Add Medicine'}
                </button>
            </form>

            <ul className="list-disc list-inside text-gray-700">
                {medicinesList.length > 0 ? (
                    medicinesList.map((medicine) => (
                        <li key={medicine.id} className="flex justify-between items-center mb-2">
                            {medicine.medicine}
                            <div className="flex items-center">
                                <button onClick={() => handleEditMedicine(medicine)} className="ml-4 py-1 px-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Edit</button>
                                <button onClick={() => handleDeleteMedicine(medicine.id)} className="ml-4 py-1 px-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
                            </div>
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
