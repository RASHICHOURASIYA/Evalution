const express = require('express');
const customerRoute = express.Router();
const Customer = require('../models/customer');


customerRoute.post('/', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

   
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

 
    const newCustomer = await Customer.create({
      name,
      email,
      password,
      role,
    });

  
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = customerRoute;
