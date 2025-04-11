const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  alternatePhoneNumber: String,
  addressLine1: { type: String, required: true },
  addressLine2: String,
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});
