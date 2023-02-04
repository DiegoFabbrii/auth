import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(401);

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = verify(token, `${process.env.PRIVATE_KEY}`);
    const { id } = data as TokenPayload;
    req.userId = id;
    return next();
  } catch (error) {
    res.sendStatus(401);
  }
}
