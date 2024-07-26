// routes/customRefineRoutes.js
const express = require('express');
const router = express.Router();
const imageGenerationController = require('../controllers/imageGenerationController');

router.post('/', imageGenerationController.imageGenerate);
module.exports = router;