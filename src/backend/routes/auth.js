/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Check login status route
router.get('/auth/status', authController.checkLoginStatus);

// Logout route
router.post('/auth/logout', authController.logoutUser);

module.exports = router;
