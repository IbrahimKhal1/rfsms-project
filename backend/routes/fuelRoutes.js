const express = require('express');
const router = express.Router();
const Fuel = require('../models/Fuel');

const verifyToken = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');

// ✅ Admin Only: Add fuel
router.post('/', verifyToken, checkRole('Admin'), async (req, res) => {
  const { type, price, quantityLiters } = req.body;

  const fuel = new Fuel({ type, price, quantityLiters });
  await fuel.save();

  res.status(201).json(fuel);
});

// ✅ Anyone can GET fuel list
router.get('/', async (req, res) => {
  const fuels = await Fuel.find().sort({ dateAdded: -1 });
  res.json(fuels);
});


// ✏️ PUT: Update fuel (Admin only)
router.put('/:id', verifyToken, checkRole('Admin'), async (req, res) => {
  const { type, price, quantityLiters } = req.body;

  try {
    const updated = await Fuel.findByIdAndUpdate(
      req.params.id,
      { type, price, quantityLiters },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update fuel' });
  }
});

// 🗑 DELETE: Remove fuel (Admin only)
router.delete('/:id', verifyToken, checkRole('Admin'), async (req, res) => {
  try {
    await Fuel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Fuel deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete fuel' });
  }
});

module.exports = router;
