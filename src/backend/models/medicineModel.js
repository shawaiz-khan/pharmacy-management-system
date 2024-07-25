/* eslint-disable no-undef */
const db = require('../utils/db');

// Get all medicines
exports.getAllMedicines = (callback) => {
    const sql = 'SELECT * FROM medicines';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
};

// Add a new medicine
exports.addMedicine = (newMedicine, callback) => {
    const sql = 'INSERT INTO medicines (medicine, usage, units, category, dosage, price, manufacturer, description, categoryDescription) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [newMedicine.medicine, newMedicine.usage, newMedicine.units, newMedicine.category, newMedicine.dosage, newMedicine.price, newMedicine.manufacturer, newMedicine.description, newMedicine.categoryDescription];
    db.query(sql, values, (err, result) => {
        callback(err, result);
    });
};

// Update a medicine by ID
exports.updateMedicine = (id, updatedMedicine, callback) => {
    const sql = 'UPDATE medicines SET medicine = ?, usage = ?, units = ?, category = ?, dosage = ?, price = ?, manufacturer = ?, description = ?, categoryDescription = ? WHERE id = ?';
    const values = [updatedMedicine.medicine, updatedMedicine.usage, updatedMedicine.units, updatedMedicine.category, updatedMedicine.dosage, updatedMedicine.price, updatedMedicine.manufacturer, updatedMedicine.description, updatedMedicine.categoryDescription, id];
    db.query(sql, values, (err, result) => {
        callback(err, result);
    });
};

// Delete a medicine by ID
exports.deleteMedicine = (id, callback) => {
    const sql = 'DELETE FROM medicines WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
};
