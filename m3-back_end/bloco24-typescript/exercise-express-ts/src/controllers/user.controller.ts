import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getAll = async (_req: Request, res: Response) => {
  const result = await userService.getAll();
  return res.status(200).json(result);
};