/* eslint-disable no-undef */
const db = require('../utils/db');

// Function to fetch all medicines
const getAllMedicines = (callback) => {
    const sql = 'SELECT * FROM medicine';
    db.query(sql, (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results);
    });
};

module.exports = { getAllMedicines };
