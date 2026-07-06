const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Định nghĩa API: GET http://localhost:3000/api/reports
router.get('/reports', reportController.getAllReports);

module.exports = router;