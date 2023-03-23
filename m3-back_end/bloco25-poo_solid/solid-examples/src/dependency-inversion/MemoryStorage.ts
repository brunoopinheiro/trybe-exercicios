import IStorage from "./IStorage";

class MemoryStorage implements IStorage {
  private storage: string[];

  constructor() {
    this.storage = [];
  }

  read(): string[] {
    return this.storage;
  }

  insert(record: string): void {
    this.storage.push(record)
  }
}

export default MemoryStorage;