/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const medicineModel = require('../models/medicineModel');

// Get all medicines
exports.getAllMedicines = (req, res) => {
    medicineModel.getAllMedicines((err, data) => {
        if (err) {
            console.error('Error in controller:', err);
            res.status(500).send('Error fetching medicines data');
            return;
        }
        res.json(data);
    });
};

// Add a new medicine
exports.addMedicine = (req, res) => {
    const { medicine, usage, units, category, dosage, price, manufacturer, description, categoryDescription } = req.body;
    const newMedicine = {
        medicine, usage, units, category, dosage, price, manufacturer, description, categoryDescription
    };

    medicineModel.addMedicine(newMedicine, (err, result) => {
        if (err) {
            console.error('Error in controller:', err);
            res.status(500).send('Error adding medicine');
            return;
        }
        res.status(201).send('Medicine added successfully');
    });
};

// Update a medicine by ID
exports.updateMedicine = (req, res) => {
    const { id } = req.params;
    const { medicine, usage, units, category, dosage, price, manufacturer, description, categoryDescription } = req.body;
    const updatedMedicine = {
        medicine, usage, units, category, dosage, price, manufacturer, description, categoryDescription
    };

    medicineModel.updateMedicine(id, updatedMedicine, (err, result) => {
        if (err) {
            console.error('Error in controller:', err);
            res.status(500).send('Error updating medicine');
            return;
        }
        res.send('Medicine updated successfully');
    });
};

// Delete a medicine by ID
exports.deleteMedicine = (req, res) => {
    const { id } = req.params;

    medicineModel.deleteMedicine(id, (err, result) => {
        if (err) {
            console.error('Error in controller:', err);
            res.status(500).send('Error deleting medicine');
            return;
        }
        res.send('Medicine deleted successfully');
    });
};
