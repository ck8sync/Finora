require('dotenv').config(); // load .env before anything else

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// CORS configuration: allow only your frontend origin.
// For development, set origin to 'http://localhost:5173'.
// If you need cookies/auth, set credentials: true and use an exact origin (not '*').
app.use(cors({
  origin: ['http://localhost:5173', 'https://finora-eight.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('MONGO_URI is not set in environment. Exiting.');
  process.exit(1);
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
const protectedRoutes = require('./routes/protected');

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

// Start server
const PORT = process.env.PORT || 5000;
// Only listen on a port if not in a Vercel environment
if (!process.env.VERCEL_ENV) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('JWT_SECRET set:', !!process.env.JWT_SECRET);
  });
}

module.exports = async (req, res) => {
  await mongoose.connection.asPromise(); // Ensure MongoDB is connected
  app(req, res);
};