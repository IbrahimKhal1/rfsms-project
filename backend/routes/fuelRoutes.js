const express = require('express');
const router = express.Router();
const Fuel = require('../models/Fuel');

const verifyToken = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware'); // ⬅️ import it

// 🔐 Admin only: Add fuel
router.post('/', verifyToken, checkRole('Admin'), async (req, res) => {
  const { type, price, quantityLiters } = req.body;

  const fuel = new Fuel({ type, price, quantityLiters });
  await fuel.save();

  res.status(201).json(fuel);
});

// ✅ Anyone can GET fuel list (no token required)
router.get('/', async (req, res) => {
  const fuels = await Fuel.find().sort({ dateAdded: -1 });
  res.json(fuels);
});

module.exports = router;
