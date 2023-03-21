import ICharacter from "./ICharacter";

export interface IDbCharacter extends ICharacter {
  id: number;
}

export const db: IDbCharacter[] = [];
