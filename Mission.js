// models/Mission.js
const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  accommodation: { type: String, required: true },
  country: { type: String, required: true },
  riskLevel: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  supervisorApproval: { type: Boolean, default: false },
  secondaryApproval: { type: Boolean, default: false },
});

module.exports = mongoose.model('Mission', MissionSchema);
