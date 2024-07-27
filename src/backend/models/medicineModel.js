/* eslint-disable no-undef */
const db = require('../utils/db'); // Ensure this is your database connection file

exports.getAllMedicines = (callback) => {
    const query = 'SELECT * FROM medicines';
    db.execute(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

exports.addMedicine = (newMedicine, callback) => {
    const query = `
        INSERT INTO medicines (medicine, \`usage\`, units, category, dosage, price, manufacturer, description, categoryDescription)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        newMedicine.medicine,
        newMedicine.usage,
        newMedicine.units,
        newMedicine.category,
        newMedicine.dosage,
        newMedicine.price,
        newMedicine.manufacturer,
        newMedicine.description,
        newMedicine.categoryDescription
    ];

    db.execute(query, values, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

exports.updateMedicine = (id, updatedMedicine, callback) => {
    const query = `
        UPDATE medicines
        SET medicine = ?, \`usage\` = ?, units = ?, category = ?, dosage = ?, price = ?, manufacturer = ?, description = ?, categoryDescription = ?
        WHERE id = ?
    `;
    const values = [
        updatedMedicine.medicine,
        updatedMedicine.usage,
        updatedMedicine.units,
        updatedMedicine.category,
        updatedMedicine.dosage,
        updatedMedicine.price,
        updatedMedicine.manufacturer,
        updatedMedicine.description,
        updatedMedicine.categoryDescription,
        id
    ];

    db.execute(query, values, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};


// Delete a medicine by ID
exports.deleteMedicine = (id, callback) => {
    const query = 'DELETE FROM medicines WHERE id = ?';
    db.execute(query, [id], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
