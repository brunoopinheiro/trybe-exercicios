import ICharacter from "./ICharacter";
import { IDbCharacter } from "./IDbCharacter";

export default interface IModel {
  create: (character: ICharacter) => Promise<IDbCharacter>;
  update: (id: number, character: ICharacter) => Promise<IDbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<IDbCharacter[]>
  getById: (id: number) => Promise<IDbCharacter>
}