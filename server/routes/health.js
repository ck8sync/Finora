import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ healthy: true, db: 'connected' });
  } catch (err) {
    res.status(500).json({ healthy: false, error: err.message });
  }
});

export default router;
