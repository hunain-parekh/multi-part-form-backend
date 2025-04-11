const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  preferredContactMode: { type: String, enum: ['Email', 'Phone', 'SMS'], required: true },
  hobbiesAndInterests: [{ type: String }],
  newsletterSubscription: { type: Boolean, default: false },
});
