/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.get('/sales', (req, res, next) => {
    console.log('GET /api/sales called');
    next();
}, salesController.getSalesData);

module.exports = router;