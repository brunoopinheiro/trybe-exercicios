export default interface IStorage {
  read(): string[];
  insert(obj: string): void;
}