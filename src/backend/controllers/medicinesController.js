/* eslint-disable no-undef */
const medicineModel = require('../models/medicineModel');

exports.getAllMedicines = (req, res) => {
    medicineModel.getAllMedicines((err, data) => {
        if (err) {
            res.status(500).send('Error fetching medicines data');
            return;
        }
        res.json(data);
    });
};
