import readline from 'readline-sync';
import { ResultSetHeader } from 'mysql2';
import connection from './models/connection';

const main = async () => {
  const title = readline.question('Digite o nome do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO books(title, price, author, isbn) VALUES (?, ?, ?, ?)',
    [title, price, author, isbn],
  );

  console.log(insertId);
}

main();