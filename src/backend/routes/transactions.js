/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/add', (req, res, next) => {
    next();
}, transactionController.addTransaction);

router.get('/', (req, res, next) => {
    next();
}, transactionController.getAllTransactions);

router.get('/:patientID', (req, res, next) => {
    next();
}, transactionController.getTransactionsByPatientID);

router.get('/total', (req, res, next) => {
    next();
}, transactionController.getTotalTransactions);

module.exports = router;
