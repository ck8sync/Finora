const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Load environment variables from .env in development
require('dotenv').config();

/**
 * Helper to sign JWTs and provide a clear error when JWT_SECRET is missing.
 * Throws an error with message 'JWT_SECRET_NOT_CONFIGURED' when the secret isn't set.
 */
function signToken(payload, options = {}) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    const err = new Error('JWT_SECRET_NOT_CONFIGURED');
    throw err;
  }
  return jwt.sign(payload, secret, options);
}

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await user.save();

    // Generate a JWT token (will throw if JWT_SECRET is missing)
    let token;
    try {
      token = signToken({ userId: user._id }, { expiresIn: '1h' });
    } catch (err) {
      if (err.message === 'JWT_SECRET_NOT_CONFIGURED') {
        console.error('JWT secret not configured. Set JWT_SECRET in your environment or .env file.');
        return res.status(500).json({ message: 'Server configuration error: JWT secret not set' });
      }
      throw err;
    }

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Error registering user:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      res.status(500).json({ message: 'Registration failed' });
    }
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token (will throw if JWT_SECRET is missing)
    let token;
    try {
      token = signToken({ userId: user._id }, { expiresIn: '1h' });
    } catch (err) {
      if (err.message === 'JWT_SECRET_NOT_CONFIGURED') {
        console.error('JWT secret not configured. Set JWT_SECRET in your environment or .env file.');
        return res.status(500).json({ message: 'Server configuration error: JWT secret not set' });
      }
      throw err;
    }

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

// Forgot password endpoint
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      // You may choose to return 200 here to prevent email enumeration
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate password reset token (will throw if JWT_SECRET is missing)
    let resetToken;
    try {
      resetToken = signToken({ userId: user._id }, { expiresIn: '1h' });
    } catch (err) {
      if (err.message === 'JWT_SECRET_NOT_CONFIGURED') {
        console.error('JWT secret not configured. Set JWT_SECRET in your environment or .env file.');
        return res.status(500).json({ message: 'Server configuration error: JWT secret not set' });
      }
      throw err;
    }

    // Set reset token and expiry
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email to user with reset link
    const resetLink = `http://localhost:5173/reset-password/${resetToken}`; // TODO: Use environment variable for client URL
    console.log('Password reset link (send via email in production):', resetLink); // TODO: Implement email sending

    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    console.error('Error handling forgot password:', error);
    res.status(500).json({ message: 'Forgot password failed' });
  }
});

// Reset password endpoint
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: 'Token and new password are required' });
    }

    // Find user with reset token and expiry
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password and remove reset token
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error handling reset password:', error);
    res.status(500).json({ message: 'Reset password failed' });
  }
});

module.exports = router;