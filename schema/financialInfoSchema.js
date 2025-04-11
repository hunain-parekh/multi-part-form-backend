const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  monthlyIncome: { type: Number, required: true },
  loanStatus: { type: String, enum: ['Yes', 'No'], required: true },
  loanAmount: Number,
  creditScore: { type: Number, required: true },
});
