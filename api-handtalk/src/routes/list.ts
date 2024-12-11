import express from 'express';
import Data from '../models/dataModel';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const token = req.query.token as string;
    const data = await Data.find({ token }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    res.status(500).json({ message: 'Erro ao buscar os dados.' });
  }
});

export default router;