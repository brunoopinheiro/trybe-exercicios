import IStorage from "./IStorage";
import MemoryStorage from "./MemoryStorage";

export default class PostService {
  private db: IStorage;

  constructor (db: IStorage = new MemoryStorage()) {
    this.db = db;
  }

  getPosts(): string[] {
    return this.db.read();
  }

  createPost(title: string): void {
    this.db.insert(title);
  }
}