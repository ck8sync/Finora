const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Load env vars
dotenv.config();
console.log('Environment loaded');

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Initialize express
const app = express();
console.log('Express initialized');

// Middleware
app.use(cors());
app.use(express.json());
console.log('Middleware configured');

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
console.log('Auth routes configured');

const protectedRoutes = require('./routes/protected');
app.use('/api/protected', protectedRoutes);
console.log('Protected routes configured');

// Root route
app.get('/', (req, res) => {
  console.log('GET / called');
  res.json({ message: 'Finora API running successfully 🚀' });
});

// Health check route
app.get('/api/health', async (req, res) => {
  console.log('GET /api/health called');
  if (mongoose.connection.readyState === 1) {
    res.json({ healthy: true, db: 'connected' });
  } else {
    res.status(500).json({ healthy: false, error: 'MongoDB not connected' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Finora server listening on port ${PORT}`);
  });

  // Handle errors
  server.on('error', (error) => {
    console.error('Server error:', error);
  });

  process.on('unhandledRejection', (error) => {
    console.error('Unhandled rejection:', error);
  });

  process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error);
  });
});
