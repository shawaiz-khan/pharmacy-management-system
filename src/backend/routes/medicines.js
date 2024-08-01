/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicinesController');

// Medicine Routes  
router.get('/', medicinesController.getAllMedicines);
router.post('/', medicinesController.addMedicine);
router.put('/:id', medicinesController.updateMedicine);
router.delete('/:id', medicinesController.deleteMedicine);

module.exports = router;