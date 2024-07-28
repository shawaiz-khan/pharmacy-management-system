/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// New route to get total patients
router.get('/count', (req, res, next) => {
    console.log('GET /api/patients/count called');
    next();
}, transactionController.getTotalPatients);

module.exports = router;
