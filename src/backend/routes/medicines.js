/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicinesController');

// Route to fetch all medicines
router.get('/', medicinesController.getAllMedicines);

// Route to add a new medicine
router.post('/', medicinesController.addMedicine);

// Route to update a medicine by ID
router.put('/:id', medicinesController.updateMedicine);

// Route to delete a medicine by ID
router.delete('/:id', medicinesController.deleteMedicine);

router.get('/stockAlerts', (req, res, next) => {
    console.log('GET /api/stockAlerts called');
    next();
}, medicinesController.getLowStockAlerts);


module.exports = router;
