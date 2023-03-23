import IStorage from "./IStorage";

export default class MockedStorage implements IStorage {
  read(): string[] {
    return [];
  }

  insert(obj: string): void { }
}