/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');

// Endpoint to handle login
router.post('/login', loginUser);

// Endpoint to check login status
router.get('/status', (req, res) => {
    if (req.session.userId) {
        res.json({ isLoggedIn: true, user: req.session.user }); // Assuming user info is stored in session
    } else {
        res.json({ isLoggedIn: false });
    }
});

// Endpoint to handle logout
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to log out' });
        }
        res.clearCookie('connect.sid'); // Assuming 'connect.sid' is your session cookie name
        res.status(200).json({ message: 'Logged out' });
    });
});

module.exports = router;
