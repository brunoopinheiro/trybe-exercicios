import { IUser } from "../interfaces";
import connection from "./connection"

export const getAll = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute('SELECT * FROM Users');
  return rows as IUser[];
}