/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require('../utils/db'); // Adjust path as necessary

const getAllTransactions = (req, res) => {
    console.log('Fetching all transactions');

    const query = 'SELECT * FROM transactions_data';

    db.query(query, (error, results) => {
        if (error) {
            console.error('Failed to fetch transactions:', error);
            return res.status(500).json({ error: 'Failed to fetch transactions' });
        }
        res.status(200).json(results);
    });
};


const getTransactionsByPatientID = (req, res) => {
    const { patientID } = req.params;

    console.log('Received patientID:', patientID);

    const query = 'SELECT * FROM transactions_data WHERE patient_id = ?';
    const queryParams = [patientID];

    db.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('Failed to fetch transactions:', error);
            return res.status(500).json({ error: 'Failed to fetch transactions' });
        }
        res.status(200).json(results);
    });
};

const addTransaction = (req, res) => {
    const { medicine_name, quantity, price, date, patient_name, patient_id, doctor_name } = req.body;

    console.log('Adding transaction with data:', req.body);

    const query = 'INSERT INTO transactions_data (medicine_name, quantity, price, date, patient_name, patient_id, doctor_name) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const queryParams = [JSON.stringify(medicine_name), quantity, price, date, patient_name, patient_id, doctor_name];

    db.query(query, queryParams, (error, results) => {
        if (error) {
            console.error('Failed to add transaction:', error);
            return res.status(500).json({ error: 'Failed to add transaction' });
        }
        res.status(200).json({ message: 'Transaction added successfully' });
    });
};

const getTotalTransactions = (req, res) => {
    const query = 'SELECT SUM(price) AS total FROM transactions_data';

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching total transactions:', error);
            res.status(500).json({ error: 'Failed to fetch total transactions' });
        } else {
            res.status(200).json(results[0].total);
        }
    });
};

const getSalesData = (req, res) => {
    console.log('Fetching sales data');

    const query = `
        SELECT 
            COUNT(*) AS totalTransactions,
            SUM(price) AS totalSales
        FROM 
            transactions_data
    `;

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', query);
            console.error('Error details:', error);
            res.status(500).json({ error: 'Failed to fetch sales data' });
        } else {
            console.log('Query executed successfully:', results);
            res.status(200).json(results[0]);
        }
    });
};

module.exports = {
    getAllTransactions,
    getTransactionsByPatientID,
    addTransaction,
    getTotalTransactions,
    getSalesData  // Export the new function
};
