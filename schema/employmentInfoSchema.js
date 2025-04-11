const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  currentJobTitle: { type: String, required: true },
  employmentStatus: { type: String, enum: ['Employed', 'Unemployed', 'Student'], required: true },
  companyName: String,
  yearsOfExperience: { type: Number, required: true },
  resumePath: String,
});
