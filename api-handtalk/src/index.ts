import express from 'express';
import cors from 'cors';
import DatabaseService from './services/databaseService';
import collectRoutes from './routes/collect';
import listRoutes from './routes/list';
import mongoose from 'mongoose';

export const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

(async () => {
  try {
    await DatabaseService.getInstance().connect('mongodb://localhost:27017/dados-plugin');
  } catch (error) {
    console.error('Erro ao iniciar a API:', error);
  }
})();

app.use('/collect', collectRoutes);
app.use('/list', listRoutes);

app.listen(port, () => {
  console.log(`API escutando na porta ${port}`);
});