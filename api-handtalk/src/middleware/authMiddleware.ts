import { Request, Response, NextFunction } from 'express';

const validTokens: { [origin: string]: string } = {
  'localhost': '71c62986-2640-4e96-a7a6-95f6195bb226',
};

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware de autenticação chamado');
  
  const token = req.headers.authorization;
  const origin = req.body.origin;

  if (token && validTokens[origin] === token) {
    console.log('Token válido');
    next();
  } else {
    console.log('Token invalido');
    res.status(401).json({ message: 'Token inválido.' });
  }
};

export default authMiddleware;