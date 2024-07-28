/* eslint-disable no-undef */
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const checkLoginStatus = (req, res) => {
    if (req.session.userId) {
        res.status(200).json({ isLoggedIn: true });
    } else {
        res.status(200).json({ isLoggedIn: false });
    }
};

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
                console.log("Logged In");
                req.session.userId = user.id; // or use a token mechanism
                req.session.user = user; // store user info in session
                return res.status(200).json({ message: 'Login successful' });
            } else {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
        });
    });
};

const logoutUser = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ error: 'Failed to log out' });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
};


module.exports = {
    checkLoginStatus,
    logoutUser,
    loginUser
};
