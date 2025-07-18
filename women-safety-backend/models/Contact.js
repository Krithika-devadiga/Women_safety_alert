const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
