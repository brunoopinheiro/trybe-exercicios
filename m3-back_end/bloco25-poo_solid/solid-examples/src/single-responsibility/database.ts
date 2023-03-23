interface Database<T> {
  save(obj: T): void;
}

export default Database;
