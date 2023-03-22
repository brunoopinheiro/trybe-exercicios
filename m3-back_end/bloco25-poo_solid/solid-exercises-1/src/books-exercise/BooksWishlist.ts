type Book = {
  book: string;
  author: string;
  genre: string;
};

class BooksWishlist {
  private wishlist: Book[];

  constructor(book: Book) {
    this.wishlist = [];
    this.wishlist.push(book);
  }

  addToWishlist(newBook: Book): void {
    this.wishlist.push(newBook);
  }

  showWishlist(): void {
    return console.log(this.wishlist);
  }
}

const book1: Book = {
  book: 'The Road',
  author: 'Cormac McCarty',
  genre: 'Dystopia',
};
const book2: Book = {
  book: 'Misery',
  author: 'Stephen King',
  genre: 'Thriller',
};

const wishlist = new BooksWishlist(book1);
wishlist.addToWishlist(book2);

wishlist.showWishlist();

export default BooksWishlist;