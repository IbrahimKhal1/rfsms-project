// models/Fuel.js
const mongoose = require('mongoose');

const fuelSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['PMS', 'AGO', 'DPK'], // Petrol, Diesel, Kerosene
  },
  price: {
    type: Number,
    required: true,
  },
  quantityLiters: {
    type: Number,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Fuel', fuelSchema);