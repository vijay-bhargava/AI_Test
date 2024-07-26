// routes/customRefineRoutes.js
const express = require('express');
const router = express.Router();
const customRefineController = require('../controllers/customRefineController');

router.post('/', customRefineController.customRefine);
router.post('/ai', customRefineController.customRefineAI);
module.exports = router;