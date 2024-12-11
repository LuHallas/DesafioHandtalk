import {describe, beforeAll, afterAll, it, expect} from '@jest/globals';
import request from 'supertest'; 
import { app } from '../src/index'; 
import Data from '../src/models/dataModel';
import mongoose from 'mongoose';

describe('Rota /collect', () => {
  beforeAll(async () => {
    // Conecte-se ao MongoDB (use uma URI de teste)
    await mongoose.connect('mongodb://localhost:27017/test-handtalk'); 
  });

  afterAll(async () => {
    // Remova os dados de teste e desconecte-se do MongoDB
    await Data.deleteMany({});
    await mongoose.connection.close();
  });

  it('deve salvar os dados no banco de dados', async () => {
    const res = await request(app)
      .post('/collect')
      .set('Authorization', 'abc123xyz') 
      .send({
        device: 'Desktop',
        os: 'Windows',
        origin: 'www.exemplo.com', 
        themeChangeCount: 0,
      });

    expect(res.statusCode).toBe(201); 
    expect(res.body.message).toBe('Dados salvos com sucesse!');

    // Verifique se os dados foram salvos no banco de dados
    const savedData = await Data.findOne({ origin: 'www.exemplo.com' }); 
    expect(savedData).toBeDefined();
    expect(savedData?.device).toBe('Desktop');
    // ... (verifique outros campos) ...
  });

  // Adicione mais testes para outros cenários, como:
  // - Token inválido
  // - Dados inválidos na requisição
  // - Limite de requisições
});