/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    userModel.getUserByEmail(email, (err, existingUser) => {
        if (err) {
            console.error('Database error in getUserByEmail:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).json({ error: 'Password encryption failed' });
            }

            userModel.createUser(firstName, lastName, email, hashedPassword, (err, result) => {
                if (err) {
                    console.error('Database error in createUser:', err);
                    return res.status(500).json({ error: 'Failed to register user' });
                }

                res.status(201).json({ message: 'User registered successfully' });
            });
        });
    });
};

module.exports = {
    registerUser
};
