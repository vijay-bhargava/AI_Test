// routes/customRefineRoutes.js
const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const profileGenerationController = require('../controllers/profileController');

router.post('/',  profileGenerationController.profileGenerate);
module.exports = router;