const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

app.use(express.json());

// Import routes
const missionRoutes = require('./routes/missions');

// Use routes
app.use('/api/missions', missionRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
