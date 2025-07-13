// server.js

// Import core packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load .env file

// Import and run MongoDB connection
const connectDB = require('./config/db');
connectDB(); // 🔌 Connect to MongoDB Atlas

// Import your route files
const fuelRoutes = require('./routes/fuelRoutes');      // 🛢️ For fuels
const authRoutes = require('./routes/authRoutes');      // 🔐 For register/login

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares (these run before routes)
app.use(cors());                  // ✅ Allow requests from Postman/browser
app.use(express.json());          // ✅ Parse JSON from the request body

// Base Test Route
app.get('/', (req, res) => {
  res.send('Welcome to the RFSMS Backend API');
});

// Use Routes
app.use('/api/fuels', fuelRoutes);   // ➡️  http://localhost:5000/api/fuels
app.use('/api/auth', authRoutes);    // ➡️  http://localhost:5000/api/auth

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
