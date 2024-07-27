/* eslint-disable no-undef */
const connection = require('../utils/db');

const getUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    connection.query(query, [email], (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results[0]);
    });
};

const createUser = (firstName, lastName, email, password, callback) => {
    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [firstName, lastName, email, password], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};


module.exports = {
    getUserByEmail,
    createUser
};
