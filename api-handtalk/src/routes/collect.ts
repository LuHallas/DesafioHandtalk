import express from 'express';
import Data from '../models/dataModel';
import authMiddleware from '../middleware/authMiddleware';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';

const router = express.Router();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 5, // limite de 5 requisições por janela
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.headers.authorization as string,
  handler: (req, res) => {
    res.status(429).json({ message: 'Muitas requisições. Tente novamente mais tarde.' });
  },
});

router.post('/', authMiddleware, limiter, async (req, res) => {
  try {
    const { device, os, origin, themeChangeCount } = req.body;
    const token = req.headers.authorization;

    const data = new Data({
      device,
      os,
      origin,
      themeChangeCount,
      token,
    });

    await data.save();
    res.status(201).json({ message: 'Dados salvos com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
    res.status(500).json({ message: 'Erro ao salvar os dados.' });
  }
});

export default router;