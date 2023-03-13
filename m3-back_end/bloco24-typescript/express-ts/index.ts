import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response): Response => {
  return res.status(statusCodes.OK).send('Express + Typescript');
});

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);
  
  switch (name) {
    case 'BadRequestError':
      res.status(statusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'ValidationError':
      res.status(statusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(statusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(statusCodes.CONFLICT).json({ message });
      break;
    default:
      console.log(err);
      res.sendStatus(statusCodes.INTERNAL_SERVER_ERROR);
      break;
  }

  next();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
