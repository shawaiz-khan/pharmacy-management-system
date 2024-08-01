/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router.get('/sales', (req, res, next) => {
    next();
}, salesController.getSalesData);

module.exports = router;