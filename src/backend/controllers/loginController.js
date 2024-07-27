/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    userModel.getUserByEmail(email, (err, user) => {
        if (err) {
            console.error('Database error in getUserByEmail:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ error: 'Error validating password' });
            }

            if (isMatch) {
                // Set session or token for user
                req.session.userId = user.id; // or use a token mechanism
                return res.status(200).json({ message: 'Login successful' });
            } else {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
        });
    });
};

module.exports = {
    loginUser
};
