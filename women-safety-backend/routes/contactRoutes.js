const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// POST new contact
router.post('/', async (req, res) => {
  const { name, phone } = req.body;
  const contact = new Contact({ name, phone });
  await contact.save();
  res.status(201).json(contact);
});

// DELETE a contact
router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
});

// Simulate alert
router.post('/alert', async (req, res) => {
  // Simulate action, e.g., notify emergency contacts
  res.json({ message: '🚨 Alert sent to emergency contacts!' });
});

module.exports = router;
