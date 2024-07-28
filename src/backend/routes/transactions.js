/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/add', (req, res, next) => {
    console.log('POST /api/transactions called');
    next();
}, transactionController.addTransaction);

router.get('/', (req, res, next) => {
    console.log('GET /api/transactions called');
    next();
}, transactionController.getAllTransactions);

router.get('/:patientID', (req, res, next) => {
    console.log(`GET /api/transactions/${req.params.patientID} called`);
    next();
}, transactionController.getTransactionsByPatientID);

// New route to get total transactions
router.get('/total', (req, res, next) => {
    console.log('GET /api/transactions/total called');
    next();
}, transactionController.getTotalTransactions);

router.get('/sales', transactionsController.getSalesData);


module.exports = router;
