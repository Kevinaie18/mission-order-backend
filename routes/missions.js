const express = require('express');
const router = express.Router();
const Mission = require('../models/Mission');

// Create a new mission
router.post('/', async (req, res) => {
  const newMission = new Mission(req.body);
  try {
    const savedMission = await newMission.save();
    res.status(201).json(savedMission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update mission approval status by supervisor
router.put('/:id/approve', async (req, res) => {
  try {
    const updatedMission = await Mission.findByIdAndUpdate(
      req.params.id,
      { supervisorApproval: true },
      { new: true }
    );
    res.status(200).json(updatedMission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
