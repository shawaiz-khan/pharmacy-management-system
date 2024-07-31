/* eslint-disable no-undef */
const db = require('../utils/db');

const getSalesData = (req, res) => {
    console.log('Fetching sales data');

    const query = `
        SELECT 
            COUNT(*) AS totalTransactions,
            SUM(price) AS totalSales
        FROM 
            transactions_data
    `;

    console.log('Executing query:', query);

    db.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', query);
            console.error('Error details:', error);
            res.status(500).json({ error: 'Failed to fetch sales data' });
        } else {
            console.log('Query results:', results);
            if (results.length > 0) {
                res.status(200).json(results[0]);
            } else {
                console.log('No data found');
                res.status(200).json({ totalTransactions: 0, totalSales: 0 });
            }
        }
    });
};

module.exports = { getSalesData };