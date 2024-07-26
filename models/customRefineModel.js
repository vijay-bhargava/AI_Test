const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomRefineSchema = new Schema({
    clientName: {
    type: String,
    required: true
  },
  clientIndustry: {
    type: String,
    required: true,
    unique: true
  },
  productDomain: {
    type: String,
    required: true
  },
  clientSubDomain: {
    type: String,
    required: true
  },
  clientBackground: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('CustomRefine', CustomRefineSchema);