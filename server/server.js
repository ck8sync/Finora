const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();
console.log('Environment loaded');

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

// Create DB pool
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.PG_USER || 'postgres',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'finora',
  password: process.env.PG_PASSWORD || 'yourpassword',
  port: process.env.PG_PORT ? Number(process.env.PG_PORT) : 5432,
});
console.log('Database pool created');

// Root route
app.get('/', (req, res) => {
  console.log('GET / called');
  res.json({ message: 'Finora API running successfully 🚀' });
});

// Health check route
app.get('/api/health', async (req, res) => {
  console.log('GET /api/health called');
  try {
    await pool.query('SELECT 1');
    res.json({ healthy: true, db: 'connected' });
  } catch (err) {
    console.error('DB health check failed:', err.message);
    res.status(500).json({ healthy: false, error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
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
