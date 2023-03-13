import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

import Books from './BookModel';

class Comments extends Model {
  declare id: number;
  declare text: string;
  declare author: string;
}

Comments.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: STRING(255),
    allowNull: false,
  },
  author: {
    type: STRING(100),
    allowNull: false,
  },
  bookId: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'comments',
  timestamps: false,
});

Books.hasMany(Comments);
Comments.belongsTo(Books);

export default Comments;