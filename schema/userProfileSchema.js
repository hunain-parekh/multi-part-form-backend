const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dateOfBirth: { type: Date, required: true },
});
