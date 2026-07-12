const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  // In a real app, fetch products from DB
  const mockProducts = [
    { id: '1', name: 'Fresh Apples', price: 120, stock: 50 },
    { id: '2', name: 'Whole Wheat Bread', price: 40, stock: 20 }
  ];
  res.status(200).json({ success: true, products: mockProducts });
});

router.post('/', async (req, res) => {
  // In a real app, verify admin role and create product
  res.status(201).json({ success: true, message: 'Product created' });
});

module.exports = router;
