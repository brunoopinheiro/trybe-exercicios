import Books from "./database/models/BookModel";
import Comments from "./database/models/CommentModel";

(async () => {
  const books = await Books.findAll({ raw: true });
  console.table(books);

  const booksWithComments = await Comments.findAll({ raw: true, include: ['comments'] });
  console.table(booksWithComments);
  process.exit(0);
})();