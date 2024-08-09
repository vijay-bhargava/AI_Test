const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/userRoutes');
const customRefineRoutes = require('./routes/customRefineRoutes');
const imageGenerationRoutes = require('./routes/imageGenerationRoutes');
const audioRoutes = require('./routes/audioRoutes');
const profileRoutes = require('./routes/profileRoutes');

// //
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//http://localhost:3000/
app.use('/api/customRefine', customRefineRoutes);
app.use('/api/imageGenerate', imageGenerationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/profileGenerate', profileRoutes);

app.listen('3003', () => {
  console.log(`Server running on port 3003`);
});