import sequelize from "sequelize";
import Author from "./database/models/AuthorModel";
import Book from "./database/models/BookModel";

(async () => {
  const authors = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
    ],
    group: 'authors.name',
    order: [['totalBooks', 'DESC']],
    raw: true,
  });
  console.table(authors.map((author) => author.toJSON()));

  process.exit(0);
})();