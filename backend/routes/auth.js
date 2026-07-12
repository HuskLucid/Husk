const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
  // In a real app, hash password and create user in DB
  res.status(201).json({ success: true, message: 'User registered' });
});

router.post('/login', async (req, res) => {
  // In a real app, verify credentials and return JWT
  res.status(200).json({ success: true, token: 'fake-jwt-token' });
});

module.exports = router;
