const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  accommodation: { type: String, required: true },
  country: { type: String, required: true },
  riskLevel: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  supervisorApproval: { type: Boolean, default: false }
});

module.exports = mongoose.model('Mission', missionSchema);
