const mongoose = require('mongoose');
const userProfileSchema = require('../schema/userProfileSchema');
const contactInfoSchema = require('../schema/contactInfoSchema');
const employmentInfoSchema = require('../schema/employmentInfoSchema');
const financialInfoSchema = require('../schema/financialInfoSchema');
const preferencesSchema = require('../schema/preferencesSchema');

const userSchema = new mongoose.Schema({
  userProfile: userProfileSchema,
  contactInfo: contactInfoSchema,
  employmentInfo: employmentInfoSchema,
  financialInfo: financialInfoSchema,
  preferences: preferencesSchema,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
