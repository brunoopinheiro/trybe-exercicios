import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Author from './AuthorModel';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING(30),
      allowNull: false,
    },
    authorId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id',
      },
    },
    genreId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'genres',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'books',
    underscored: true,
    timestamps: false,
  },
);

Book.belongsTo(Author, { foreignKey: 'id' });
Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;