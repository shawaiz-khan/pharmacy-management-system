/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicinesController');

// Route to fetch all medicines
router.get('/', medicinesController.getAllMedicines);

module.exports = router;
