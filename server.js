const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const missionRoutes = require('./routes/missions'); // Assuming this is your existing route for mission requests
const userRoutes = require('./routes/users'); // New route for user authentication and registration

// Use routes
app.use('/api/missions', missionRoutes); // Mission-related routes
app.use('/api/users', userRoutes);        // User-related routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
