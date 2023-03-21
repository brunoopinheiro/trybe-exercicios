import ICharacter from "../interfaces/ICharacter";
import IModel from "../interfaces/IModel";

export default class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: ICharacter) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacters = await this.model.getAll();
    return ({ status: 200, data: allCharacters });
  }
}