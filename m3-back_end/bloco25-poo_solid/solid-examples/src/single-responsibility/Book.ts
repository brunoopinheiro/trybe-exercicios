export default class Book {
  private _author: string;
  private _title: string;

  constructor(author: string, title: string) {
    this._author = author;
    this._title = title;
  }

  get author(): string {
    return this._author;
  }

  get title(): string {
    return this._title;
  }
}
