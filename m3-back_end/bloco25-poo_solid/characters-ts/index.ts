import CharacterService from "./classes/CharacterService";
import LocalDbModel from "./classes/LocalDbModel";
import MockDbModel from "./classes/MockDbModel";

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);