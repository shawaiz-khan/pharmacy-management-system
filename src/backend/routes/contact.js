/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/submit', contactController.submitContact);
module.exports = router;
