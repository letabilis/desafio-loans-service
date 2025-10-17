import type { Request, Response } from 'express';

export const checkHealth = (req: Request, res: Response) => {
  const data = {
    timestamp: Date.now(),
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    message: 'OK',
  };
  res.status(200).json(data);
};
