import { IUser } from '../interfaces';
import * as userModel from '../models/user.model';

export const getAll = async (): Promise<IUser[]> => {
  const users = await userModel.getAll();
  return users;
}