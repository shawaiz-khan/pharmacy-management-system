/* eslint-disable no-undef */
// register.js
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController'); // Make sure this path is correct

router.post('/register', registerController.registerUser);

module.exports = router;
