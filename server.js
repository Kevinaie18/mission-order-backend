// Import user routes
const userRoutes = require('./routes/users');

// Use user routes
app.use('/api/users', userRoutes);
