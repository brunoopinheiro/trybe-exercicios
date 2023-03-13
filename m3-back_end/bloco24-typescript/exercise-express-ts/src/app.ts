import express from "express";
import * as userController from './controllers/user.controller';

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('listening');
});

app.get('/', userController.getAll);