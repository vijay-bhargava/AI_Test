const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');

router.post('/ts', audioController.audioGenerate);
module.exports = router;